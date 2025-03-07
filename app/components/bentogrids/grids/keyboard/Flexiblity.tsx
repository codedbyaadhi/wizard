"use client";
import Keyboard from "@/app/components/keyboard/Keyboard";
import React, { useState } from "react";
import ScrollableFlowbar from "./ScrollableFlowbar";
import { useTextScramble } from "@/hooks/useTextScramble";
import { motion } from "motion/react";

const Flexibility = () => {
  const [hovered, isHovered] = useState(false);
  const title = useTextScramble("Everything on your keyboard", hovered);
  const description = useTextScramble(
    "Glide through your keyboard. Deep-seek everything and let your fingertips reflect the universe.",
    hovered
  );
  return (
    <div
      className="flex justify-center items-center w-[860px] h-[485px] bg-gradient-to-b from-[#050717] to-[#292e43] rounded-[33px]"
      onMouseOver={() => {
        isHovered(true);
      }}
      onMouseLeave={() => {
        isHovered(false);
      }}
    >
      <div className="w-[858px] h-[483.5px] bg-gradient-to-b from-[#010414] to-[#0F1026] rounded-[33px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <Keyboard />
          <div className="flex flex-col items-center justify-center w-full">
            <ScrollableFlowbar />
            <motion.div
              className="flex flex-col items-center justify-center relative top-10 gap-1 cursor-default"
              whileHover={{
                opacity: hovered ? 50 : 100,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <motion.h2
                className="font-sf text-[22px]"
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
                className="font-inter text-[16px] opacity-40 font-light"
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexibility;
