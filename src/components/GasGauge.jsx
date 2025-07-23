import { useState } from "react";

export default function GasGauge() {
  const [gasLevel, setGasLevel] = useState(3);

  return (
    <div className="p-4 bg-white rounded-xl shadow w-full">
      <h2 className="text-lg font-bold mb-2">⛽️ Emotional Gas Level</h2>
      <input
        type="range"
        min="1"
        max="5"
        value={gasLevel}
        onChange={(e) => setGasLevel(Number(e.target.value))}
        className="w-full"
      />
      <p className="mt-2 text-sm">
        {gasLevel === 1 && "🔥 High Tension – Pause & Reflect"}
        {gasLevel === 2 && "😠 Frustrated – Proceed Slowly"}
        {gasLevel === 3 && "😐 Neutral – Monitor Flow"}
        {gasLevel === 4 && "😊 Calm – Tasks Flow Freely"}
        {gasLevel === 5 && "🧘 Super Chill – Bonus Multiplier Active"}
      </p>
    </div>
  );
}