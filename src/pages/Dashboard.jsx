import { useState } from 'react';
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
import TokenModal from '../components/popouts/TokenModal';
import DBAModal from '../components/popouts/DBAModal';
import TrustModal from '../components/popouts/TrustModal';
import StickyModal from '../components/popouts/StickyModal';
import VoteModal from '../components/popouts/VoteModal';
import MarketplaceModal from '../components/popouts/MarketplaceModal';

export default function Dashboard() {
  const [balance, setBalance] = useState(100);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [showDBAModal, setShowDBAModal] = useState(false);
  const [showTrustModal, setShowTrustModal] = useState(false);
  const [showStickyModal, setShowStickyModal] = useState(false);
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [showMarketplaceModal, setShowMarketplaceModal] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">🏠 Family Dashboard</h1>

      <TokenStats />
      <GasGauge />
      <CheckInScheduler />
      <AgreementStatus />
      <BonusTracker />
      <DBAForm />
      <FamilyPlanner />
      <StickyBoard />
      <TaskList />
      <CalendarView />
      <Marketplace balance={balance} onPurchase={(item) => setBalance(balance - item.price)} />
      <FamilyVote />
      <TrustContractStatus />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button className="bg-purple-500 text-white p-2 rounded" onClick={() => setShowTokenModal(true)}>Open Token Modal</button>
        <button className="bg-green-600 text-white p-2 rounded" onClick={() => setShowDBAModal(true)}>Open DBA Modal</button>
        <button className="bg-blue-600 text-white p-2 rounded" onClick={() => setShowTrustModal(true)}>Open Trust Modal</button>
        <button className="bg-yellow-600 text-white p-2 rounded" onClick={() => setShowStickyModal(true)}>Open Sticky Modal</button>
        <button className="bg-pink-600 text-white p-2 rounded" onClick={() => setShowVoteModal(true)}>Open Vote Modal</button>
        <button className="bg-red-600 text-white p-2 rounded" onClick={() => setShowMarketplaceModal(true)}>Open Marketplace Modal</button>
      </div>

      {showTokenModal && <TokenModal onClose={() => setShowTokenModal(false)} />}
      {showDBAModal && <DBAModal onClose={() => setShowDBAModal(false)} />}
      {showTrustModal && <TrustModal onClose={() => setShowTrustModal(false)} />}
      {showStickyModal && <StickyModal onClose={() => setShowStickyModal(false)} />}
      {showVoteModal && <VoteModal onClose={() => setShowVoteModal(false)} />}
      {showMarketplaceModal && <MarketplaceModal onClose={() => setShowMarketplaceModal(false)} />}
    </div>
  );
}