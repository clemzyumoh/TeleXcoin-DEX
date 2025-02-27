// import React from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import { motion } from "framer-motion";

// const data = [
//   { name: "Distributed Over 41 years", value: 60, color: "#4CAF50" },
//   { name: "Vesting 3-5 years team", value: 20, color: "#FF9800" },
//   { name: "Development & Innovation", value: 8, color: "#2196F3" },
//   { name: "Seed & Private Rounds", value: 4, color: "#9C27B0" },
//   { name: "Marketing & Partnership", value: 3, color: "#F44336" },
//   { name: "Ecosystem Growth", value: 2, color: "#00BCD4" },
//   { name: "Exchange Listing (2026)", value: 1, color: "#8BC34A" },
//   { name: "Foundation Rewards", value: 1, color: "#FFEB3B" },
//   { name: "One year ICO", value: 0.5, color: "#d661e8" },
//   { name: "GameFi & Education Rewards", value: 0.5, color: "#E91E63" },
// ];

// const AllocationCard = ({ name, value, color }) => (
//   <motion.div
//     className="p-4 bg-neutral-800 shadow-xl rounded-xl flex flex-rol items-center space-y-4 hover:scale-105 transition duration-300"
//     style={{ borderTop: `4px solid ${color}` }}>
//     <div className="w-24 h-24 relative">
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart>
//           <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={40}>
//             {data.map((entry) => (
//               <Cell
//                 key={entry.name}
//                 fill={entry.name === name ? entry.color : "#333"}
//               />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//     <div className="flex justify-center items-center flex-col">
//       <h3 className="text-lg font-semibold text-center text-white">{name}</h3>
//       <p className="text-gray-400">
//         {value}M ({value}%)
//       </p>
//     </div>
//   </motion.div>
// );

// const TokenDashboard = () => {
//   return (
//     <div className="p-8 bg-neutral-900 min-h-screen text-white space-y-12">
//       {/* Section 1: Big Pie Chart + 2 Cards */}
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
//         <motion.div className="relative w-80 h-80 shadow-2xl rounded-full">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={data}
//                 dataKey="value"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}>
//                 {data.map((entry) => (
//                   <Cell key={entry.name} fill={entry.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
//             100M
//           </div>
//         </motion.div>
//         <AllocationCard {...data[0]} />
//         <AllocationCard {...data[1]} />
//       </div>

//       {/* Section 2: 4 Vertical Cards + 1 Horizontal */}
//       <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
//         {data.slice(2, 5).map((item) => (
//           <AllocationCard key={item.name} {...item} />
//         ))}
//       </div>
//       <div className="w-full">
//         <AllocationCard {...data[6]} />
//       </div>

//       {/* Section 3: 3 Horizontal Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {data.slice(7).map((item) => (
//           <AllocationCard key={item.name} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TokenDashboard;

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Distributed Over 41 years", value: 60, color: "#4CAF50" },
  { name: "Vesting 3-5 years team", value: 20, color: "#FF9800" },
  { name: "Development & Innovation", value: 8, color: "#2196F3" },
  { name: "Seed & Private Rounds", value: 4, color: "#9C27B0" },
  { name: "Marketing & Partnership", value: 3, color: "#F44336" },
  { name: "Ecosystem Growth", value: 2, color: "#00BCD4" },
  { name: "Exchange Listing (2026)", value: 1, color: "#8BC34A" },
  { name: "Foundation Rewards", value: 1, color: "#cdb903" },
  { name: "One year ICO", value: 0.5, color: "#d661e8" },
  { name: "GameFi & Education Rewards", value: 0.5, color: "#E91E63" },
];

const AllocationCard = ({ name, value, color, layout }) => (
  <motion.div
    className={`p-4 dark:bg-black shadow-2xl rounded-xl  w-full flex ${
      layout === "row" ? "flex-row justify-between w-full items-center" : "flex-col items-center"
    } space-y-4 hover:scale-105 transition duration-300`}
    style={{ borderTop: `4px solid ${color}` }}>
    <div className="w-24 h-24 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={40}>
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={entry.name === name ? entry.color : "#333"}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="text-center text-white flex flex-col ">
      <h2 className="text-xl font-bold text-center text-black dark:text-white">
        Token Allocation{" "}
      </h2>
      <h3 className="text-sm md:text-lg font-semibold" style={{ color }}>
        {name}
      </h3>
      <p className="text-gray-400">
        {value}M ({value}%)
      </p>
    </div>
  </motion.div>
);

const TokenlocationDashboard = () => {
  return (
    <div className="dark:bg-neutral-900 min-h-screen p-8 text-white flex flex-col space-y-8">
      {/* First Section: Big Pie + Two Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="relative w-72 h-72 dark:bg-black shadow-2xl rounded-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}>
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute text-2xl font-bold text-center">100M</div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <AllocationCard
            name={data[0].name}
            value={data[0].value}
            color={data[0].color}
            layout="row"
          />
          <AllocationCard
            name={data[1].name}
            value={data[1].value}
            color={data[1].color}
            layout="row"
          />
        </div>
      </div>

      {/* Second Section: 4 Vertical Cards + 1 Horizontal Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {data.slice(2, 5).map((item) => (
          //<AllocationCard key={item.name} {...item} layout="column" />
        ))} */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center gap-5">
        <AllocationCard
          name={data[2].name}
          value={data[2].value}
          color={data[2].color}
          layout="row"
        />
        <AllocationCard
          name={data[3].name}
          value={data[3].value}
          color={data[3].color}
          layout="row"
        />
        <AllocationCard
          name={data[4].name}
          value={data[4].value}
          color={data[4].color}
          layout="row"
        />
        <AllocationCard
          name={data[5].name}
          value={data[5].value}
          color={data[5].color}
          layout="row"
        />
        <AllocationCard
          name={data[6].name}
          value={data[6].value}
          color={data[6].color}
          layout="row"
        />
        <AllocationCard
          name={data[7].name}
          value={data[7].value}
          color={data[7].color}
          layout="row"
        />
        <AllocationCard
          name={data[8].name}
          value={data[8].value}
          color={data[8].color}
          layout="row"
        />{" "}
        <AllocationCard
          name={data[9].name}
          value={data[9].value}
          color={data[9].color}
          layout="row"
        />
      </div>
      <div className=" hidden justify-around items-center gap-5">
        <AllocationCard
          name={data[5].name}
          value={data[5].value}
          color={data[5].color}
          layout="row"
        />
        <AllocationCard
          name={data[6].name}
          value={data[6].value}
          color={data[6].color}
          layout="row"
        />
        <AllocationCard
          name={data[7].name}
          value={data[7].value}
          color={data[7].color}
          layout="row"
        />
      </div>

      {/* Third Section: 3 Horizontal Cards */}
      <div className=" hidden grid-cols-1 lg:grid-cols-3 gap-6">
        {data.slice(8).map((item) => (
          <AllocationCard key={item.name} {...item} layout="row" />
        ))}
      </div>
    </div>
  );
};

export default TokenlocationDashboard;
