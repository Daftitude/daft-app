// src/components/DashboardOverview.jsx
import React from 'react';
import TokenSummaryCard from './TokenSummaryCard';
import TaskList from './TaskBoard';
import CalendarWidget from './CalendarBoard';
import StickyBoard from './StickyBoard';
import Marketplace from './Marketplace';
import DBATracker from './DBATracker';
import GasMeter from './GasLevelSlider';
import CheckInTimeline from './CheckInTimeline';
import TrustContractStatus from './TrustContractStatus';

export default function DashboardOverview() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-bold text-center">🎛 Family Control Dashboard</h2>
      <p className="text-center text-gray-500 max-w-xl mx-auto">
        Your all-in-one command center for tokens, tasks, trust, and togetherness.
      </p>

      {/* Token Summary */}
      <TokenSummaryCard />

      {/* Real-Time Emotional Climate & Trust */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GasMeter />
        <TrustContractStatus />
      </div>

      {/* Tasks & Sticky Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TaskList />
        <StickyBoard />
      </div>

      {/* Check-in Timeline & DBAs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CheckInTimeline />
        <DBATracker />
      </div>

      {/* Calendar & Marketplace */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CalendarWidget />
        <Marketplace />
      </div>
    </div>
  );
}