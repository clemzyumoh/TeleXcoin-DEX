import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import { MdOutlineManageSearch } from "react-icons/md";
import logo1 from "../assets/tex-logo1.png"
import logo2 from "../assets/tex-logo4.png";
import { CiWallet } from "react-icons/ci";
import AnimatedText from "./AnimationText";
const Header = ({ darkMode, setDarkMode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handle search input (press Enter to search)
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <motion.div className="fixed top-0 w-full lg:w-[80vw] lg:dark:bg-black md:px-14  flex justify-between items-center p-4 z-40 text-black dark:text-white  bg-gray-200 dark:bg-gray-800">
      {/* 🔹 Laptop Layout */}
      <div className="hidden lg:flex items-center justify-around w-full">
        {/* Logo / Title */}
        <div className="">
          <img src={logo1} alt="" className="dark:hidden w-[10vw] scale-125 " />
          <img
            src={logo2}
            alt=""
            className="hidden dark:block w-[10vw] mr-8 scale-125"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center border-2 border-[#EBF2FD] shadow p-2 w-[30vw]  rounded  mx-10">
          <FaSearch className="text-neutral-400 text-xl mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-[80vw] text-neutral-500"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        {/* Right Side: Dark Mode Toggle & User Icon */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: darkMode ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setDarkMode(!darkMode)}
            className="w-[24px]">
            {darkMode ? (
              <Sun size={24} className="dark:text-[#b0e6f8]" />
            ) : (
              <Moon size={24} />
            )}
          </motion.button>
          <CiWallet className="text-2xl" />
          <button className="py-3 px-5 rounded-2xl text-[#89FFCC] hover:text-black hover:bg-none hover:shadow-[2px_2px_2px_#54fffb,-2px_-2px_2px_#ff05df] dark:hover:text-[#89FFCC] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60">
            Connect
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Layout */}
      <div className="lg:hidden flex w-full justify-between items-center">
        {/* Left: Settings Button */}
        <AnimatedText
          text="TeleXcoin"
          animation="fade"
          as="h1"
          className="font-bold md:ml-5    lg:text-end lg:mt-20 text-3xl lg:leading-normal  bg-gradient-to-bl from-[#54fffb] to-[#ff05df] via-black/20 bg-clip-text font-orbitron text-transparent"
        />

        <div className="mx-3">
          <img
            src={logo1}
            alt=""
            className="hidden w-[28vw] md:my-3 scale-150 mx-3 "
          />
          <img
            src={logo2}
            alt=""
            className="hidden  w-[20vw] md:my-3 mr-8 scale-150 "
          />
        </div>

        {/* Right: Menu Toggle & Search Icon */}
        <div className="flex items-center space-x-4">
          {/* <button className="relative flex overflow-hidden  font-bold text-lg px-8 py-4 rounded-md">
            {["C","O","N", "N", "E", "C", "T"].map((letter, index) => (
              <span
                key={index}
                className={`w-6 h-full flex items-center bg-clip-text text-transparent justify-center`}
                style={{
                  backgroundColor: [
                    "#ff0000", // Red
                    "#ff7f00", // Orange
                    "#ffff00", // Yellow
                    "#00ff00", // Green
                    "#0000ff", // Blue
                    "#4b0082", // Indigo
                    "#8b00ff", // Violet
                  ][index],
                }}>
                {letter}
              </span>
            ))}
          </button>  */}
          <CiWallet className="text-2xl" />
          <button className="py-3 px-5 rounded-2xl text-[#89FFCC] hover:text-black hover:bg-none hover:shadow-[2px_2px_2px_#54fffb,-2px_-2px_2px_#ff05df] dark:hover:text-[#89FFCC] bg-gradient-to-tl from-[#54fffb] to-[#ff05df] via-black/60">
            Connect
          </button>
          {/* <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            {dropdownOpen ? (
              <FaTimes className="text-xl md:text-3xl" />
            ) : (
              <FaBars className="text-xl md:text-3xl" />
            )}
          </button> */}
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {dropdownOpen && (
        <motion.div className="absolute left-0 right-0 top-14 h-screen bg-gray-100 dark:bg-gray-800 p-4 shadow-md z-50 flex flex-col justify-between pb-16 lg:hidden">
          {/* Search Input */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for a project..."
              className="w-full p-3 pl-10 border rounded"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Menu Links */}
          <div>
            <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaUser /> <span>Profile</span>
            </button>
            <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaBell /> <span>Notifications</span>
            </button>

            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: darkMode ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                setDarkMode(!darkMode);
                setDropdownOpen(false);
              }}
              className="w-[24px]">
              {darkMode ? (
                <Sun size={24} className="dark:text-[#0085A8]" />
              ) : (
                <Moon size={24} className="text-[#1F1619]" />
              )}
            </motion.button>

            {/* Settings Link */}
            <NavLink
              to="/settings"
              onClick={() => setDropdownOpen(false)}
              className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaCog /> <span>Settings</span>
            </NavLink>
          </div>

          {/* Logout Button */}
          <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
