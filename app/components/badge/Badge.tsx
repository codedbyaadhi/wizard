"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const Badge = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-[260px] h-[30px] rounded-full shadow-2xl bg-gradient-to-b from-[#ffffff3a] to-[#ffffff18] absolute top-24 "
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        delay: 0.7,
      }}
    >
      <div className="flex items-center justify-center w-[258px] h-[28px] rounded-full shadow-md bg-gradient-to-b from-[#14122C] to-[#14122C] gap-1">
        <p className="text-[15px] opacity-55 font-inter font-light">
          Announcing our new website
        </p>
        <ChevronRight size={18} color="#ffffff3a" />
      </div>
    </motion.div>
  );
};

export default Badge;
