// import React, { useState } from "react";
// import {
//   FaUsers,
//   FaWallet,
//   FaGift,
//   FaGamepad,
//   FaLock,
//   FaChartLine,
//   FaVoteYea,
//   FaTshirt,
// } from "react-icons/fa";
// import { Dialog } from "@headlessui/react";

// const benefits = [
//   {
//     id: 1,
//     name: "Round Table Seat",
//     icon: <FaUsers />,
//     color: "from-purple-500 to-indigo-500",
//     details: "Earn a percentage in each project built on Deep Roots.",
//   },
//   {
//     id: 2,
//     name: "Earning Machine",
//     icon: <FaWallet />,
//     color: "from-blue-500 to-teal-500",
//     details: "Your Address Wallet serves as your passive income generator.",
//   },
//   {
//     id: 3,
//     name: "Referral Rewards",
//     icon: <FaGift />,
//     color: "from-green-500 to-lime-500",
//     details: "Share your referral link and earn across 3 dynamic layers.",
//   },
//   {
//     id: 4,
//     name: "RootOpia Game",
//     icon: <FaGamepad />,
//     color: "from-red-500 to-pink-500",
//     details:
//       "Engage in the DeWorld game and win daily, weekly, and special prizes.",
//   },
//   {
//     id: 5,
//     name: "Private Access",
//     icon: <FaLock />,
//     color: "from-yellow-500 to-orange-500",
//     details:
//       "Early access to Deep Roots Currency and investment opportunities.",
//   },
//   {
//     id: 6,
//     name: "Strategic Trading",
//     icon: <FaChartLine />,
//     color: "from-gray-500 to-blue-700",
//     details: "Trade efficiently with Telexcoin DEX and other tools.",
//   },
//   {
//     id: 7,
//     name: "Vote on DeWorld Funding",
//     icon: <FaVoteYea />,
//     color: "from-teal-500 to-cyan-500",
//     details: "Participate in milestone votes to shape DeWorld’s future.",
//   },
//   {
//     id: 8,
//     name: "Fashion Digital Store",
//     icon: <FaTshirt />,
//     color: "from-indigo-500 to-violet-500",
//     details: "Showcase your digital style and NFTs on MetaFabric.",
//   },
// ];

// const FoundationBenefits = () => {
//   const [selectedBenefit, setSelectedBenefit] = useState(null);

//   return (
//     <div className="flex flex-col items-center px-6 py-10">
//       <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
//         Foundation Seat Benefits
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
//         {benefits.map((benefit) => (
//           <div
//             key={benefit.id}
//             className={`bg-gradient-to-r ${benefit.color} p-6 rounded-2xl shadow-lg flex flex-col items-center cursor-pointer hover:scale-105 transition`}
//             onClick={() => setSelectedBenefit(benefit)}>
//             <div className="text-white text-4xl mb-3">{benefit.icon}</div>
//             <h3 className="text-white text-lg font-semibold text-center">
//               {benefit.name}
//             </h3>
//           </div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       {selectedBenefit && (
//         <Dialog
//           open={true}
//           onClose={() => setSelectedBenefit(null)}
//           className="fixed inset-0 z-50 flex items-center justify-center">
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl max-w-md w-full text-center">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
//               {selectedBenefit.name}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               {selectedBenefit.details}
//             </p>
//             <button
//               className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
//               onClick={() => setSelectedBenefit(null)}>
//               Close
//             </button>
//           </div>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default FoundationBenefits;

