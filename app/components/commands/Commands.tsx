"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Discord from "../bentogrids/community/socials/discord/Discord";
import Overlay from "../bentogrids/community/overlay/Overlay";

const Community = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center justify-center w-[780px] h-[350px] relative top-11 bg-gradient-to-b from-[#27253F] to-[#030115] shadow-md rounded-t-[7.5px]"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{
        top: "50px",
      }}
      whileHover={{
        top: "40px",
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center justify-center bg-gradient-to-b from-[#191931] to-[#030115] w-[778px] h-[349px] rounded-[7px] gap-3">
        <Overlay hoverState={hovered} />
        <Discord />
      </div>
    </motion.div>
  );
};

export default Community;
