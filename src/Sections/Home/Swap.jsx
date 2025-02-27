import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineSwap } from "react-icons/ai";
import { TbCoinTakaFilled } from "react-icons/tb";

const Swap = () => {
  const [tokens, setTokens] = useState([]);
  const [tokenIn, setTokenIn] = useState(null);
  const [tokenOut, setTokenOut] = useState({
    id: "txc",
    symbol: "TXC",
    name: "TXC",
  }); // Default token out
  const [amountIn, setAmountIn] = useState("");
  const [amountOut, setAmountOut] = useState("");
  const [showDropdownIn, setShowDropdownIn] = useState(false);
  const [showDropdownOut, setShowDropdownOut] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch token data from CoinGecko API
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: { vs_currency: "usd", per_page: 20, page: 1 },
      })
      .then((response) => {
        setTokens(response.data);
        setTokenIn(response.data[0]); // Set first token as default
      })
      .catch((error) => console.error("Error fetching token data:", error));
  }, []);

  const handleTokenSelect = (token, type) => {
    if (type === "in") {
      setTokenIn(token);
      setShowDropdownIn(false);
    } else {
      setTokenOut(token);
      setShowDropdownOut(false);
    }
  };

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-800 p-6 rounded-4xl w-[90vw mb-32 flex flex-col items-center md:w-[60vw]  lg:w-[40vw] mx-auto text-white">
      <h2 className="text-xl dark:text-[#54fffb] mb-4">Swap</h2>

      {/* Input and Token Selector Container */}
      <div className="flex flex-col w-full items-center space-y-4">
        {/* Token In */}
        <div className="flex flex-row items-center dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] bg-gray-800 p-3 rounded-lg">
          <div className="flex flex-col justify-between  w-full">
            <input
              type="text"
              placeholder="Amount"
              value={amountIn}
              onChange={(e) => setAmountIn(e.target.value)}
              className="w-full bg-transparent text-lg outline-none mb-1"
            />
            <span className="text-gray-400 text-sm">$0.0</span>
          </div>
          <div className="relative   ml-4">
            <div
              className="flex items-center  cursor-pointer"
              onClick={() => setShowDropdownIn(!showDropdownIn)}>
              {tokenIn ? (
                <>
                  <img
                    src={tokenIn.image}
                    alt={tokenIn.symbol}
                    className="w-6 h-6 mr-2"
                  />
                  <span>{tokenIn.symbol.toUpperCase()}</span>
                </>
              ) : (
                <span>Select Token</span>
              )}
            </div>
            {showDropdownIn && (
              <div className="absolute bg-gray-800   mt-2 right-0 p-2 rounded-lg w-48 max-h-40 overflow-auto z-10">
                <input
                  type="text"
                  placeholder="Search token..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 mb-2 bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] text-white rounded-lg outline-none"
                />
                {filteredTokens.map((token) => (
                  <div
                    key={token.id}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] cursor-pointer"
                    onClick={() => handleTokenSelect(token, "in")}>
                    <img
                      src={token.image}
                      alt={token.symbol}
                      className="w-6 h-6"
                    />
                    <span>
                      {token.name} ({token.symbol.toUpperCase()})
                    </span>
                  </div>
                ))}
              </div>
            )}
            <span className="flex text-gray-400 text-[12px] mt-1">
              Balance:0
            </span>
          </div>
        </div>
        <div className=" rounded-full p-3 bg-gray-800 shadow-[2px_2px_5pxrgba(0,0,0,0.2),-1px_-1px_5px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] flex w-10 h-10 items-end justify-center">
          <AiOutlineSwap className="rotate-90" />
        </div>
        {/* Token Out */}
        <div className="flex flex-row items-center dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] bg-gray-800 p-3 rounded-lg">
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Amount"
              value={amountOut}
              onChange={(e) => setAmountOut(e.target.value)}
              className="w-full bg-transparent text-lg outline-none mb-1"
            />
            <span className="text-gray-400 text-sm">$0.0 </span>
          </div>
          <div className="relative ml-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowDropdownOut(!showDropdownOut)}>
              <TbCoinTakaFilled className="mr-2" />
              <span>{tokenOut.symbol.toUpperCase()}</span>
              {/* //<FaChevronDown className="ml-2" /> */}
            </div>
            {showDropdownOut && (
              <div className="absolute bg-gray-800 mt-2 p-2 right-0 rounded-lg w-48 max-h-40 overflow-auto z-10">
                <input
                  type="text"
                  placeholder="Search token..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 mb-2 bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] text-white rounded-lg outline-none"
                />
                {filteredTokens.map((token) => (
                  <div
                    key={token.id}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] cursor-pointer"
                    onClick={() => handleTokenSelect(token, "out")}>
                    <img
                      src={token.image}
                      alt={token.symbol}
                      className="w-6 h-6"
                    />
                    <span>
                      {token.name} ({token.symbol.toUpperCase()})
                    </span>
                  </div>
                ))}
              </div>
            )}
            <span className="block text-gray-400 text-[12px] mt-1">
              Balance:0
            </span>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button className="md:w-[50vw] lg:w-[20vw] w-full mt-6 text-[#54fffb] hover:text-black hover:bg-none hover:shadow-[2px_2px_2px_#54fffb,-2px_-2px_2px_#ff05df] dark:hover:text-[#89FFCC] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60 p-3 rounded-2xl">
        Connect
      </button>
    </div>
  );
};

export default Swap;
