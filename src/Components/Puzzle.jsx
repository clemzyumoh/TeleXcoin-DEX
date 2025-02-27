import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  FaExchangeAlt,
  FaCubes,
  FaMoneyBillWave,
  FaGlobe,
  FaShieldAlt,
  FaGamepad,
  FaSeedling,
  FaUsers,
  FaWallet,
  FaCoins,
} from "react-icons/fa";
import { LuVote } from "react-icons/lu";
import { FaInnosoft } from "react-icons/fa";
import { RiSlideshow3Line } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";
const puzzleItems = [
  {
    icon: FaExchangeAlt,
    title: "High-Frequency Trading & DEX",
    description: "Lightning-fast execution.",
    //color: "text-[#007BFF]",
  },
  {
    icon: FaCubes,
    title: "Asset Tokenization",
    description: "Trade fractional real-world assets.",
    //color: "text-[#8A2BE2]",
  },
  {
    icon: FaMoneyBillWave,
    title: "Low-Cost Transactions",
    description: "Micro-payments with minimal fees.",
    //color: "text-[#FF5733]",
  },
  {
    icon: FaShieldAlt,
    title: "Truly Dynamic Blockchain",
    description: "Borderless, scalable, and adaptable.",
    //color: "text-yellow-500",
  },
  {
    icon: FaGamepad,
    title: "GameFi with Rootopia",
    description: "Elevating blockchain gaming.",
    // color: "text-[#FF00FF]",
  },
  {
    icon: FaSeedling,
    title: "Seeding & Foundation",
    description: "Fueling ecosystem growth.",
    //color: "text-orange-500",
  },
  {
    icon: FaUsers,
    title: "Referral & Rewards",
    description: "Earn by expanding the network.",
    //color: "text-[#00FFFF]",
  },
  {
    icon: FaWallet,
    title: "Secure Digital Wallet",
    description: "Manage DRC, RWA & more.",
    //color: "text-teal-500",
  },
  {
    icon: FaCoins,
    title: "Limited Coin Utility",
    description: "Exclusive access & governance.",
    //color: "text-indigo-500",
  },
  {
    icon: FaGlobe,
    title: "Cross-Border Payments",
    description: "Fast, low-cost global transfers.",
    //color: "text-[#40E0D0]",
  },
  {
    icon: FaGraduationCap,
    title: "Education & AI Tools",
    description: "Learning, AI solutions, and tools.",
    //color: "text-[#40E0D0]",
  },
  {
    icon: GiClothes,
    title: "NFTs & Fashion",
    description: "Digital art, trends, and style.",
    //color: "text-[#40E0D0]",
  },
  {
    icon: RiSlideshow3Line,
    title: "DeWorld Show",
    description: "Web3 discussions and insights.",
    //color: "text-[#40E0D0]",
  },
  {
    icon: FaInnosoft,
    title: "Fuel Innovation & More",
    description: "Tech, creativity, and growth.",
    //color: "text-[#40E0D0]",
  },
  {
    icon: LuVote,
    title: "Vote & Fund",
    description: "Support, invest, and decide",
    //color: "text-[#40E0D0]",
  },
];

const PuzzleBox = () => {
  const controls = useAnimation();
  const x = useMotionValue(0); // Tracks x position
  const [isDragging, setIsDragging] = useState(false);

  // Calculate dynamic drag limit
  const cardWidth = 450;
  const totalCards = puzzleItems.length * 2;
  const dragLimit = -(cardWidth * totalCards - window.innerWidth);

  useEffect(() => {
    if (!isDragging) {
      // Auto-scroll animation
      controls.start({
        x: dragLimit,
        transition: {
          ease: "linear",

          duration: 40,
          repeat: Infinity,
        },
      });
    }
  }, [controls, isDragging, dragLimit]);

  return (
    <div className="w-full overflow-hidden py-10 scrollbar-hide touch-pan-x">
      <motion.div
        className="flex space-x-6"
        drag="x"
        dragConstraints={{ left: dragLimit, right: 0 }}
        dragElastic={0.1}
        style={{ x }} // Bind motion value for precise control
        onDragStart={() => {
          setIsDragging(true);
          controls.stop(); // Stop auto-scroll on drag start
        }}
        onDragEnd={() => {
          setIsDragging(false);
          controls.start({
            x: dragLimit,
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          });
        }}
        animate={controls}>
        {puzzleItems.concat(puzzleItems).map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-md transition-opacity dark:shadow-2xl group hover:scale-105 rounded-lg px-6 py-14 text-center flex shadow-xl items-center gap-4 min-w-[450px]">
            <div className="dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1] shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md">
              <item.icon className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80" />
            </div>
            <div className="text-start ml-8">
              <h3 className="text-lg font-bold mb-3 font-orbitron w-full text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PuzzleBox;
