//import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../src/Components/SideBar";
import Home from "../src/Sections/Home/Home";
import Swap from "../src/Sections/Swap/Swap";
import Foundation from "../src/Sections/Foundation/Foundation";
import Launchpad from "../src/Sections/LaunchPad/Launchpad";
import Discover from "../src/Sections/Discover/Discover";
import Settings from "../src/Sections/Setting/Setting";
import SearchPage from "./Components/SearchPage";
import NotificationPage from "./Components/NotificationPage";
import Header from "./Components/Header";
import "../src/index.css";
//import MobHeader from "./Components/MobHeader";
//import BottomNavbar from "./Components/BottomNavbar";
import Navigation from "./Components/Navigation";

const App = () => {
  //const { darkMode } = useSelector((state) => state.settings);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    console.log("Dark Mode:", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main className="  overflow-x-hidden">
      <div>
        <div className="flex  relative  lg:pl-72 w-full dark:bg-gradient-to-bl dark:from-black dark:to-black dark:via-black bg-gradient-to-bl from-[#E8EBFF] to-white   via-[#EBF2FD] border-none border-[#040f4c] dark:bg-black text-black dark:text-gray-300 min-h-screen">
          <Sidebar />
          <div className="flex-2 md:flex-1">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <Routes>
              <Route
                path="/"
                element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
              />
              <Route
                path="/swap"
                element={<Swap darkMode={darkMode} setDarkMode={setDarkMode} />}
              />
              <Route
                path="/foundation"
                element={
                  <Foundation darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route
                path="/launchpad"
                element={
                  <Launchpad darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
              <Route
                path="/discover"
                element={
                  <Discover darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
              <Route
                path="/settings"
                element={
                  <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
      
      <Navigation/>
    </main>
  );
};

export default App;
