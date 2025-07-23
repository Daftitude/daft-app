// src/components/popouts/TokenModal.jsx
import React, { useState, useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';

const TokenModal = ({ onClose }) => {
  const {
    tokenState,
    addToken,
    burnToken,
    convertToComposite,
    resetDailyEarnings,
  } = useContext(TokenContext);

  const [action, setAction] = useState('mint');
  const [tokenType, setTokenType] = useState('K');
  const [amount, setAmount] = useState('');
  const [baseTokens, setBaseTokens] = useState(['K', 'D']);
  const [compositeTarget, setCompositeTarget] = useState('KD');

  const handleSubmit = () => {
    const amt = parseInt(amount);
    if (isNaN(amt) || amt <= 0) return;

    if (action === 'mint') {
      addToken(tokenType, amt);
    } else if (action === 'burn') {
      burnToken(tokenType, amt);
    } else if (action === 'convert') {
      convertToComposite(baseTokens, compositeTarget);
    } else if (action === 'reset') {
      resetDailyEarnings();
    }

    setAmount('');
    onClose();
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-2xl max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">🎯 Token Actions</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Action:</label>
        <select
          className="w-full border rounded p-2"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        >
          <option value="mint">Mint (Add)</option>
          <option value="burn">Burn (Remove)</option>
          <option value="convert">Convert to Composite</option>
          <option value="reset">Reset Daily Earnings</option>
        </select>
      </div>

      {(action === 'mint' || action === 'burn') && (
        <>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Token Type:</label>
            <select
              className="w-full border rounded p-2"
              value={tokenType}
              onChange={(e) => setTokenType(e.target.value)}
            >
              <option value="K">K</option>
              <option value="D">D</option>
              <option value="T">T</option>
              <option value="E">E</option>
              <option value="P">P</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Amount:</label>
            <input
              className="w-full border rounded p-2"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
            />
          </div>
        </>
      )}

      {action === 'convert' && (
        <>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Base Tokens:</label>
            <select
              className="w-full border rounded p-2"
              value={baseTokens.join(',')}
              onChange={(e) =>
                setBaseTokens(e.target.value.split(',').map((v) => v.trim()))
              }
            >
              <option value="K,D">K + D → KD</option>
              <option value="K,D,T">K + D + T → KDT</option>
              <option value="K,D,T,E,P">All → DaFT</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Target Composite Token:</label>
            <select
              className="w-full border rounded p-2"
              value={compositeTarget}
              onChange={(e) => setCompositeTarget(e.target.value)}
            >
              <option value="KD">KD</option>
              <option value="KDT">KDT</option>
              <option value="KDM">KDM</option>
              <option value="DaFT">DaFT</option>
            </select>
          </div>
        </>
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded font-semibold"
      >
        Confirm Action
      </button>

      <button
        onClick={onClose}
        className="w-full mt-3 text-sm text-gray-500 hover:underline"
      >
        Cancel
      </button>
    </div>
  );
};

export default TokenModal;