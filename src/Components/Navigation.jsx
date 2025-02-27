import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiShuffle, FiLayers } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaVoteYea } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MdRocketLaunch } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import { BsCurrencyExchange } from "react-icons/bs";
import { GiSaxophone } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";
//import { TbCoinTaka } from "react-icons/tb";
import { MdRealEstateAgent } from "react-icons/md";
const Navigation = ({ darkMode }) => {
  const location = useLocation(); // Get the current URL
  const colors = [
    "text-[#54FFFB]",
    "text-[#48FD0C]",
    "text-[#FF05DF]",

    "text-[#89FFCC]",
    "text-[#E7B2FF]",
    "text-[#8206D4]",

    "text-[#FF9A55]",
    "text-[#FFEA6C]",
  ];

  const getColorfulLabel = (label) => {
    return (
      <span className="flex gap-0">
        {label.split("").map((char, index) => (
          <span
            key={index}
            className={`${colors[index % colors.length]} font-semibold`}>
            {char}
          </span>
        ))}
      </span>
    );
  };
  const Menus = [
    {
      to: "/",
      label: "Trade",
      icon: <BsCurrencyExchange className="text-xl" />,
      iconColor: "text-[#54FFFB]",
      dis: "translate-x-0",
    },
    {
      to: "/swap",
      label: "Pool",
      icon: <CiCoinInsert className="text-xl" />,
      dis: "translate-x-16",
      iconColor: "dark:text-[#FF05DF]",
    },
    {
      to: "/foundation",
      label: "Foundation",
      icon: <MdRealEstateAgent className="text-xl" />,
      dis: "translate-x-32",
      iconColor: "dark:text-[#89FFCC]",
    },
    {
      to: "/launchpad",
      label: "InnoLaunch",
      icon: <MdRocketLaunch className="text-xl" />,
      dis: "translate-x-48",
      iconColor: "dark:text-[#FFEA6C]",
    },
    {
      to: "/discover",
      label: "Saxophone",
      icon: <GiSaxophone className="text-xl" />,
      iconColor: "dark:text-[#48FD0C]",

      dis: "translate-x-64",
    },
  ];
  //   const [active, setActive] = useState(0);
  //   // Get the active menu index
  //   const activeIndex = Menus.findIndex((menu) => menu.to === location.pathname);
  //   const [spanLeft, setSpanLeft] = useState("");

  //   useEffect(() => {
  //     if (activeIndex !== -1) {
  //       setSpanLeft(
  //         `calc(${(activeIndex + 0.5) * (100 / Menus.length)}% - 2rem)`
  //       );
  //     } else {
  //       setSpanLeft("unset"); // Hide it when no menu is active
  //     }
  //   }, [activeIndex]);
  const [active, setActive] = useState(0);
  const activeIndex = Menus.findIndex((menu) => menu.to === location.pathname);
  const [spanLeft, setSpanLeft] = useState("");

  useEffect(() => {
    if (activeIndex !== -1) {
      setActive(activeIndex);
      setSpanLeft(
        `calc(${(activeIndex + 0.5) * (100 / Menus.length)}% - 2rem)`
      );
    } else {
      setSpanLeft("unset");
    }
  }, [activeIndex]);

  return (
    <div className="dark:bg-gray-800 max-h-[4.4rem] bg-gray-200   pb-6 px-6 rounded-t-3xl z-50 flex justify-between items-center  text-black dark:text-white lg:hidden bottom-0 mt-10 w-full fixed ">
      <ul className="grid grid-cols-5 relative w-full  ">
        {/* <span
          className={`bg-gray-800 border-4 duration-500 ${Menus[active].dis} border-gray-900 w-16 h-16 absolute  -top-6 rounded-full`}>
          {/* <span className="w-3.5 h-3.5 bg-transparent shadow-[4.1px_-5px_0_0_blue] absolute top-4  -left-[18px] rounded-tr-[11px]"></span>
          <span className="w-3.5 h-3.5 bg-gray-400 absolute top-3 -right-[18px] rotate-95 rounded-tl-[11px]"></span> *
        </span> */}
        <span
          key={darkMode}
          className="dark:bg-gray-800 bg-neutral-200  duration-500 shadow-[2px_2px_5pxrgba(0,0,0,0.2),-1px_-1px_5px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10p_rgba(255,255,255,0.1)] border-gray-900 w-16 h-9 absolute -top-6  rounded-t-full"
          //   style={{
          //     left: `calc(${(activeIndex + 0.5) * (100 / Menus.length)}% - 2rem)`, // Dynamic positioning
          //   }}
          style={{
            left: spanLeft,
            opacity: activeIndex === -1 ? -0 : 1,
          }}></span>

        {Menus.map((menu, index) => (
          <NavLink
            className="w-full "
            key={menu.to}
            to={menu.to}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <li
              className="flex flex-col   items-center pt-6"
              key={index}
              onClick={() => setActive(index)}>
              <span
                className={`text-xl cursor-pointer z-10 duration-500 ${
                  index === active
                    ? "-mt-9 bg-white dark:bg-transparent " +
                      menu.iconColor +
                      "  dark:border-2 rounded-full p-2 " +
                      "shadow-[2px_2px_5px_rgba(0,0,0,0.2),-1px_-1px_5px_rgba(0,0,0,0.2)] " +
                      "dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]"
                    : ""
                }`}>
                {menu.icon}
              </span>

              <span
                className={` font-bold ${
                  active === index
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}>
                {getColorfulLabel(menu.label)}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
