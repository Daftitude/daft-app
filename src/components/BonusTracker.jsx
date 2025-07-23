import { useState } from "react";

export default function BonusTracker() {
  const [streak, setStreak] = useState(3);
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);

  const handleStreak = () => {
    const nextStreak = streak + 1;
    setStreak(nextStreak);

    if (nextStreak === 7) {
      setBadgeUnlocked(true);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow w-full">
      <h2 className="text-lg font-bold mb-2">🎖 Bonus Tracker</h2>
      <p className="mb-2 text-gray-600">Daily Streak: {streak} days</p>
      <button
        onClick={handleStreak}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Day to Streak
      </button>
      {badgeUnlocked && (
        <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded shadow-md animate-pulse">
          🏆 Badge Unlocked: 7-Day Streak!
        </div>
      )}
    </div>
  );
}