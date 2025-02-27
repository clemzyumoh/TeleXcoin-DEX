import { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { LuChartColumnDecreasing } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";
import { LiaWalletSolid } from "react-icons/lia";
import { GoChevronDown } from "react-icons/go";
const SwapCrypto = () => {
  const [fromCurrency, setFromCurrency] = useState("USDT");
  const [toCurrency, setToCurrency] = useState("DRC");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isReversed, setIsReversed] = useState(false);
  const [rotate, setRotate] = useState(false);

  // User Balances
  const userBalances = {
    USDT: 500,
    USDC: 1000,
  };

  // Conversion Rates
  const conversionRates = {
    USDT: 1 / 500, // 1 DRC = 500 USDT
    USDC: 1 / 600, // 1 DRC = 600 USDC
  };

  // Packages for Selection
  const packages = {
    USDT: [100, 200, 300, 400, 500],
    USDC: [120, 240, 360, 480, 600],
  };

  // Handle Amount Change & Live Conversion
  const handleAmountChange = (value) => {
    setAmount(value);
    setConvertedAmount(value * conversionRates[fromCurrency]);
  };

  // Handle Swap Reversal
  const reverseSwap = () => {
    setIsReversed(!isReversed);
    setRotate(!rotate);
    setFromCurrency(fromCurrency === "USDT" ? "USDC" : "USDT");
    setAmount("");
    setConvertedAmount("");
  };

  return (
    <div className="w-full  px-2 md:w-[70vw] lg:w-[40vw]">
      <div className="flex justify-between my-5  items-center mx-4">
        <div className="flex items-center gap-2">
          <FaCreditCard className="text-sm" />
          <span className="text-">Buy</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-[#]  shadow ">
            <LuSettings2 className="text-sm" />
            <span className="">0.5%</span>
          </div>
          <IoIosLink className="text-sm" />
          <LuChartColumnDecreasing className="text-sm" />
        </div>
      </div>
      <div className="dark:bg-gray-800 shadow bg-white p-3 lg:m-5 rounded-md">
        {/* FROM Card */}
        <div className="w-full flex items-center justify-center flex-col ">
          <div className=" dark:bg-gray-900 shadow dark:text-white py-2 pb-3 flex flex-col w-full rounded-lg ">
            <div className="flex justify-between mx-3 items-center  ">
              <p className="text-gray-400 dark:text-gray-300 font-semibold">
                From
              </p>
              {/* <div className="flex items-center gap-2">
                <LiaWalletSolid className="text-xl" />
                <button
                  onClick={() => handleAmountChange(userBalances[fromCurrency])}
                  className="px-2 text-sm py-1 dark:bg-gray-300 shadow text-gray-800 rounded hover:bg-gray-400">
                  Max
                </button>
                <div className="flex items-center gap-2 py-1 px-2 text-sm shadow dark:bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                  <span className="">50%</span>
                </div>
              </div> */}
              <p className="text-xs mx-3 dark:text-gray-200 mt-1">
                Balance: {userBalances[fromCurrency]} {fromCurrency}
              </p>
            </div>

            <div className="flex dark:text-[#B0E6F8] items-center py-4 px-3 rounded-2xl mt-2  bg-[#E8EBFF]  dark:bg-black dark:border shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#B799F4] w-full justify-between ">
              <div className=" dark:bg-gray-800 bg-white rounded-2xl px-2 py-1">
                <select
                  value={fromCurrency}
                  onChange={(e) => {
                    setFromCurrency(e.target.value);
                    setAmount("");
                    setConvertedAmount("");
                  }}
                  className=" p-2 bg-transparent focus:outline-none text-xl font-bold">
                  <option className="text-black" value="USDT">
                    USDT
                  </option>
                  <option className="text-black" value="USDC">
                    USDC
                  </option>
                </select>
              </div>
              <input
                type="number"
                className=" w-[30vw] p-2 bg-transparent appearance-none rounded-lg  focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-sm font-bold"
              />
              {/* <select
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className=" p-2 bg-transparent text-sm">
                <option className="text-black" value="">
                  Select Package
                </option>
                {packages[fromCurrency].map((pkg) => (
                  <option className="text-black" key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select> */}
            </div>
          </div>

          {/* Swap Icon (Rotates on Click) */}
          <div className=" my-5 ">
            <button
              onClick={reverseSwap}
              className={`p-3 dark:bg-black  bg-[#EBF2FD] shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#9b6afc] rounded-full  transition-transform ${
                rotate ? "rotate-90" : "rotate-90"
              }`}>
              <GoArrowSwitch className="dark:text-[#B0E6F8]  text-3xl " />
            </button>
          </div>

          {/* TO Card */}
          <div className="dark:bg-gray-900 shadow flex w-full flex-col  dark:text-white py-2 rounded-lg">
            <div className="flex justify-between mx-2 mb-0 items-center">
              <p className="text-gray-400 dark:text-gray-300 font-semibold">
                To
              </p>
              {/* <div className="flex items-center gap-2">
                <LiaWalletSolid className="text-xl" />
                <button
                  onClick={() => handleAmountChange(userBalances[fromCurrency])}
                  className="px-2 text-sm py-1 shadow dark:bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                  Max
                </button>
                <div className="flex items-center  py-1 px-2 text-sm shadow dark:bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                  <span className="">50%</span>
                </div>
              </div> */}
            </div>

            <div className="flex rounded-2xl py-2 px-4 gap-5 justify-between w-full bg-[#E8EBFF] shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#B799F4] dark:bg-black dark:border border-[#B0E6F8] items-center mt-2">
              <div className="w bg-white  dark:bg-gray-800 rounded-2xl  text-xl p-3 ">
                <select
                  className=" dark:text-[#B0E6F8] px-3 font-bold"
                  disabled>
                  <option value="DRC">DRC</option>
                </select>
              </div>

              {/* <input
                type="number"
                value={convertedAmount}
                className=" w-[30vw] p-2 bg-transparent text-sm font-bold"
                disabled
              /> */}
              <input
                type="number"
                className=" w-[30vw] p-2 bg-transparent appearance-none rounded-lg  focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-sm font-bold"
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <button
          className="w-full rounded-2xl hover:scale-105 bg-gradient-to-br from-[#9b6afc] hover:bg-none dark:hover:text-[#B799F4] hover:shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#B799F4] to-[#B0e6f8] dark:text-black bg-[#E8EBFF]  dark:bg-black   dark:ext-[#B0E6F8]  font-bold p-2  mt-5 transition"
          onClick={() =>
            alert(`Swapped ${amount} ${fromCurrency} to ${convertedAmount} DRC`)
          }>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default SwapCrypto;
