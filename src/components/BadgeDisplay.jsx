// src/components/BadgeDisplay.jsx
import React, { useState, useEffect } from 'react';
import { useToken } from '../context/TokenContext';
import useSound from 'use-sound';
import confetti from 'canvas-confetti';
import badgeUnlockSound from '../assets/sounds/unlock.mp3';

const CATEGORIES = {
  Earning: ['Token Novice 🪙', 'Getting Warm 💥', 'Stacking Up 📈', 'Token Tycoon 🤑'],
  Behavior: ['Daily Earner 💸', 'Overachiever ⚡', 'Silent Day 🤫'],
  Burn: ['Burn Master 🔥', 'Hot Hands 🔥🔥', 'Zero Waste ♻️', 'Burnt Out 🧯'],
  Composite: ['Combo Crafter ⚗️', 'Advanced Mixer 🧪', 'Master Mixer 🧬', 'Legendary 🔥👑'],
  Portfolio: ['Token Holder 💼', 'Token Whale 🐳', 'Balanced Energy ⚖️', 'Triple Threat 🔺'],
  Fun: ['Almost Nothing 😅'],
  Custom: ['Custom'],
};

const BadgeDisplay = ({ customBadges = [] }) => {
  const { tokens } = useToken();
  const [unlocked, setUnlocked] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Earning');
  const [play] = useSound(badgeUnlockSound);

  const total = (t) => t.K + t.D + t.E + t.KD + t.KDM;

  const defaultBadges = [
    { name: 'Token Novice 🪙', category: 'Earning', description: 'Earn your first token', condition: (t) => t.K + t.D + t.E > 0 },
    { name: 'Getting Warm 💥', category: 'Earning', description: 'Earn 10 total tokens', condition: (t) => t.K + t.D + t.E >= 10 },
    { name: 'Stacking Up 📈', category: 'Earning', description: 'Earn 50 tokens', condition: (t) => t.K + t.D + t.E >= 50 },
    { name: 'Token Tycoon 🤑', category: 'Earning', description: 'Earn 100+ tokens', condition: (t) => t.K + t.D + t.E >= 100 },
    { name: 'Daily Earner 💸', category: 'Behavior', description: 'Earn 10 tokens today', condition: (t) => t.earnedToday >= 10 },
    { name: 'Overachiever ⚡', category: 'Behavior', description: 'Earn 25 tokens today', condition: (t) => t.earnedToday >= 25 },
    { name: 'Silent Day 🤫', category: 'Behavior', description: 'Earn 0 tokens today', condition: (t) => t.earnedToday === 0 },
    { name: 'Burn Master 🔥', category: 'Burn', description: 'Burn 5 tokens total', condition: (t) => t.burned >= 5 },
    { name: 'Hot Hands 🔥🔥', category: 'Burn', description: 'Burn 20 tokens total', condition: (t) => t.burned >= 20 },
    { name: 'Zero Waste ♻️', category: 'Burn', description: 'Burn less than 2 tokens ever', condition: (t) => t.burned < 2 },
    { name: 'Burnt Out 🧯', category: 'Burn', description: 'Burn more tokens than earned today', condition: (t) => t.burned > t.earnedToday },
    { name: 'Combo Crafter ⚗️', category: 'Composite', description: 'Create 1 KD token', condition: (t) => t.KD >= 1 },
    { name: 'Advanced Mixer 🧪', category: 'Composite', description: 'Create 5 KD tokens', condition: (t) => t.KD >= 5 },
    { name: 'Master Mixer 🧬', category: 'Composite', description: 'Create a KDM token', condition: (t) => t.KDM >= 1 },
    { name: 'Legendary 🔥👑', category: 'Composite', description: 'KDM + 100 tokens', condition: (t) => t.KDM >= 1 && total(t) >= 100 },
    { name: 'Token Holder 💼', category: 'Portfolio', description: 'Hold 30+ tokens', condition: (t) => total(t) >= 30 },
    { name: 'Token Whale 🐳', category: 'Portfolio', description: 'Hold 100+ tokens', condition: (t) => total(t) >= 100 },
    { name: 'Balanced Energy ⚖️', category: 'Portfolio', description: '1+ of K, D, E', condition: (t) => t.K > 0 && t.D > 0 && t.E > 0 },
    { name: 'Triple Threat 🔺', category: 'Portfolio', description: '5+ of K, D, E', condition: (t) => t.K >= 5 && t.D >= 5 && t.E >= 5 },
    { name: 'Almost Nothing 😅', category: 'Fun', description: 'Have exactly 1 token of any type', condition: (t) => Object.values(t).filter(v => v === 1).length === 1 },
  ];

  useEffect(() => {
    const newlyUnlocked = defaultBadges.filter(b => b.condition(tokens)).map(b => b.name);
    const newBadges = newlyUnlocked.filter(name => !unlocked.includes(name));
    if (newBadges.length > 0) {
      play();
      confetti();
      setUnlocked(newlyUnlocked);
    }
  }, [tokens]);

  const displayedBadges = [
    ...defaultBadges.filter(b => b.category === activeCategory && unlocked.includes(b.name)),
    ...(activeCategory === 'Custom' ? customBadges : []),
  ];

  return (
    <div className="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4">🏅 Badges</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(CATEGORIES).map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full border text-sm ${activeCategory === cat ? 'bg-indigo-500 text-white' : 'bg-zinc-100 dark:bg-zinc-700'}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayedBadges.length > 0 ? (
          displayedBadges.map((badge, idx) => (
            <div key={idx} className="border rounded p-2 bg-yellow-50 dark:bg-yellow-900">
              <div className="font-semibold">{badge.name}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{badge.description}</div>
            </div>
          ))
        ) : (
          <div className="text-sm col-span-full text-center text-zinc-400">No badges in this category yet.</div>
        )}
      </div>
    </div>
  );
};

export default BadgeDisplay;