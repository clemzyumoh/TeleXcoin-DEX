import { useEffect, useRef } from "react";

const CryptoLiveChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BINANCE:BTCUSDT", // Change this if needed
      width: "100%",
      height: 500,
      interval: "1",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_chart",
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[70vw] h-[500px] bg-gray-900 rounded-lg"></div>
  );
};

export default CryptoLiveChart;
