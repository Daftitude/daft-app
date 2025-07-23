// src/pages/Dashboard.jsx
import React, { useState } from 'react';
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


export default function Dashboard() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (modal) => setActiveModal(modal);
  const handleClose = () => setActiveModal(null);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
        🎯 Token & Performance Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TokenSummaryCard />
        <TokenStats />
        <GasGauge />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CheckInScheduler />
        <AgreementStatus />
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

      <div className="flex flex-wrap gap-2 justify-center">
        <button onClick={() => handleOpen('token')} className="btn">🔓 Token</button>
        <button onClick={() => handleOpen('dba')} className="btn">📄 DBA</button>
        <button onClick={() => handleOpen('trust')} className="btn">🤝 Trust</button>
        <button onClick={() => handleOpen('sticky')} className="btn">📝 Sticky</button>
        <button onClick={() => handleOpen('vote')} className="btn">🗳️ Vote</button>
        <button onClick={() => handleOpen('task')} className="btn">✅ Task</button>
        <button onClick={() => handleOpen('reminder')} className="btn">⏰ Reminder</button>
        <button onClick={() => handleOpen('marketplace')} className="btn">🛒 Market</button>
      </div>

      <PopoutContainer>
        {activeModal === 'token' && <TokenModal onClose={handleClose} />}
        {activeModal === 'dba' && <DBAModal onClose={handleClose} />}
        {activeModal === 'trust' && <TrustModal onClose={handleClose} />}
        {activeModal === 'sticky' && <StickyModal onClose={handleClose} />}
        {activeModal === 'vote' && <VoteModal onClose={handleClose} />}
        {activeModal === 'task' && <TaskModal onClose={handleClose} />}
        {activeModal === 'reminder' && <ReminderModal onClose={handleClose} />}
        {activeModal === 'marketplace' && <MarketplaceModal onClose={handleClose} />}
      </PopoutContainer>
    </div>
  );
}