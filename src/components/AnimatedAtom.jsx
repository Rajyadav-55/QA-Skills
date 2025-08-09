import React from "react";
import { motion } from "framer-motion";

export default function AnimatedAtom() {
  const electronPaths = [
    { radius: 40, duration: 4, delay: 0 }, // first electron
    { radius: 60, duration: 6, delay: 1 }, // second electron
    { radius: 80, duration: 8, delay: 2 }, // third electron
  ];

  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-64 h-64">
        {/* Nucleus */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-400 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2" />

        {/* Orbit Rings */}
        {electronPaths.map((path, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full border border-gray-400/50"
            style={{
              width: `${path.radius * 2}px`,
              height: `${path.radius * 2}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Electrons */}
        {electronPaths.map((path, i) => (
          <motion.div
            key={`electron-${i}`}
            className="absolute top-1/2 left-1/2"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: path.duration,
              delay: path.delay,
            }}
            style={{
              width: `${path.radius * 2}px`,
              height: `${path.radius * 2}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="absolute bg-blue-500 rounded-full shadow-lg"
              style={{
                width: "12px",
                height: "12px",
                top: "0px", // starting position on orbit
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
