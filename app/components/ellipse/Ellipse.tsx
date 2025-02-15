"use client";
import { motion } from "framer-motion";
import React from "react";
import Particles from "@/app/components/particles/particles";

const Ellipse = () => {
  return (
    <div className="relative w-full h-[1895px] overflow-hidden bg-[#040313]">
      <Particles id="tsparticles" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="flex items-center justify-center w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#1e2f5b8b] via-[#040313] to-[#040313] relative top-[400px] scale-[5] overflow-hidden shadow-md"
          style={{ boxShadow: "0 0 12px 10px #0A032C" }}
        >
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{
              rotate: -50,
              opacity: 0,
            }}
            animate={{
              rotate: 50,
              opacity: 1,
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 0.5,
            }}
          >
            <div className="absolute w-[50px] h-[800px] bg-gradient-to-r from-transparent to-white rounded-l-full"></div>
          </motion.div>
          <div className="flex flex-col items-center bg-gradient-to-b from-[#080A1E] via-[#040313] to-[#040313] w-[500px] h-[500px] rounded-t-full relative top-[0.5px] scale-[1.0015] shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Ellipse;
