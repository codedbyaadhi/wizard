"use client";
import { motion } from "motion/react";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full absolute top-40">
      <motion.div
        className="flex flex-col items-center leading-tight"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <h1 className="text-[55px] bg-gradient-to-r from-white to-[#9B95D4] bg-clip-text text-transparent font-aeonic font-[650]">
          Actualize your dreams into
        </h1>
        <h1 className="text-[55px] bg-gradient-to-r from-white to-[#9B95D4] bg-clip-text text-transparent font-aeonic font-[650]">
          mesmerizing absolute reality
        </h1>
        <motion.div
          className="flex items-center justify-center w-[648px] relative top-4"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            delay: 0.9,
          }}
        >
          <p className="font-inter text-[17px] opacity-50 text-center">
            Ignite animation! Turn your ideas into stunning, interactive designs
            that captivate and elevate with our React components.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
