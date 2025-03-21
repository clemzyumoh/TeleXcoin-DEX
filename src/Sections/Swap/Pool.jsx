// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const PoolCard = ({ pool }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <img
//             src={pool.token1.image}
//             alt={pool.token1.symbol}
//             className="w-6 h-6"
//           />
//           <img
//             src={pool.token2.image}
//             alt={pool.token2.symbol}
//             className="w-6 h-6"
//           />
//           <span>
//             {pool.token1.symbol}/{pool.token2.symbol}
//           </span>
//         </div>
//         <span className="hidden md:flex flex-col ">
//           {" "}
//           <span className="text-[12px]">Liquidity:</span>${pool.liquidity}
//         </span>
//         <span className="hidden md:flex flex-col">
//           {" "}
//           <span className="text-[12px]">24h Vol:</span> ${pool.volume}
//         </span>
//         <span className="hidden md:flex flex-col">
//           {" "}
//           <span className="text-[12px]">LP Rewards:</span> {pool.rewards}%
//         </span>
//         <button className="bg-gray-800 text-[#89FFCC] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] px-3 py-1 rounded-lg ">
//           + Add
//         </button>
//         <button onClick={() => setShowDetails(!showDetails)}>
//           {showDetails ? <FaChevronUp /> : <FaChevronDown />}
//         </button>
//       </div>
//       {showDetails && (
//         <div className="mt-4 p-2 bg-gray-800  rounded-lg">
//           <p>Pool Assets: {pool.assets}</p>
//           <p>Pool Share: {pool.share}%</p>
//           <p>Your Liquidity: ${pool.yourLiquidity}</p>
//           <div className="flex gap-2 mt-2">
//             <button className="bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] px-3 py-1 rounded-lg text-white">
//               Swap
//             </button>
//             <button className="bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] px-3 py-1 rounded-lg text-white">
//               Remove
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Pool = () => {
//   const [pools, setPools] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://api.coingecko.com/api/v3/coins/markets", {
//         params: { vs_currency: "usd", per_page: 10, page: 1 },
//       })
//       .then((response) => {
//         const samplePools = response.data.slice(0, 5).map((token, index) => ({
//           token1: token,
//           token2: response.data[(index + 1) % response.data.length],
//           liquidity: (Math.random() * 1000000).toFixed(2),
//           volume: (Math.random() * 500000).toFixed(2),
//           rewards: (Math.random() * 10).toFixed(2),
//           assets: "ETH, USDC, WBTC",
//           share: (Math.random() * 10).toFixed(2),
//           yourLiquidity: (Math.random() * 1000).toFixed(2),
//         }));
//         setPools(samplePools);
//       })
//       .catch((error) => console.error("Error fetching pools:", error));
//   }, []);

//   const filteredPools = pools.filter((pool) =>
//     `${pool.token1.symbol}/${pool.token2.symbol}`
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6 flex flex-col mb-32 w-full">
//       <div className="flex w-full justify-between items-center mb-6">
//         <h2 className="md:text-xl hidden md:block text-sm font-bold">Liquidity Pools</h2>
//         <input
//           type="text"
//           placeholder="Search Pools..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="p-2 bg-gray-700 text-white rounded-lg"
//         />
//       </div>
//       {filteredPools.map((pool, index) => (
//         <PoolCard key={index} pool={pool} />
//       ))}
//     </div>
//   );
// };

// export default Pool;

import { useState } from "react";

import NewPosition from "../Swap/NewP";
import YourP from "../Swap/YourP";

const Pool= () => {
  const [activeTab, setActiveTab] = useState("newp"); // Default tab: Pool

  return (
    <div className="w-full flex flex-col mt-5 items-center ">
      {/* Toggle Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg text-wh md:text-lg text-sm ${
            activeTab === "newp"
              ? " cursor-pointer text-white "
              : " cursor-pointer text-gray-500"
          }`}
          onClick={() => setActiveTab("newp")}>
          New Position
        </button>
        <button
          className={`px-4 py-2 rounded-lg  text-sm md:text-lg ${
            activeTab === "yourp"
              ? " cursor-pointer text-white "
              : "cursor-pointer text-gray-500"
          }`}
          onClick={() => setActiveTab("yourp")}>
          Your Position
        </button>
      </div>

      <div className="flex justify-center items-start min-h-screen w-full">
        {activeTab === "newp" ? <NewPosition /> : <YourP />}
      </div>
    </div>
  );
};

export default Pool;
