// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// import { useState } from "react";

// const TradeChart = () => {
//   const [color1, setColor1] = useState("#4CAF50"); // Green
//   const [color2, setColor2] = useState("#FF5722"); // Orange

//   const tradeData = [
//     { year: "2020", value1: 50, value2: 80 },
//     { year: "2021", value1: 120, value2: 90 },
//     { year: "2022", value1: 180, value2: 130 },
//     { year: "2023", value1: 90, value2: 160 },
//     { year: "2024", value1: 200, value2: 140 },
//   ];

//   const barData = [
//     { date: "Feb 1", value1: 100, value2: 80 },
//     { date: "Feb 2", value1: 150, value2: 90 },
//     { date: "Feb 3", value1: 130, value2: 70 },
//     { date: "Feb 4", value1: 180, value2: 110 },
//     { date: "Feb 5", value1: 170, value2: 120 },
//   ];

//   return (
//     <div className="p-6 bg-gray-900 text-white rounded-lg w-full max-w-4xl mx-auto space-y-8">
//       {/* Trade Chart */}
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
//         <h2 className="text-lg font-bold mb-4">Trade Chart</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart
//             data={tradeData}
//             margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
//             <XAxis dataKey="year" stroke="#bbb" />
//             <YAxis stroke="#bbb" />
//             <Tooltip
//               contentStyle={{ backgroundColor: "#222", borderRadius: "5px" }}
//             />
//             <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//             <Line
//               type="monotone"
//               dataKey="value1"
//               stroke={color1}
//               strokeWidth={3}
//             />
//             <Line
//               type="monotone"
//               dataKey="value2"
//               stroke={color2}
//               strokeWidth={3}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Bar Chart */}
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
//         <h2 className="text-lg font-bold mb-4">Bar Chart</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={barData}
//             margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
//             <XAxis dataKey="date" stroke="#bbb" />
//             <YAxis stroke="#bbb" />
//             <Tooltip
//               contentStyle={{ backgroundColor: "#222", borderRadius: "5px" }}
//             />
//             <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//             <Bar
//               dataKey="value1"
//               fill={color1}
//               barSize={30}
//               radius={[5, 5, 0, 0]}
//             />
//             <Bar
//               dataKey="value2"
//               fill={color2}
//               barSize={30}
//               radius={[5, 5, 0, 0]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default TradeChart;
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const tradeData = [
  { year: "2018", value1: 50, value2: 40 },
  { year: "2019", value1: 70, value2: 60 },
  { year: "2020", value1: 40, value2: 30 },
  { year: "2021", value1: 90, value2: 80 },
  { year: "2022", value1: 60, value2: 50 },
  { year: "2023", value1: 100, value2: 90 },
];

const barData = [
  { date: "Feb 1", value1: 60, value2: 40 },
  { date: "Feb 2", value1: 80, value2: 50 },
  { date: "Feb 3", value1: 100, value2: 70 },
  { date: "Feb 4", value1: 40, value2: 30 },
];

const TradeChart = () => {
  const [hoverAmount, setHoverAmount] = useState("$100B");

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      setHoverAmount(`$${payload[0].value}B`);
      return (
        <div className="bg-gray-800 text-white px-3 py-1 rounded shadow-md">
          <span className="font-semibold text-sm">{hoverAmount}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6 bg-black min-h-screen hidden md:block space-y-8">
      {/* Trade Chart */}
      <div className="w-full p-4 bg-gray-900 rounded-lg">
        <h2 className="text-white text-lg font-bold mb-2">DRC</h2>
        <div className="text-center text-white font-bold text-xl mb-2">
          {hoverAmount}
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={tradeData}>
            <XAxis dataKey="year" tick={{ fill: "white" }} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value1"
              stroke="#4CAF50"
              strokeWidth={3}
              fillOpacity={0.3}
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#FF5722"
              strokeWidth={3}
              fillOpacity={0.3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="w-full p-4 bg-gray-900 rounded-lg">
        <h2 className="text-white text-lg font-bold mb-2">DRC</h2>
        <div className="text-center text-white font-bold text-xl mb-2">
          {hoverAmount}
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="date" tick={{ fill: "white" }} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value1" fill="#4CAF50" radius={[4, 4, 0, 0]} />
            <Bar dataKey="value2" fill="#FF5722" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TradeChart;
