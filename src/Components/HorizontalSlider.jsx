import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const HorizontalSlider = ({ items }) => {
  const controls = useAnimation();
  const x = useMotionValue(0); // Tracks x position
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  // Calculate dynamic drag limit
  const cardWidth = 240; // Adjusted for actual card size
  const totalCards = items.length * 2; // Duplicate items for seamless loop
  const dragLimit = -(cardWidth * totalCards - window.innerWidth);

  useEffect(() => {
    if (!isDragging) {
      // Auto-scroll animation
      controls.start({
        x: dragLimit,
        transition: {
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        },
      });
    }
  }, [controls, isDragging, dragLimit]);

  return (
    <div className="overflow-hidden w-full py-4">
      <motion.div
        className="flex space-x-6 "
        style={{ width: `max-content` }} // Prevent unwanted stretching
        animate={controls}
        ref={sliderRef}
        drag="x"
        dragConstraints={{ left: dragLimit, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}>
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="w-60 h-52 rounded-2xl flex items-center justify-between shadow-lg p-4 ">
            <div className="text-5xl mb-3">{item.icon}</div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalSlider;

// Usage Example
// <HorizontalSlider items={[{ icon: "🔥", name: "Item 1", description: "Description 1" }, { icon: "💎", name: "Item 2", description: "Description 2" }]} />
