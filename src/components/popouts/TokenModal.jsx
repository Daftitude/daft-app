// src/components/popouts/TokenModal.jsx
import { useState } from 'react';

export default function TokenModal({ onClose, onLogToken }) {
  const [type, setType] = useState('K');
  const [amount, setAmount] = useState(1);
  const [note, setNote] = useState('');

  const handleLog = () => {
    if (!amount || amount < 1) return;
    onLogToken({ type, amount, note });
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-[24rem] max-w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">🪙 Log Token Activity</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 font-bold text-lg">✕</button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Token Type</label>
          <select
            className="w-full border px-3 py-2 rounded bg-gray-100"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="K">K (Kyhl)</option>
            <option value="D">D (Dad)</option>
            <option value="KD">KD (Joint)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Note (optional)</label>
          <textarea
            rows="3"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border px-3 py-2 rounded bg-gray-50"
            placeholder="Reason, timestamp, etc."
          />
        </div>

        <button
          onClick={handleLog}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded"
        >
          Log Token
        </button>
      </div>
    </div>
  );
}