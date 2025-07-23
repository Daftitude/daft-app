// src/components/GasMeter.jsx
import { useState } from 'react';

export default function GasMeter() {
  const [gasLevel, setGasLevel] = useState(2); // 0 = Calm, 5 = Tense

  const labels = ['Zen', 'Smooth', 'Steady', 'Tense', 'Frustrated', 'Volatile'];
  const colors = [
    'bg-green-300',
    'bg-green-400',
    'bg-yellow-300',
    'bg-orange-400',
    'bg-red-500',
    'bg-red-700',
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-2">⛽️ Emotional Gas Meter</h2>
      <input
        type="range"
        min="0"
        max="5"
        value={gasLevel}
        onChange={(e) => setGasLevel(Number(e.target.value))}
        className="w-full"
      />
      <div
        className={`mt-2 py-2 px-4 text-center text-white font-semibold rounded ${colors[gasLevel]}`}
      >
        {labels[gasLevel]}
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Higher gas = more tension. Lower gas = better bandwidth for communication.
      </p>
    </div>
  );
}
