

// import React from "react";
// import img from "../../assets/logobg.png";
// import AnimatedText from "../../Components/AnimationText";
// import AnimateItem from "../../Components/AnimationItem";

// const packages = [
//   { amount: "1 Coin", name: "LEAF SEED" },
//   { amount: "50 Coins", name: "TWIG SEED" },
//   { amount: "100 Coins", name: "BRANCH SEED" },
//   { amount: "1,000 Coins", name: "TRUNK SEED" },
//   { amount: "5,000 Coins", name: "ROOT SEED" },
//   { amount: "10,000 Coins", name: "DEEP ROOT SEED" },
// ];

// const Section4 = () => {
//   return (
//     <section className="p-6 flex justify-center w-full">
//       <div className="bg-[#E8EBFF] dark:bg-[#100d1d] text-[#1E1164] dark:text-[#B0E6F8] rounded-2xl md:p-8 p-4 shadow-xl w-full max-w-2xl">
//         {/* Logo */}
//         <div className="flex justify-center">
//           <img src={img} alt="Deep Roots Logo" className="w-24 h-24 mb-6" />
//         </div>

//         {/* Title */}

//         <div className="flex justify-center">
//           <AnimatedText
//             text=" Seeding Packages"
//             animation="fade"
//             as="h1"
//             className="text-3xl font-bold text-center mb-8 tracking-wider bg-gradient-to-l from-[#9C61C1] to-[#1E1164] dark:to-[#B0e6f8] bg-clip-text text-transparent"
//           />
//         </div>
//         {/* Packages List */}
//         <ul className="space-y-4">
//           {packages.map((pkg, index) => (
//             <li
//               key={index}
//               className="flex justify-between items-center border-b border-[#9C61C1] pb-2">
//               <div className="flex items-center gap-4">
//                 <span className="md:text-lg text-sm font-semibold">
//                   {pkg.name}
//                 </span>
//               </div>
            
//               <div className="flex justify-center items-center p-6 rounded-full  bg-gray-900">
//                 <span className="md:text-lg text-sm w-full font-bold">
//                   {pkg.amount}
//                 </span>
//               </div>
//             </li>
//           ))}
//         </ul>
//         {/* // <img src={img} alt="Icon" className="w-8 h-8" /> */}

//         <div className="flex justify-center my-8">
//           <AnimatedText
//             text=" Join the Movement to Be part of the DeWorld "
//             animation="typing"
//             as="h1"
//             className="text-2xl font-bold text-center mb-8 tracking-wider bg-gradient-to-l from-[#9C61C1] to-[#1E1164] dark:to-[#B0e6f8] bg-clip-text text-transparent"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Section4;

import React from "react";
import img from "../../assets/coin-removebg-preview.png";
import AnimatedText from "../../Components/AnimationText";
import AnimateItem from "../../Components/AnimationItem";

const packages = [
  {
    amount: "1 Coin",
    name: "LEAF SEED",
    des: "Avaliable Packages and Coin to be earned",
  },
  {
    amount: "50 Coins",
    name: "TWIG SEED",
    des: "Avaliable Packages and Coin to be earned",
  },
  {
    amount: "100 Coins",
    name: "BRANCH SEED",
    des: "Avaliable Packages and Coin to be earned",
  },
  {
    amount: "1,000 Coins",
    name: "TRUNK SEED",
    des: "Avaliable Packages and Coin to be earned",
  },
  {
    amount: "5,000 Coins",
    name: "ROOT SEED",
    des: "Avaliable Packages and Coin to be earned",
  },
  {
    amount: "10,000 Coins",
    name: "DEEP ROOT SEED",
    des: "Avaliable Packages and Coin to be earned",
  },
];

const Section4 = () => {
  return (
    <section className=" flex justify-center items-center my-16 flex-col w-full">
      <div className="text-[#1E1164] dark:text-[#B0E6F8] bg-[#bfc7f8] rounded-4xl   py-8 flex w-[90vw] md:px-8 px-5 md:w-[70vw] mt-3 flex-col lg:w-[60vw] justify-center items-center  dark:bg-gray-800 shadow-xl">
        <div className="flex justify-between items-center flex-col md:flex-row  w-full">
          {/* Title */}
          <div className="flex justify-center items-start ">
            <AnimatedText
              text="Seeding Packages"
              animation="fade"
              as="h1"
              className="text-3xl font-bold w-full text-center mb-8 tracking-wider bg-gradient-to-l from-[#a97ffb] to-[#1E1164] dark:to-[#B0e6f8] bg-clip-text text-transparent"
            />
          </div>
          {/* Logo */}
          <div className="flex justify-center items-end ">
            <img src={img} alt="Deep Roots Logo" className="w-28 h-28 mb-6" />
          </div>
        </div>

        {/* Packages List */}
        <ul className="space-y-6 w-full flex flex-col">
          {packages.map((pkg, index) => (
            <AnimateItem
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}>
              <li
                key={index}
                className="relative flex flex-col  dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] items-center p-2 border-l-4 border-[#a97ffb] dark:border-[#B0E6F8] bg-white dark:bg-gray-800 rounded-3xl shadow-md">
                <div className="flex justify-center w-full items-center">
                  {/* Rectangle */}
                  <div className="flex-grow px-4 py-3 text-left shadow-[-2px_+2px_2px_#B0E6F8,-2px_-2px_2px_#a97ffb] font-semibold md:text-lg text-sm   rounded-l-2xl">
                    {pkg.name}
                  </div>

                  {/* Circle */}
                  <div className="ml-[-10px] relative w-20 h-20 text-center flex shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#a97ffb] justify-center items-center rounded-full   font-bold  text-[12px]">
                    <div className="absolute">{pkg.amount}</div>
                  </div>
                </div>
                <p className="my-4 text-[12px] md:text-lg ">{pkg.des}</p>
              </li>
            </AnimateItem>
          ))}
        </ul>

        {/* Footer Text */}
        <div className="flex justify-center my-8">
          <AnimatedText
            text="Join the Movement to Be part of the DeWorld"
            animation="typing"
            as="h1"
            className="text-2xl font-bold text-center tracking-wider bg-gradient-to-l from-[#9C61C1] to-[#1E1164] dark:to-[#B0e6f8] bg-clip-text text-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;

