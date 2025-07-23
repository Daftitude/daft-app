// src/components/TokenSummaryCard.jsx
import React from 'react';

const TokenSummaryCard = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">💰 Token Summary</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">K Tokens</p>
          <p className="text-2xl font-bold text-blue-500">42</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">D Tokens</p>
          <p className="text-2xl font-bold text-green-500">68</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">KD Tokens</p>
          <p className="text-2xl font-bold text-purple-500">110</p>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-400 text-center">
        Backed by 0.2 TEP Collateral
      </div>
    </div>
  );
};

export default TokenSummaryCard;