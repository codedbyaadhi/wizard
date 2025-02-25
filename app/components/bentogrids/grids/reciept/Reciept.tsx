"use client";
import { useState } from "react";
import Slip from "./slip";
import { motion } from "motion/react";
import { useTextScramble } from "@/hooks/useTextScramble";

const Reciept = () => {
  const [hovered, isHovered] = useState(false);
  const title = useTextScramble("Thrifty", hovered);
  const description = useTextScramble(
    "Delivering maximum value by streamlining costs and ensuring efficiency",
    hovered
  );

  return (
    <div
      className="flex justify-center items-center w-[370px] h-[485px] bg-gradient-to-b from-[#050717] to-[#292e43] rounded-[33px] overflow-hidden"
      onMouseOver={() => {
        isHovered(true);
      }}
      onMouseLeave={() => {
        isHovered(false);
      }}
    >
      <div className="flex flex-col items-center w-[369px] h-[483.5px] bg-gradient-to-b from-[#010414] to-[#0F1026] rounded-[33px] overflow-hidden">
        <div className="flex leading-tight w-full items-center justify-center h-[325px] overflow-hidden rounded-t-[33px]">
          <motion.div
            className="flex items-center justify-center"
            animate={{
              y: hovered ? 0 : -130,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <Slip />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center relative w-full top-10 gap-1 cursor-default">
          <motion.h2
            className="font-inter text-[22px]"
            animate={{
              filter: hovered ? ["blur(2px)", "blur(0px)"] : "blur(0px)",
            }}
            transition={{
              duration: 1,
              times: [0, 1],
            }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="font-inter text-[16px] opacity-40 font-light text-center w-[320px]"
            animate={{
              filter: hovered ? ["blur(2px)", "blur(0px)"] : "blur(0px)",
            }}
            transition={{
              duration: 1,
              times: [0, 1],
            }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Reciept;
