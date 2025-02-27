import React, { useState } from "react";
import BlurEffect from "./BlurEffect";
const CryptoSection = () => {
  const [showMore, setShowMore] = useState(false);

  const cryptocurrencies = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      price: "$96,852.61",
      change24h: "+0.87%",
      turnover24h: "$30.47B",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      price: "$2,701.29",
      change24h: "+0.67%",
      turnover24h: "$17.53B",
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      price: "$1.00",
      change24h: "+0.01%",
      turnover24h: "$89.25B",
    },
    {
      id: 4,
      name: "BNB",
      symbol: "BNB",
      logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
      price: "$365.75",
      change24h: "-0.12%",
      turnover24h: "$2.87B",
    },
    {
      id: 5,
      name: "USD Coin",
      symbol: "USDC",
      logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
      price: "$1.00",
      change24h: "+0.02%",
      turnover24h: "$4.76B",
    },
    {
      id: 6,
      name: "XRP",
      symbol: "XRP",
      logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
      price: "$0.65",
      change24h: "-0.67%",
      turnover24h: "$2.11B",
    },
    {
      id: 7,
      name: "Cardano",
      symbol: "ADA",
      logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      price: "$1.35",
      change24h: "+0.11%",
      turnover24h: "$1.12B",
    },
    {
      id: 8,
      name: "Dogecoin",
      symbol: "DOGE",
      logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
      price: "$0.25",
      change24h: "+1.25%",
      turnover24h: "$1.85B",
    },
    {
      id: 9,
      name: "Solana",
      symbol: "SOL",
      logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
      price: "$145.12",
      change24h: "-0.45%",
      turnover24h: "$1.76B",
    },
    {
      id: 10,
      name: "Polkadot",
      symbol: "DOT",
      logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
      price: "$28.55",
      change24h: "+0.88%",
      turnover24h: "$965M",
    },
    {
      id: 11,
      name: "Shiba Inu",
      symbol: "SHIB",
      logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
      price: "$0.000028",
      change24h: "-1.25%",
      turnover24h: "$1.52B",
    },
    {
      id: 12,
      name: "Litecoin",
      symbol: "LTC",
      logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
      price: "$182.15",
      change24h: "+0.25%",
      turnover24h: "$1.05B",
    },
    {
      id: 13,
      name: "Chainlink",
      symbol: "LINK",
      logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
      price: "$24.55",
      change24h: "+0.50%",
      turnover24h: "$564M",
    },
    {
      id: 14,
      name: "Polygon",
      symbol: "MATIC",
      logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
      price: "$1.45",
      change24h: "+1.05%",
      turnover24h: "$1.11B",
    },
    {
      id: 15,
      name: "Stellar",
      symbol: "XLM",
      logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
      price: "$0.33",
      change24h: "-0.33%",
      turnover24h: "$592M",
    },
  ];

  const displayedCryptos = showMore
    ? cryptocurrencies
    : cryptocurrencies.slice(0, 5);

  return (
    <section className=" md:mb-20 w-full  relative mb-28 px-2 md:p-6">
    

      <div className="hidden items-center justify-between px-3 gap-3 mb-6 text-sm w-full font-semibold text-gray-700 dark:text-gray-300">
        <div className="md:w-1/3 text-left">Crypto</div>
        <div className="md:w-1/3 ml-18 md:ml-0 text-center">Price</div>
        <div className="md:w-1/3 text-right">24H Change</div>
      </div>

        
    
      <div className="w-full">
        {displayedCryptos.map((crypto) => (
          <div
            key={crypto.id}
            className="flex justify-between items-center mb-4  text-sm py-3 px-3 w-full rounded-2xl shadow-md bg-white dark:bg-gray-800">
            {/* Crypto Column */}
            <div className="flex items-center flex-1">
              <img
                src={crypto.logo}
                alt={crypto.name}
                className="w-10 h-10 rounded mr-2 md:mr-4"
              />
              <div>
                <div className="text-gray-900 dark:text-gray-100 text-sm font-semibold">
                  {crypto.name}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {crypto.turnover24h}
                </div>
              </div>
            </div>

            {/* Price Column */}
            <div className="text-gray-900 ml-10 md:ml-0 dark:text-gray-100 flex-1 text-center">
              {crypto.price}
            </div>

            {/* 24h Change Column */}
            <div
              className={`font-semibold flex-1 text-right ${
                crypto.change24h.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}>
              {crypto.change24h}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4  mb-8 hover:underline">
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default CryptoSection;
