// src/components/ParentBadgeCreator.jsx
import React, { useState, useEffect } from 'react';

const ParentBadgeCreator = ({ onCreate }) => {
  const [badge, setBadge] = useState({
    name: '',
    icon: '🏅',
    tokenType: 'K',
    threshold: 10,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBadge((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(badge);
    setBadge({ name: '', icon: '🏅', tokenType: 'K', threshold: 10, description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-bold mb-2">🎨 Create Custom Badge</h3>
      <div className="grid grid-cols-2 gap-2">
        <input name="name" value={badge.name} onChange={handleChange} placeholder="Badge Name" required className="p-2 rounded" />
        <input name="icon" value={badge.icon} onChange={handleChange} placeholder="Emoji/Icon" className="p-2 rounded" />
        <select name="tokenType" value={badge.tokenType} onChange={handleChange} className="p-2 rounded">
          <option value="K">K</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="KD">KD</option>
          <option value="KDM">KDM</option>
        </select>
        <input name="threshold" type="number" value={badge.threshold} onChange={handleChange} placeholder="Threshold" className="p-2 rounded" />
      </div>
      <textarea name="description" value={badge.description} onChange={handleChange} placeholder="Description (optional)" className="w-full mt-2 p-2 rounded" />
      <button type="submit" className="bg-green-500 text-white py-1 px-4 rounded mt-2">Add Badge</button>
    </form>
  );
};

export default ParentBadgeCreator;