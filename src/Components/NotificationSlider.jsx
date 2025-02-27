import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaBell } from "react-icons/fa";

const NotificationSlider = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    });
  }, [controls]);

  const notifications = [
    {
      icon: "🔥",
      name: "Bitcoin Surge",
      description: "Bitcoin just hit $50,000!",
    },
    {
      icon: FaBell,
      name: "New Alert",
      description: "You have 5 unread messages.",
    },
    {
      icon: "🎁",
      name: "New Airdrop",
      description: "Claim your DeWorld tokens now!",
    },
  ];
  return (
    <div className="overflow-hidden md:w-[80vw]  w-[80vw] my-5  lg:w-[70vw] md:ml-12 ml-8 text-neutral-900 dark:text-white py-3">
      <motion.div className="flex space-x-12 min-w-max" animate={controls}>
        {[...notifications, ...notifications].map((notif, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-2  rounded-lg shadow-md space-x-3">
            {/* Render the icon properly */}
            <div className="text-2xl">
              {typeof notif.icon === "string" ? notif.icon : <notif.icon />}
            </div>

            {/* Render Name & Description */}
            <div>
              <h3 className="text-lg font-semibold">{notif.name}</h3>
              <p className="text-sm text-gray-400">{notif.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NotificationSlider;
