// src/components/popouts/MarketplaceModal.jsx
const mockItems = [
    { id: 1, name: 'Stay Up Late Pass', cost: 12 },
    { id: 2, name: 'Movie Night Pick', cost: 15 },
    { id: 3, name: 'Trade Token for Cash', cost: 20 },
  ];
  
  export default function MarketplaceModal({ onClose }) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 w-[28rem] max-w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">🛒 Marketplace</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-lg font-bold">✕</button>
        </div>
        <ul className="space-y-3">
          {mockItems.map(item => (
            <li key={item.id} className="flex justify-between items-center border p-3 rounded-md">
              <span>{item.name}</span>
              <span className="bg-green-100 text-green-700 font-semibold px-2 py-1 rounded">
                {item.cost} DaFT
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }