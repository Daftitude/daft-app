// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import TokenStats from '../components/TokenStats';
import GasGauge from '../components/GasGauge';
import CheckInScheduler from '../components/CheckInScheduler';
import AgreementStatus from '../components/AgreementStatus';
import BonusTracker from '../components/BonusTracker';
import DBAForm from '../components/DBAForm';
import FamilyPlanner from '../components/FamilyPlanner';
import StickyBoard from '../components/StickyBoard';
import TaskList from '../components/TaskList';
import CalendarView from '../components/CalendarView';
import Marketplace from '../components/Marketplace';
import FamilyVote from '../components/FamilyVote';
import TrustContractStatus from '../components/TrustContractStatus';
import FamilyBulletin from '../components/FamilyBulletin';
import ReminderBoard from '../components/ReminderBoard';
import VotesBoard from '../components/VotesBoard';
import TokenModal from '../components/popouts/TokenModal';
import DBAModal from '../components/popouts/DBAModal';
import TrustModal from '../components/popouts/TrustModal';
import StickyModal from '../components/popouts/StickyModal';
import VoteModal from '../components/popouts/VoteModal';
import TaskModal from '../components/popouts/TaskModal';
import ReminderModal from '../components/popouts/ReminderModal';
import MarketplaceModal from '../components/popouts/MarketplaceModal';
import PopoutContainer from '../components/popouts/PopoutContainer';
import TokenSummaryCard from '../components/TokenSummaryCard';
import BadgeDisplay from '../components/BadgeDisplay';
import ParentBadgeCreator from '../components/ParentBadgeCreator';
import BonusConfetti from '../components/BonusConfetti';
import MyAchievementsModal from '../components/popouts/MyAchievementsModal';
import { useToken } from '../context/TokenContext';

export default function Dashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const [customBadges, setCustomBadges] = useState(() => {
    const saved = localStorage.getItem('customBadges');
    return saved ? JSON.parse(saved) : [];
  });
  const [hasNewBadges, setHasNewBadges] = useState(false);
  const { tokens } = useToken();

  const handleOpen = (modal) => setActiveModal(modal);
  const handleClose = () => setActiveModal(null);

  const addCustomBadge = (badge) => {
    const updated = [...customBadges, badge];
    setCustomBadges(updated);
    localStorage.setItem('customBadges', JSON.stringify(updated));
  };

  // Track new badge unlock
  useEffect(() => {
    const lastCheck = localStorage.getItem('lastBadgeTokens');
    if (!lastCheck) {
      localStorage.setItem('lastBadgeTokens', JSON.stringify(tokens));
    } else {
      const prev = JSON.parse(lastCheck);
      const prevSum = Object.values(prev).reduce((a, b) => a + b, 0);
      const currentSum = Object.values(tokens).reduce((a, b) => a + b, 0);
      if (currentSum > prevSum) {
        setHasNewBadges(true);
      }
    }
  }, [tokens]);

  const handleAchievementsClick = () => {
    setHasNewBadges(false);
    localStorage.setItem('lastBadgeTokens', JSON.stringify(tokens));
    setShowAchievements(true);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Top Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TokenSummaryCard />
        </div>
        <GasGauge />
      </div>

      {/* Badge System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ParentBadgeCreator addBadge={addCustomBadge} />
        <BadgeDisplay customBadges={customBadges} />
        <BonusConfetti />
      </div>

      {/* Stats & Core */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TokenStats />
        <CheckInScheduler />
        <AgreementStatus />
      </div>

      {/* Functional Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BonusTracker />
        <DBAForm />
        <FamilyPlanner />
        <StickyBoard />
        <TaskList />
        <CalendarView />
        <Marketplace />
        <FamilyVote />
        <TrustContractStatus />
        <FamilyBulletin />
        <ReminderBoard />
        <VotesBoard />
      </div>

      {/* Popout Launch Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        <button onClick={() => handleOpen('token')} className="btn">🔓 Token</button>
        <button onClick={() => handleOpen('dba')} className="btn">📄 DBA</button>
        <button onClick={() => handleOpen('trust')} className="btn">🤝 Trust</button>
        <button onClick={() => handleOpen('sticky')} className="btn">📝 Sticky</button>
        <button onClick={() => handleOpen('vote')} className="btn">🗳️ Vote</button>
        <button onClick={() => handleOpen('task')} className="btn">✅ Task</button>
        <button onClick={() => handleOpen('reminder')} className="btn">⏰ Reminder</button>
        <button onClick={() => handleOpen('marketplace')} className="btn">🛒 Market</button>
        
        <button
          onClick={handleAchievementsClick}
          className={`btn relative transition-all duration-300 ${
            hasNewBadges ? 'animate-pulse ring-2 ring-yellow-400' : ''
          }`}
        >
          🏅 My Achievements
          {hasNewBadges && (
            <span className="absolute top-0 right-0 mt-1 mr-1 h-2 w-2 rounded-full bg-red-500 shadow-md animate-ping" />
          )}
        </button>
      </div>

      {/* Modals */}
      <PopoutContainer>
        {activeModal === 'token' && <TokenModal onClose={handleClose} />}
        {activeModal === 'dba' && <DBAModal onClose={handleClose} />}
        {activeModal === 'trust' && <TrustModal onClose={handleClose} />}
        {activeModal === 'sticky' && <StickyModal onClose={handleClose} />}
        {activeModal === 'vote' && <VoteModal onClose={handleClose} />}
        {activeModal === 'task' && <TaskModal onClose={handleClose} />}
        {activeModal === 'reminder' && <ReminderModal onClose={handleClose} />}
        {activeModal === 'marketplace' && <MarketplaceModal onClose={handleClose} />}
        {showAchievements && <MyAchievementsModal onClose={() => setShowAchievements(false)} />}
      </PopoutContainer>
    </div>
  );
}