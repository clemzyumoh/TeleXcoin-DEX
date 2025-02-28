import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const Strategies = () => {
  const [pools, setPools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedPool, setExpandedPool] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.example.com/liquidity-pools") // Replace with actual API
      .then((response) => setPools(response.data))
      .catch((error) => console.error("Error fetching pools:", error));
  }, []);

  const toggleDropdown = (poolId) => {
    setExpandedPool(expandedPool === poolId ? null : poolId);
  };

  const filteredPools = pools.filter((pool) =>
    pool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Liquidity Pools</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search pools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 pl-8 border rounded-lg w-64 bg-gray-900 text-white"
          />
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
      </div>

      {/* Pools List */}
      <div className="space-y-4">
        {filteredPools.map((pool) => (
          <div key={pool.id} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <img src={pool.logo1} alt={pool.token1} className="w-6 h-6" />
                <img src={pool.logo2} alt={pool.token2} className="w-6 h-6" />
                <span className="font-bold">{pool.name}</span>
              </div>
              <div className="hidden md:flex space-x-4">
                <span>Liquidity: ${pool.liquidity}</span>
                <span>24h Volume: ${pool.volume24h}</span>
                <span>LP Rewards: {pool.rewards}%</span>
              </div>
              <button
                className="ml-auto p-2 bg-purple-600 rounded-lg"
                onClick={() => toggleDropdown(pool.id)}>
                <FaChevronDown />
              </button>
            </div>

            {/* Dropdown Content */}
            {expandedPool === pool.id && (
              <div className="mt-4 p-2 bg-gray-700 rounded-lg">
                <p>Pool Assets: {pool.assets}</p>
                <p>Pool Share: {pool.share}%</p>
                <p>Your Liquidity: ${pool.yourLiquidity}</p>
                <div className="flex space-x-2 mt-2">
                  <button className="p-2 bg-green-500 rounded-lg">Swap</button>
                  <button className="p-2 bg-red-500 rounded-lg">Remove</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategies;
