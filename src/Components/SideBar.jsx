
import { NavLink } from "react-router-dom";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaVoteYea } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 rounded-2xl mr-8 hidden lg:block dark:bg-transparent fixed left-0 top-0 h-screen  text-black dark:text-white p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-[#040f4c] dark:text-gray-100 mb-6">
        TeleXcoin DEX
      </h1>

      {/* Navigation Links */}
      <nav className="space-y-8 font-bold ">
        {[
          { to: "/", label: "Trade" },
          { to: "/swap", label: "Liquidity" },
          { to: "/foundation", label: "Foundation" },
          { to: "/launchpad", label: "InnoLaunch" },
          { to: "/discover", label: "Saxophone" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block p-2 rounded transition ${
                isActive
                  ? " hover:scale-105 dark:text-[#b0e6f8] dark:border-r-2 dark:border-[#b0e6f8] border-r-3 "
                  : " hover:scale-105  text-neutral-400 dark:text-gray-400 "
              }`
            }>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
       <div className="absolute bottom-6 left-6 font-bold space-y-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-2 py-4 px-8 rounded transition ${
              isActive
                ? " hover:scale-105   dark:text-[#b0e6f8] dark:border-r-2 dark:border-[#b0e6f8] border-r-3"
                : " bg-transparent text-neutral-400 dark:text-neutral-400 "
            }`
          }>
          <FaCog /> <span>Settings</span>
        </NavLink>
        <button className="flex items-center space-x-2 py-4 px-8 rounded text-neutral-400 dark:text-gray-400  hover:scale-105 ">
          <FaSignOutAlt /> <span>Logout</span>
        </button>
      </div> 
    </div>
  );
};

export default Sidebar;
