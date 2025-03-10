import { useState } from "react";
import Pool from "../Swap/Pool";
import Strategies from "../Swap/Strategies";

const Liquidity = () => {
  const [activeTab, setActiveTab] = useState("pool"); // Default tab: Pool

  return (
    <div className="w-full flex flex-col mt-20 items-start p-4">
      {/* Toggle Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            activeTab === "pool"
              ? " text-[#ff05df]  bg-none cursor-pointer shadow-[1px_1px_1px_#54fffb,-1px_-1px_1px_#ff05df] dark:hover:text-[#ff05df] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60"
              : " cursor-pointer bg-gray-800"
          }`}
          onClick={() => setActiveTab("pool")}>
          Pool
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            activeTab === "strategies"
              ? " bg-none cursor-pointer shadow-[1px_1px_1px_#54fffb,-1px_-1px_1px_#ff05df] dark:hover:text-[#ff05df] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60"
              : "bg-gray-800 cursor-pointer"
          }`}
          onClick={() => setActiveTab("strategies")}>
          Strategies
        </button>
      </div>

      {/* Render Components Based on Active Tab */}

      <div className="flex justify-center items-center  w-full">
        {activeTab === "pool" ? <Pool /> : <Strategies />}
      </div>
    </div>
  );
};

export default Liquidity;
