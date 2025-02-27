import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";

const NotificationPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Bitcoin is up 5% today!" },
    { id: 2, message: "New NFT collection dropping soon!" },
    { id: 3, message: "Your transaction has been confirmed." },
  ]);

  return (
    <motion.div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <motion.div
        className="flex items-center mb-4 cursor-pointer"
        onClick={() => navigate(-1)}>
        <FaBell className="text-xl mr-2" />
        <h2 className="text-2xl font-bold">Notifications</h2>
      </motion.div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <motion.div
              key={notification.id}
              className="p-3 border-b last:border-none dark:border-gray-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}>
              {notification.message}
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">No new notifications.</p>
        )}
      </div>
    </motion.div>
  );
};

export default NotificationPage;
