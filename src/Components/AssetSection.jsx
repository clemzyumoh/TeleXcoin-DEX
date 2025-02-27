import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import img from "../assets/logobg.png";
import BlurEffect from "./BlurEffect";
import AnimateItem from "./AnimationItem";
const assets = [
  {
    name: "Deeproots",
    image: img,
    price: "$27,000",
    piece: "30 DRT",
    usd: "$13,500",
  },
  {
    name: "TelexCoin",
    image: img,
    price: "$1,800",
    piece: "2 TC",
    usd: "$3,600",
  },
  { name: "Banana", image: img, price: "$230", piece: "10 BNB", usd: "$2,300" },
  { name: "XRP", image: img, price: "$400", piece: "500 XRP", usd: "$250" },
  { name: "Solana", image: img, price: "$20", piece: "50 SOL", usd: "$1,000" },
];

const AssetSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleAssets = showAll ? assets : assets.slice(0, 3);

  return (
    <section
      className="md:p-6  relative py-8 rounded-3xl bg-[#bfc7f8] dark:bg-gray-800 w-full px-2 
    ">
      <div className="z-0 text-lg">
        <BlurEffect
          color="#D661E8"
          className="w-60 h-60 absolute top-0 right-16 lg:left-32 blur-[250px]  hidden bg-[#D661E8] md:flex dark:blur-[400px]  rounded-full"
        />
      </div>

      <div className="flex justify-center items-center flex-col w-full gap-4">
        <div className=" hidden justify-between items-center w-full text-gray-500 font-semibold mb-2">
          <p className="w-1/3 text-left">Crypto</p>
          <p className="w-1/3 ml-10 md:ml-0 text-center">Price</p>
          <p className="w-1/3 text-right">Assets</p>
        </div>
      

        <div className="w-full flex flex-col gap-4">
          {visibleAssets.map((asset, index) => (
            <AnimateItem key={index} delay={0.2} direction="top">
              <div
                className="bg-white shadow-[2px_2px_5px_rgba(0,0,0,0.2),-1px_-1px_5px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]  
        md:p-4 p-2 rounded-xl w-full flex items-center dark:bg-gray-800">
                {/* Crypto Column */}
                <div className="w-1/3 flex items-center space-x-2 md:space-x-4">
                  {/* <img
                src={asset.image}
                alt={asset.name}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-[2px_2px_5px_#ecb705,-2px_-2px_5px_#040f4c] dark:shadow-[2px_2px_2px_#040F4C,-2px_-2px_2px_#ecb705]"
              /> */}
                  <div>
                    <p className=" font-bold ">{asset.name}</p>
                  </div>
                </div>

                {/* Price Column */}
                <div className="w-1/3 ml-10 md:ml-0 text-center">
                  <p className="font-semibold dark:text-gray-100">
                    {asset.price}
                  </p>
                </div>

                {/* Assets Column */}
                <div className="w-1/3 text-right">
                  <p className=" font-semibold dark:text-gray-100">
                    {asset.usd}
                  </p>
                  <p className=" text-sm dark:text-gray-400">{asset.piece}</p>
                </div>
              </div>
            </AnimateItem>
          ))}
        </div>

        {/* Show More / Less Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4  hover:underline flex items-center  justify-center">
          {showAll ? "Show Less" : "Show More"}
          {showAll ? (
            <FiChevronUp className="text-3xl" />
          ) : (
            <FiChevronDown className="text-3xl" />
          )}
        </button>
      </div>
    </section>
  );
};

export default AssetSection;
