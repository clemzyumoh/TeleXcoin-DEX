// import { useState } from "react";

// const Strategies = () => {
//   const [activeTab, setActiveTab] = useState("yield-farming");
//   const [stakeValue, setStakeValue] = useState(50);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Strategies</h2>

//       {/* Tabs */}
//       <div className="flex gap-4 border-b">
//         {["yield-farming", "auto-compounding", "hedging"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`py-2 px-4 text-sm font-medium ${
//               activeTab === tab
//                 ? "border-b-2 border-blue-500 text-blue-500"
//                 : "text-gray-500"
//             }`}>
//             {tab.replace("-", " ")}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="mt-4">
//         {activeTab === "yield-farming" && (
//           <div className="p-4 border rounded-lg shadow-md">
//             <h3 className="text-lg font-bold">Yield Farming</h3>
//             <p className="text-sm text-gray-500">
//               Stake your assets to earn passive income from liquidity pools.
//             </p>
//             <div className="mt-4">
//               <input
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={stakeValue}
//                 onChange={(e) => setStakeValue(e.target.value)}
//                 className="w-full"
//               />
//               <p className="text-sm text-gray-700 mt-2">Stake: {stakeValue}%</p>
//             </div>
//           </div>
//         )}

//         {activeTab === "auto-compounding" && (
//           <div className="p-4 border rounded-lg shadow-md">
//             <h3 className="text-lg font-bold">Auto-Compounding</h3>
//             <p className="text-sm text-gray-500">
//               Automatically reinvest your rewards to maximize returns.
//             </p>
//           </div>
//         )}

//         {activeTab === "hedging" && (
//           <div className="p-4 border rounded-lg shadow-md">
//             <h3 className="text-lg font-bold">Hedging Strategies</h3>
//             <p className="text-sm text-gray-500">
//               Protect your assets from market fluctuations with strategic
//               hedging.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Strategies;
import { useState } from "react";

const Strategies = () => {
  const [activeTab, setActiveTab] = useState("yield-farming");
  const [stakeAmount, setStakeAmount] = useState(0);
  const [stakePercentage, setStakePercentage] = useState(50);
  const userBalance = 1000; // Example balance in USD

  const handleStakeChange = (e) => {
    const value = e.target.value;
    setStakePercentage(value);
    setStakeAmount(((value / 100) * userBalance).toFixed(2));
  };

  return (
    <div className="p- flex flex-col justify-center mb-32">
      <h2 className="text-2xl font-semibold mb-4">Strategies</h2>

      {/* Tabs */}
      <div className="flex gap-4 w-full border-b">
        {["yield-farming", "auto-compounding", "hedging"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-sm cursor-pointer font-medium ${
              activeTab === tab
                ? "border-b-2 border-[#48FD0C] text-[#48FD0C]"
                : "text-gray-500"
            }`}>
            {tab.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 w-full flex">
        {activeTab === "yield-farming" && (
          <div className="p-4  rounded-2xl bg-gray-800 w-full shadow-md">
            <h3 className="text-lg font-bold">Yield Farming</h3>
            <p className="text-sm text-gray-400">
              Stake your assets and earn passive income.
            </p>

            {/* Staking Input */}
            <div className="mt-4">
              <label className="block text-sm font-medium">
                Select Stake %
              </label>
              <input
                type="range"
                min="0"
                max="100"
                color="text-[#48fd0c]"
                value={stakePercentage}
                onChange={handleStakeChange}
                className="w-full text-[#48fd0c] mt-2"
              />
              <p className="text-sm text-gray-400 mt-2">
                Stake: {stakePercentage}% (${stakeAmount})
              </p>
            </div>

            <button className="mt-4 px-4 py-2 bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] text-[#48fd0c] rounded-lg  transition">
              Confirm Stake
            </button>
          </div>
        )}

        {activeTab === "auto-compounding" && (
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Auto-Compounding</h3>
            <p className="text-sm text-gray-500">
              Automatically reinvest rewards for higher returns.
            </p>
            <button className="mt-4 px-4 py-2 bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] text-[#48fd0c] rounded-xl transition">
              Activate Auto-Compounding
            </button>
          </div>
        )}

        {activeTab === "hedging" && (
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Hedging Strategies</h3>
            <p className="text-sm text-gray-500">
              Protect your assets from market fluctuations.
            </p>
            <button className="mt-4 px-4 py-2 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] bg-gray-800 text-[#48fd0c] rounded-xl transition">
              Apply Hedging Strategy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Strategies;
