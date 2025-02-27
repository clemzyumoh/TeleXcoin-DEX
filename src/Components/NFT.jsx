import React from "react";
import { FaLock, FaStar } from "react-icons/fa";
import BlurEffect from "./BlurEffect";
import nft1 from "../assets/nft1.jpeg";
import nft2 from "../assets/nft2.jpeg";
import nft3 from "../assets/nft3.png";
import nft4 from "../assets/nft4.jpg";

const nftData = [
  {
    id: 1,
    name: "Rootopia",
    price: "10 ETH",
    rating: 4.5,
    image: nft1,
    isLocked: false,
  },
  {
    id: 2,
    name: "Rootopia City",
    price: "5 ETH",
    rating: 4.2,
    image: nft2,
    isLocked: true,
  },
  {
    id: 3,
    name: "Rootopia Princess",
    price: "20 ETH",
    rating: 5,
    image: nft3,
    isLocked: false,
  },
  {
    id: 4,
    name: "Rootopia Punk",
    price: "2 ETH",
    rating: 3.8,
    image: nft4,
    isLocked: true,
  },
];

const NFTSection = () => {
  return (
    <section className="p-6 mb-20 ">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nftData.map((nft) => (
          <div
            key={nft.id}
            className="relative rounded-lg overflow-hidden shadow-lg group">
            {/* Image */}
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay for NFT Details */}
            <div className="absolute bottom-0 w-full bg-black/60 opacity-55  text-white p-4 flex flex-col justify-end transition-opacity duration-500  group-hover:opacity-100">
              <h3 className="text-xl font-semibold">{nft.name}</h3>
              <p className="text-lg">{nft.price}</p>
              <div className="flex items-center mb-2">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{nft.rating}</span>
              </div>
              <button className="bg-green-600 opacity-100 hover:bg-green-700 text-white py-1 px-4 rounded-md">
                Buy Now
              </button>
            </div>

            {/* Lock Icon for Locked NFTs */}
            {nft.isLocked && (
              <div className="absolute inset-0 bg-black/60  flex justify-center items-center text-white text-4xl">
                <FaLock />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NFTSection;
