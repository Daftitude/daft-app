// src/components/TokenStats.jsx
import React, { useContext } from 'react';
import { TokenContext } from '../context/TokenContext';

const TokenStats = () => {
  const { tokens } = useContext(TokenContext);

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">📊 Token Stats</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
        {Object.entries(tokens).map(([token, value]) => (
          <li key={token} className="flex justify-between border-b pb-1">
            <span>{token}</span>
            <span className="font-bold">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenStats;