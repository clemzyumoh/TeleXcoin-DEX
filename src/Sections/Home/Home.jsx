import { useState } from "react";
import Swap from "../Home/Swap";
import Trade from "../Home/Trade";

const Home= () => {
  const [activeTab, setActiveTab] = useState("swap");

  return (
    <div className="p-6 pt-28 flex flex-col w-full justify-center items-center">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "swap"
              ? "text-[#54fffb] hover:text-black bg-none cursor-pointer shadow-[1px_1px_1px_#54fffb,-1px_-1px_1px_#ff05df] dark:hover:text-[#89FFCC] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60"
              : "bg-gray-800 cursor-pointer"
          }`}
          onClick={() => setActiveTab("swap")}>
          Swap
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "trade"
              ? "text-[#54fffb] cursor-pointer bg-none shadow-[1px_1px_1px_#54fffb,-1px_-1px_1px_#ff05df]"
              : "bg-gray-800 cursor-pointer"
          }`}
          onClick={() => setActiveTab("trade")}>
          Trade
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeTab === "swap" ? <Swap /> : <Trade />}
    </div>
  );
};

export default Home;
