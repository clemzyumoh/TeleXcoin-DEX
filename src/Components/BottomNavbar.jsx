



// import { NavLink } from "react-router-dom";
// import { FiHome, FiShuffle, FiLayers, FiZap, FiCompass } from "react-icons/fi";
// import { IoGameControllerOutline } from "react-icons/io5";
// import { FaVoteYea } from "react-icons/fa";

// const BottomNavbar = () => {
//   return (
//     <nav className="fixed bottom-0 left-0 w-full  z-40 dark:bg-gradient-to-bl dark:from-black dark:to-black dark:via-black bg-gradient-to-bl from-[#E8EBFF] to-white   via-[#EBF2FD] border-none border-[#040f4c] dark:bg-black shadow-lg  pt-2 pb-6 flex justify-around lg:hidden">
//       {[
//         {
//           to: "/",
//           label: "Home",
//           icon: <FiHome className="text-xl  " />,
//         },
//         {
//           to: "/swap",
//           label: "Swap",
//           icon: <FiShuffle className="text-xl " />,
//         },
//         {
//           to: "/foundation",
//           label: "Foundation",
//           icon: <FiLayers className="text-xl" />,
//         },
//         {
//           to: "/launchpad",
//           label: "InnoFi",
//           icon: <FaVoteYea className="text-xl " />,
//         },
//         {
//           to: "/discover",
//           label: "RootOpia",
//           icon: <IoGameControllerOutline className="text-xl " />,
//         },
//       ].map((item) => (
//         // <NavLink
//         //   key={item.to}
//         //   to={item.to}
//         //   className={({ isActive }) =>
//         //     `flex flex-col items-center text-sm p-2 rounded transition ${
//         //       isActive
//         //         ? " hover:scale-110 text-black dark:text-[#B0E6F8] border-t-2 dark:border-[#B0e6f8] "
//         //         : " hover:scale-105 dark:text-neutral-300 text-neutral-500 "
//         //     }`
//         //   }>
//         //   {item.icon}
//         //   {item.label}
//         // </NavLink>
//         <NavLink
//           key={item.to}
//           to={item.to}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className={({ isActive }) =>
//             `relative flex flex-col items-center text-sm p-2 rounded transition ${
//               isActive
//                 ? "text-black dark:text-[#B0E6F8]"
//                 : "hover:scale-105 dark:text-neutral-300 text-neutral-500"
//             }`
//           }>
//           {isActive && (
//             <div
//               className="absolute -top-4 flex items-center justify-center w-10 h-10 rounded-full border-4 border-transparent animate-pulse"
//               style={{
//                 background:
//                   "conic-gradient(red, orange, yellow, green, blue, red)",
//                 clipPath: "ellipse(100% 50% at 50% 100%)",
//               }}
//             />
//           )}
//           {item.icon}
//           {item.label}
//         </NavLink>
//       ))}
//     </nav>
//   );
// };

//export default BottomNavbar;

import { NavLink } from "react-router-dom";
import { FiHome, FiShuffle, FiLayers } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaVoteYea } from "react-icons/fa";
import { useState } from "react";

const BottomNavbar = () => {
  const [active, setActive] = useState(0)
  return (
    <nav className="fixed  bottom-0 left-0 w-full z-40 dark:bg-gradient-to-bl rounded-t-4xl dark:from-black dark:to-black dark:via-black bg-gradient-to-bl from-[#E8EBFF] to-white via-[#EBF2FD] border-none border-[#040f4c] dark:bg-black shadow-lg pt-2 pb-6 flex justify-around lg:hidden">
      {[
        {
          to: "/",
          label: "Home",
          icon: <FiHome className="text-xl" />,
        },
        {
          to: "/swap",
          label: "Swap",
          icon: <FiShuffle className="text-xl" />,
        },
        {
          to: "/foundation",
          label: "Foundation",
          icon: <FiLayers className="text-xl" />,
        },
        {
          to: "/launchpad",
          label: "InnoFi",
          icon: <FaVoteYea className="text-xl" />,
        },
        {
          to: "/discover",
          label: "RootOpia",
          icon: <IoGameControllerOutline className="text-xl" />,
        },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            ` flex flex-col items-center text-sm p-2  rounded transition ${
              isActive
                ? "text-black dark:text-[#B0E6F8]"
                : "hover:scale-105 dark:text-neutral-300 text-neutral-500"
            }`
          }>
          {({ isActive }) => (
            <>
              {/* Active Circle Effect */}
              {isActive && (
                <div
                  className="absolute -top-12 w-20 h-20 bg-black rounded-b-none  border-4 border-transparent"
                  style={{
                    background:
                      "conic-gradient(red, orange, yellow, green, blue, red)",
                    clipPath: "circle(50%)",
                  }}
                />
                
              )}
              {item.icon}
              {item.label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavbar;



// import { NavLink, useLocation } from "react-router-dom";
// import { FiHome, FiShuffle, FiLayers } from "react-icons/fi";
// import { IoGameControllerOutline } from "react-icons/io5";
// import { FaVoteYea } from "react-icons/fa";

// const BottomNavbar = () => {
//   const location = useLocation(); // Get current active route

//   const navItems = [
//     { to: "/", label: "Home", icon: <FiHome className="text-2xl" /> },
//     { to: "/swap", label: "Swap", icon: <FiShuffle className="text-2xl" /> },
//     {
//       to: "/foundation",
//       label: "Foundation",
//       icon: <FiLayers className="text-2xl" />,
//     },
//     {
//       to: "/launchpad",
//       label: "InnoFi",
//       icon: <FaVoteYea className="text-2xl" />,
//     },
//     {
//       to: "/discover",
//       label: "RootOpia",
//       icon: <IoGameControllerOutline className="text-2xl" />,
//     },
//   ];

//   // Find the active link index
//   const activeIndex = navItems.findIndex(
//     (item) => item.to === location.pathname
//   );

//   return (
//     <div className="relative w-full">
//       {/* First Circle (Semi-Circle Below Navbar) */}
//       <div
//         className="absolute left-1/2 -top-12 w-20 h-20 -translate-x-1/2 rounded-full border-[5px] z-10"
    
//       />

//       {/* Second Circle (Hollow Circle Around Active Icon) */}
//       {activeIndex !== -1 && (
//         <div
//           className="absolute left-1/2 -top-6 w-16 h-16 -translate-x-1/2 rounded-full border-[4px] flex items-center justify-center z-20 bg-white dark:bg-black"
//           style={{
//             borderImage: "conic-gradient(red, orange, yellow, green, blue) 1",
//           }}>
//           {/* Active Icon in the Center */}
//           <div className="text-black dark:text-[#B0E6F8]">
//             {navItems[activeIndex].icon}
//           </div>
//         </div>
//       )}

//       {/* Navbar */}
//       <nav className="fixed bottom-0 left-0 w-full z-30 dark:bg-gradient-to-bl dark:from-black dark:to-black dark:via-black bg-gradient-to-bl from-[#E8EBFF] to-white via-[#EBF2FD] shadow-lg pt-2 pb-6 flex justify-around lg:hidden">
//         {/* Spacer to keep active link in center */}
//         <div className="flex justify-between w-full px-8">
//           {navItems.map((item, index) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className={({ isActive }) =>
//                 `relative flex flex-col items-center text-sm p-2 rounded transition ${
//                   isActive
//                     ? "text-black dark:text-[#B0E6F8]"
//                     : "hover:scale-105 dark:text-neutral-300 text-neutral-500"
//                 }`
//               }>
//               {item.icon}
//               {item.label}
//             </NavLink>
//           ))}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default BottomNavbar;
