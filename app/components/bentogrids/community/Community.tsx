"use client";
import Keyboard from "@/app/components/keyboard/Keyboard";
import React, { useState } from "react";
import { useTextScramble } from "@/hooks/useTextScramble";
import { motion } from "motion/react";

const Community = () => {
  const [hovered, isHovered] = useState(false);
  const title = useTextScramble("Broad Community Range", hovered);
  const description = useTextScramble(
    "Join a global community where your voice matters and connect with developers worldwide.",
    hovered
  );
  return (
    <div
      className="flex justify-center items-center w-[860px] h-[485px] bg-gradient-to-t from-[#050717] to-[#292e43] rounded-[33px]"
      onMouseOver={() => {
        isHovered(true);
      }}
      onMouseLeave={() => {
        isHovered(false);
      }}
    >
      <div className="w-[858px] h-[483.5px] bg-gradient-to-t from-[#010414] to-[#0F1026] rounded-[33px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center relative top-10 gap-1 cursor-default">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
