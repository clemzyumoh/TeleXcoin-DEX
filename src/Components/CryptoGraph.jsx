import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const CryptoGraph = () => {
  // Sample data for the graph
  const data = [
    { name: "Day 1", price: 200 },
    { name: "Day 2", price: 300 },
    { name: "Day 3", price: 250 },
    { name: "Day 4", price: 400 },
    { name: "Day 5", price: 350 },
    { name: "Day 6", price: 450 },
    { name: "Day 7", price: 500 },
  ];

  // State to track the position of the draggable point
  const [pointPosition, setPointPosition] = useState(3); // Starts at the middle
  const [hovered, setHovered] = useState(false);

  // Function to handle dragging
  const handleDrag = (event, info) => {
    const newX = info.point.x;
    const chartWidth = info.target.offsetParent.clientWidth;
    const index = Math.round((newX / chartWidth) * (data.length - 1));
    setPointPosition(Math.min(Math.max(index, 0), data.length - 1));
  };

  return (
    <div className="w-full h-96 p-4 bg-white dark:bg-gray-800  rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={["dataMin - 50", "dataMax + 50"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Movable Point */}
      {/* <motion.div
        className="w-4 h-4 rounded-full bg-blue-900 shadow-lg absolute"
        style={{
          left: `calc(${(pointPosition / (data.length - 1)) * 100}% - 8px)`,
          bottom: `${((data[pointPosition].price - 200) / 300) * 100}%`,
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        onDrag={handleDrag}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      /> */}

      {/* Price Tooltip */}
      {hovered && (
        <div
          className="absolute text-xs bg-black text-white py-1 px-2 rounded-md"
          style={{
            left: `calc(${(pointPosition / (data.length - 1)) * 100}% - 20px)`,
            bottom: `calc(${
              ((data[pointPosition].price - 200) / 300) * 100
            }% + 20px)`,
          }}>
          ${data[pointPosition].price}
        </div>
      )}
    </div>
  );
};

export default CryptoGraph;
