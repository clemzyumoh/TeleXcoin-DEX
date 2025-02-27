// import { useState } from "react";
// import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

// const Trade = () => {
//   const [symbol, setSymbol] = useState("BTCUSDT"); // Default is Bitcoin

//   return (
//     <div className="flex flex-col items-center p-4 min-h-screen bg-gray-900 text-white">
//       {/* Search Bar */}
//       <div className="w-full max-w-md flex items-center mb-4">
//         <input
//           type="text"
//           placeholder="Enter crypto symbol (e.g., ETHUSDT)"
//           className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
//           onChange={(e) => setSymbol(e.target.value.toUpperCase())}
//         />
//         <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-r-md">
//           Search
//         </button>
//       </div>

//       {/* TradingView Chart */}
//       <div className="w-full max-w-4xl h-[500px]">
//         <TradingViewEmbed
//           widgetType={widgetType.ADVANCED_CHART}
//           widgetConfig={{
//             symbol: symbol,
//             theme: "dark",
//             autosize: true,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Trade;
import { useEffect, useState } from "react";

const Trade = () => {
  const [symbol, setSymbol] = useState("BINANCE:BTCUSDT"); // Default Bitcoin Chart
  const [search, setSearch] = useState(""); // Search input state

  useEffect(() => {
    // Remove any previous widget before adding a new one
    document.getElementById("tradingview_chart").innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      hide_side_toolbar: false,
      allow_symbol_change: false, // We handle symbol changes manually
    });
    document.getElementById("tradingview_chart").appendChild(script);
  }, [symbol]); // Reload chart when `symbol` changes

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      setSymbol(`BINANCE:${search.toUpperCase()}USDT`); // Convert input to uppercase and set as symbol
      setSearch(""); // Clear input field
    }
  };

  return (
    <div className="w-full flex flex-col mb-32 items-center">
      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="mb-4 w-full max-w-md flex items-center bg-gray-800 p-2 rounded-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for crypto (e.g., ETH)"
          className="w-full p-2 bg-transparent text-white border-none outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 text-[#54fffb] bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-5px_-5px_10px_rgba(255,255,255,0.1)]  rounded-lg">
          Search
        </button>
      </form>

      {/* TradingView Chart */}
      <div id="tradingview_chart" className="w-full h-[500px]"></div>
    </div>
  );
};

export default Trade;

