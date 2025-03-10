import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import img1 from "../../assets/one.jpeg"
import { TbCircleNumber1, TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";

const NewPosition = () => {
  const [tokens, setTokens] = useState([]);
  const [tokenIn, setTokenIn] = useState(null);
  const [tokenOut, setTokenOut] = useState(null);
  const [step, setStep] = useState(1);
  const [showDropdown, setShowDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: { vs_currency: "usd", per_page: 20, page: 1 },
      })
      .then((response) => {
        setTokens(response.data);
        setTokenIn(response.data.find((token) => token.symbol === "usdt")); // Default to USDT
        setTokenOut(response.data.find((token) => token.symbol === "usdc")); // Default to USDT
      })
      .catch((error) => console.error("Error fetching token data:", error));
  }, []);

  const handleTokenSelect = (token, type) => {
    if (type === "in") {
      setTokenIn(token);
    } else {
      setTokenOut(token);
    }
    setShowDropdown(null);
  };

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-6 px-3 bg-gray-900 text-white rounded-lg lg:flex-row w-full flex gap-6 mb-32 lg:w-[60vw] md:w-[70vw] mt-5 relative justify-around md:flex-ro flex-col">
      {/* Step Navigation */}
      <div className="flex border lg:flex-col lg:w-[25vw]  rounded-3xl md:justify-around w-full py-4 flex-co md:flex-row items-center justify-between mb-4">
        <button
          className={`p-2 rounded-lg flex gap-2 items-center font-bold ${
            step === 1 ? " cursor-pointer" : "text-gray-500 cursor-pointer"
          }`}
          onClick={() => setStep(1)}>
          <TbCircleNumber1Filled className="cursor-pointer text-5xl" />

          <div className="flex flex-col text-[12px] w-full items-start">
            <span className="text-gray-500 md:text-sm">Step 1</span>
            <span className="md:text-sm">Select Token</span>
          </div>
        </button>
        {/* <div
          className={`p-2 rounded-lg  font-bold ${
            step === 1 ? " " : ""
          }`}
          onClick={() => setStep(1)}>
          <TbCircleNumber1 className="cursor-pointer text-4xl"/>
          </div> */}
        <button
          className={`p-2 rounded-lg flex items-center gap-2 font-bold ${
            step === 2 ? "" : "text-gray-500"
          }`}
          onClick={() => setStep(2)}
          disabled={!tokenIn || !tokenOut}>
          <TbCircleNumber2Filled className="text-5xl cursor-pointer" />
          <div className="flex text-[12px] w-full flex-col items-start">
            <span className="text-gray-500 md:text-sm">Step 2</span>
            <span className="md:text-sm">Enter Amount</span>
          </div>
        </button>
      </div>

      {/* Step 1 Content */}
      {step === 1 && (
        <div className="p-4  bg-gray-800 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Select Tokens</h2>
          <p className="mb-4">Choose the tokens of all networks for your Liquidity.</p>
          <div className="flex gap-4 mb-4">
            {["in", "out"].map((type, index) => (
              <div key={index} className=" w-1/2">
                <button
                  className="w-full p-2 bg-gray-700 lg:relative rounded-lg md:w-1/2 flex items-center justify-between"
                  onClick={() => setShowDropdown(type)}>
                  {type === "in" && tokenIn ? (
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={tokenIn.image}
                          alt={tokenIn.symbol}
                          className="w-6 h-6"
                        />
                        <span>{tokenIn.symbol.toUpperCase()}</span>
                      </div>
                      <IoMdArrowDropdown className="ml-2" />
                    </div>
                  ) : type === "out" && tokenOut ? (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <img
                          src={tokenOut.image}
                          alt={tokenOut.symbol}
                          className="w-6 h-6"
                        />
                        <span>{tokenOut.symbol.toUpperCase()}</span>
                      </div>
                      <IoMdArrowDropdown className="ml-2" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-full">Choose Token</span>
                      <IoMdArrowDropdown />
                    </div>
                  )}
                </button>
                {showDropdown === type && (
                  <div className="absolute bg-gray-800 pb-24  p-4 rounded-lg inset-2 md:w-[70vw]  lg:w-[60vw] w-[90vw] h-screen flex flex-col items-center z-10">
                    <div className="w-full flex justify-between items-center mb-2">
                      <h3 className="text-lg">Select Token</h3>
                      <button onClick={() => setShowDropdown(null)}>X</button>
                    </div>
                    <input
                      type="text"
                      placeholder="Search token..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg outline-none"
                    />
                    <div className="overflow-auto w-full">
                      {filteredTokens.map((token) => (
                        <div
                          key={token.id}
                          className="flex items-center gap-2 p-2 hover:bg-gray-700 cursor-pointer"
                          onClick={() => handleTokenSelect(token, type)}>
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
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2">Fee tier</h2>
          <p className="mb-4">
            The amount earned provides liquidity pools that have fixed 0.3%
            fees.
          </p>
          <button
            className={`w-full p-3 rounded-lg font-bold text-white ${
              tokenIn && tokenOut
                ? "py-3 px-5 rounded-2xl text-[#89FFCC] hover:text-black hover:bg-none hover:shadow-[2px_2px_2px_#54fffb,-2px_-2px_2px_#ff05df] dark:hover:text-[#89FFCC] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60"
                : "bg-gray-600 cursor-not-allowed"
            }`}
            onClick={() => setStep(2)}
            disabled={!tokenIn || !tokenOut}>
            Continue
          </button>
        </div>
      )}

      {/* Step 2 Content */}
      {step === 2 && (
        <div className="p-4 bg-gray-800 w-full gap-4 flex flex-col rounded-lg">
          <h2 className="text-xl font-bold mb-2">Enter Amount</h2>
          {[tokenIn, tokenOut].map((token, index) => (
            <div key={index} className="flex items-center gap-4 mb-2">
              <input
                type="number"
                placeholder="Enter amount"
                className="p-2 bg-gray-700 rounded-lg text-white w-2/3"
              />
              <div className="flex items-center gap-2">
                <img src={token.image} alt={token.symbol} className="w-6 h-6" />
                <span>{token.symbol.toUpperCase()}</span>
              </div>
            </div>
          ))}
          <button className="py-3 px-5 w-[70vw] lg:w-[25vw] rounded-2xl text-[#89FFCC] hover:text-black hover:bg-none hover:shadow-[2px_2px_2px_#54fffb,-2px_-2px_2px_#ff05df] dark:hover:text-[#89FFCC] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60">
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default NewPosition;
