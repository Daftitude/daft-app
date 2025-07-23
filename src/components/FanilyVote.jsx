// src/components/FamilyVote.jsx
import { useState } from 'react';

export default function FamilyVote({ onVoteSubmit }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [topic, setTopic] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (topic && selectedOption) {
      onVoteSubmit({ topic, selectedOption });
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-2">🗳️ Family Vote</h2>
      <p className="text-sm mb-3">Suggest a topic and cast your vote:</p>

      <input
        type="text"
        placeholder="e.g., What should we eat tonight?"
        className="w-full mb-3 p-2 border rounded"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        disabled={submitted}
      />

      <div className="flex gap-3 mb-3 flex-wrap">
        {['Pizza', 'Tacos', 'Salad', 'Leftovers', 'Out to Eat', 'I’ll Be Out'].map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`px-3 py-1 rounded border ${
              selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
            disabled={submitted}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!topic || !selectedOption || submitted}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded disabled:opacity-50"
      >
        {submitted ? 'Vote Submitted' : 'Submit Vote'}
      </button>
    </div>
  );
}