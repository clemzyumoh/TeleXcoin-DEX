// Notification Slide Component
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBell, FaTimes } from "react-icons/fa";

const NotificationSlide = ({ notifications, onClose }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 shadow-lg p-4 z-50 overflow-y-auto">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-bold">Notifications</h2>
        <button onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notif, index) => (
            <li key={index} className="p-2 border-b flex items-center">
              <FaBell className="mr-2 text-yellow-500" />
              <span>{notif}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No new notifications</p>
        )}
      </ul>
    </motion.div>
  );
};

export default NotificationSlide;