// import React, { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import {
//   FaCrown,
//   FaWallet,
//   FaShareAlt,
//   FaGamepad,
//   FaKey,
//   FaRocket,
//   FaExchangeAlt,
//   FaBuilding,
//   FaLightbulb,
//   FaVoteYea,
//   FaRocketchat,
//   FaTshirt,
//   FaPodcast,
//   FaStore,
//   FaPercent,
// } from "react-icons/fa";
// import { FaGraduationCap } from "react-icons/fa6";
// import { MdRocketLaunch } from "react-icons/md";
// import { FaMicrophone } from "react-icons/fa";
// import { TbAccessPoint } from "react-icons/tb";
// import { TbCoinTaka } from "react-icons/tb";
// import AnimatedText from "../../Components/AnimationText";
// const benefits = [
//   {
//     name: "Round Table Seat",
//     detail: "Full Access to Deep Roots DeWorld Platform",
//     icon: <FaCrown />,
//     color: "bg-purple-500",
//   },
//   {
//     name: "Earning Machine",
//     detail: "The Address Wallet – Your Earning Machine",
//     icon: <FaWallet />,
//     color: "bg-green-500",
//   },
//   {
//     name: "Referral Rewards",
//     detail: "Share referral link and earn rewards across 3 dynamic layers.",
//     icon: <FaShareAlt />,
//     color: "bg-blue-500",
//   },
//   {
//     name: "RootOpia Game",
//     detail:
//       "Engage with the largest pool in the DeWorld start with 1 million$ and win daily, weekly, magic box",
//     icon: <FaGamepad />,
//     color: "bg-yellow-500",
//   },
//   {
//     name: "Priority Access",
//     detail: "Private Access to Deep Roots Currency:",
//     icon: <FaKey />,
//     color: "bg-red-500",
//   },
//   {
//     name: "Early Access",
//     detail:
//       "Be the first to get whitelisted and access private investments in new",
//     icon: <TbAccessPoint />,
//     color: "bg-indigo-500",
//   },
//   {
//     name: "Telexcoin DEX",
//     detail: "Connected & Strategic Trading",
//     icon: <TbCoinTaka />,
//     color: "bg-teal-500",
//   },
//   {
//     name: "Deep Assets",
//     detail: "Digitized Real Assets (RWA).",
//     icon: <FaBuilding />,
//     color: "bg-gray-500",
//   },
//   {
//     name: "SHARE VALUE",
//     detail: "Learn, Create, Innovate: AI educational tools.",
//     icon: <FaGraduationCap />,
//     color: "bg-pink-500",
//   },
//   {
//     name: "InnoFi",
//     detail: "Milestone Vote Hub for DeWorld Funding",
//     icon: <FaVoteYea />,
//     color: "bg-orange-500",
//   },
//   {
//     name: "InnoLaunch",
//     detail: "Powering the Next Big Thing",
//     icon: <MdRocketLaunch />,
//     color: "bg-cyan-500",
//   },
//   {
//     name: "MetaFabric",
//     detail: "From Blockchain to Runway: Showcase your digital style and NFTs",
//     icon: <FaTshirt />,
//     color: "bg-lime-500",
//   },
//   {
//     name: "Saxophone Podcast",
//     detail: "Where Blockchain Meets the Beat.",
//     icon: <FaMicrophone/>,
//     color: "bg-rose-500",
//   },
//   {
//     name: "FASHION Digital Store",
//     detail: "Exclusive access to digital fashion assets.",
//     icon: <FaStore />,
//     color: "bg-violet-500",
//   },
//   {
//     name: "12% Seed Return",
//     detail: "Get early investor rewards with a 12% return.",
//     icon: <FaPercent />,
//     color: "bg-emerald-500",
//   },
// ];

