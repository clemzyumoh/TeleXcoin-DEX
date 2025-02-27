

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import AnimateItem from "./AnimationItem";

const data = [
  { name: "Distributed Over 41 years", value: 60, color: "#bf9fff" },
  { name: "Vesting 3-5 years team", value: 20, color: "#B0E6F8" },
  { name: "Development & Innovation", value: 8, color: "#2196F3" },
  { name: "Seed & Private Rounds", value: 4, color: "#9C27B0" },
  { name: "Marketing & Partnership", value: 3, color: "#F44336" },
  { name: "Ecosystem Growth", value: 2, color: "#00BCD4" },
];

const totalSupply = 100;

const AllocationCard = ({ name, value, color }) => {
  return (
    <motion.div className="flex items-center justify-between p-4   bg-neutral-100 my-3 dark:bg-gray-800  rounded-xl shadow-[2px_2px_5px_rgba(0,0,0,0.2),-1px_-1px_5px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]   transform hover:scale-105 transition duration-300">
      {/* Left Side - Color Indicator & Name */}
      <div className="flex items-center space-x-4">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3 className="md:text-lg text-[12px] font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
      </div>

      {/* Right Side - Token Allocation */}
      <p className="text-gray-600 dark:text-gray-400 ml-8 font-semibold">
        {value}M
      </p>
    </motion.div>
  );
};

const TokenAllocation = () => {
  return (
    <div className="flex flex-col items-center rounded-4xl bg-[#bfc7f8] dark:bg-gray-800   w-[90vw] md:w-[70vw]  lg:w-[60vw]  shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#bf9fff] px-3  md:p-8 py-5   lg:p-5 md:space-y-">
      {/* Total Supply Heading */}
      <h2 className="text-3xl font-bold text-center">Total Supply</h2>

      {/* Hollow Pie Chart (Doughnut Chart) */}
      <div className="relative w-64 h-64 flex items-center  justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <linearGradient
                id="gradientDistributed"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%">
                <stop offset="0%" stopColor="#9b6afc" />
                <stop offset="100%" stopColor="#E8EBFF" />
              </linearGradient>
            </defs>
            <Pie
              className="shadow"
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60} // Creates the hollow effect
              outerRadius={90}
              fill="#ccc"
              stroke="none"
              startAngle={85}
              endAngle={-290}
              paddingAngle={0}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centered Text inside the Hollow Pie Chart */}
        <div className="absolute text-xl text-center font-bold text-gray-800 dark:text-white">
          100M <br />
          <p className="text-neutral-500 text-sm">Total Supply</p>
        </div>
      </div>

      {/* Allocation Cards */}
      <div className="w-full  grid grid-cols-1  ">
        {data.map((item) => (
          
        <AnimateItem>
          <AllocationCard key={item.name} {...item} />
              
        </AnimateItem>
        ))}
      </div>
    </div>
  );
};

export default TokenAllocation;
