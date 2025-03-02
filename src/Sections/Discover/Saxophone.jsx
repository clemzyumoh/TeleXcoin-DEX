import { useState } from "react";
import Podcast from "../Discover/Podcast";
import Discover from "../Discover/Discover";

const Saxophone = () => {
  const [activeTab, setActiveTab] = useState("Podcast");

  return (
    <div className="w-full p-4 mt-20">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "Podcast"
              ? "bg-none cursor-pointer shadow-[1px_1px_1px_#54fffb,-1px_-1px_1px_#ff05df] text-[#48fd0c] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60"
              : "bg-gray-800 cursor-pointer"
          }`}
          onClick={() => setActiveTab("Podcast")}>
          Podcast
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "DISCOVER"
              ? "bg-none cursor-pointer shadow-[1px_1px_1px_#54fffb,-1px_-1px_1px_#ff05df] text-[#48fd0c] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60"
              : "bg-gray-800 cursor-pointer"
          }`}
          onClick={() => setActiveTab("DISCOVER")}>
          DISCOVER
        </button>
      </div>
      <div>{activeTab === "Podcast" ? <Podcast /> : <Discover />}</div>
    </div>
  );
};

export default Saxophone;