// const FoundationBenefits = () => {
//   const [selectedBenefit, setSelectedBenefit] = useState(null);

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="flex justify-center">
//         <AnimatedText
//           text=" Foundation Seat Benefits"
//           animation="fade"
//           as="h1"
//           className="text-3xl font-bold text-center mb-8 tracking-wider bg-gradient-to-l from-[#9C61C1] to-[#1E1164] dark:to-[#B0e6f8] bg-clip-text text-transparent"
//         />
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {benefits.map((benefit, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-xl shadow-lg text-white  flex flex-col items-center justify-center cursor-pointer transform transition hover:scale-105 ${benefit.color}`}
//             onClick={() => setSelectedBenefit(benefit)}>
//             <div className="text- shadow p-3 md:p-5 rounded-full md:text-3xl text-xl bg-transparent backdrop:backdrop-blur-2xl  mb-4">
//               {benefit.icon}
//             </div>
//             <h3 className="md:text-lg text-sm font-semibold">{benefit.name}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Modal Popup */}
//       {selectedBenefit && (
//         <Dialog
//           open={!!selectedBenefit}
//           onClose={() => setSelectedBenefit(null)}
//           className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//             <h2 className="text-xl font-bold mb-4">{selectedBenefit.name}</h2>
//             <p className="text-gray-700">{selectedBenefit.detail}</p>
//             <button
//               className={`mt-4 text-white px-4 py-2 rounded-lg ${
//                 selectedBenefit?.color || "bg-black"
//               }`}
//               onClick={() => setSelectedBenefit(null)}>
//               Close
//             </button>
//           </div>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default FoundationBenefits;

import React, { useState } from "react";
import img from "../../assets/checkneon.jpg";
import AnimateItem from "../../Components/AnimationItem";
const benefits = [
  { name: "Round Table Seat", image: "/images/round-table.png" },
  { name: "Earning Machine", image: "/images/earning-machine.png" },
  { name: "Referral Rewards", image: "/images/referral.png" },
  { name: "RootOpia Game", image: "/images/game.png" },
  { name: "Priority Access", image: "/images/key.png" },
  { name: "Early Access", image: "/images/access.png" },
  { name: "Telexcoin DEX", image: "/images/telexcoin.png" },
  { name: "Deep Assets", image: "/images/assets.png" },
  { name: "SHARE VALUE", image: "/images/share.png" },
  { name: "InnoFi", image: "/images/innofi.png" },
  { name: "InnoLaunch", image: "/images/launch.png" },
  { name: "MetaFabric", image: "/images/metafabric.png" },
  { name: "Saxophone Podcast", image: "/images/podcast.png" },
  { name: "FASHION Digital Store", image: "/images/fashion.png" },
  { name: "12% Seed Return", image: "/images/return.png" },
];

const FoundationBenefits = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-4py-10">
      {/* Header */}
      <div className="flex  justify-center mb-5 items-center rounded-2xl py-5 dark:bg-gray-800 px-5 bg-[#bfc7f8]">
        <h1 className="text-2xl md:text-3xl font-bold text-center shadow-[2px_2px_3px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]  dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] tracking-wider bg-[#e3e6f9] dark:bg-transparent dark:text-gray-200 px-4 py-4 rounded-3xl">
          Foundation Benefits
        </h1>
      </div>

      {/* Benefits List */}
      <div className="    bg-[#bfc7f8] rounded-4xl  py-8 flex w-[90vw] md:px-8 px-5 md:w-[70vw] mt-3 flex-col lg:w-[60vw] justify-center items-center  dark:bg-gray-800 shadow-xl">
        <div className="flex flex-col gap-6">
          {benefits
            .slice(0, showAll ? benefits.length : 7)
            .map((benefit, index) => (
              // <div
              //   key={index}
              //   className="flex items-center gap-6 w-[80vw] p-3 md:w-[60vw] lg:w-[40vw]  bg-white dark:bg-gray-800 rounded-2xl dark:rounded-4xl shadow-[3px_3px_5px_rgba(0,0,0,0.2),-8px_-8px_5px_rgba(255,255,255,0.1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]">
              //   <div className="flex justify-center w-12 h-12 pt- items-center">
              //     <img
              //       src={img}
              //       alt={benefit.name}
              //       className="w-full rounded-full scale-110 object-contain"
              //     />
              //   </div>
              //   <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              //     {benefit.name}
              //   </span>
              // </div>
              <AnimateItem
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}>
                {" "}
                <div
                  key={index}
                  className="flex items-center gap-6 w-[80vw] p-3 md:w-[60vw] lg:w-[40vw]  bg-white dark:bg-gray-800 rounded-2xl dark:rounded-4xl shadow-[3px_3px_5px_rgba(0,0,0,0.2),-8px_-8px_5px_rgba(255,255,255,0.1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]">
                  <div className="flex justify-center w-12 h-12 pt- items-center">
                    <img
                      src={img}
                      alt={benefit.name}
                      className="w-full rounded-full scale-110 object-contain"
                    />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {benefit.name}
                  </span>
                </div>
              </AnimateItem>
            ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-4">
          <button
            className=" font-bold px-4 py-2 rounded-lg "
            onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoundationBenefits;
