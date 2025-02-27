import { FiUser, FiMenu, FiSun, FiMoon, FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../Redux/settingSlice";

const MobHeader = ({ onMenuClick }) => {
  const { darkMode } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center z-50">
      {/* Left Icons */}
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden">
          <FiMenu className="text-xl" />
        </button>
        <FiUser className="text-xl" />
        <button onClick={() => dispatch(toggleDarkMode())}>
          {darkMode ? (
            <FiSun className="text-xl" />
          ) : (
            <FiMoon className="text-xl" />
          )}
        </button>
        <FiSearch className="text-xl" />
      </div>

      {/* Right - Company Name & Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">Company</h1>
      </div>
    </header>
  );
};

export default MobHeader;
