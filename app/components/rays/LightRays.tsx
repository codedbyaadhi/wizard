"use client";
import { twMerge } from "tailwind-merge";
import React from "react";
import clsx from "clsx";
import { motion } from "motion/react";

interface LightRaysProps {
  fromColor?: string;
  toColor?: string;
  stagger?: boolean;
}

const RayAxis = [
  {
    width: 88,
    height: 620,
    tilt: "139.88",
  },
  {
    width: 88,
    height: 600,
    tilt: "156.94",
  },
  {
    width: 88,
    height: 600,
    tilt: "0",
  },
  {
    width: 88,
    height: 600,
    tilt: "-156.94",
  },
  {
    width: 88,
    height: 600,
    tilt: "-143",
  },
];

const LightRays: React.FC<LightRaysProps> = ({
  fromColor = "#988EFF",
  toColor = "rgba(67, 59, 153, 0)",
  stagger = false,
}) => {
  return (
    <div className="flex items-center justify-center w-[1300px] h-[665px] gap-20 overflow-hidden rotate-180 z-30">
      {RayAxis.map((ray, index) => {
        const rotation =
          index === 2
            ? `rotate(${parseFloat(ray.tilt) + 180}deg)`
            : `rotate(${ray.tilt}deg)`;

        return (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 70,
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              delay: stagger ? 0.3 + index * 0.3 : 0.3,
            }}
            className={twMerge(
              clsx(
                "backdrop-blur-[100.7px] blur-[25px] shadow-md",
                "relative top-56 shadow-2xl"
              )
            )}
            style={{
              background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
              width: `${ray.width}px`,
              height: `${ray.height}px`,
              transform: rotation,
              mixBlendMode: "plus-lighter",
              willChange: "transform, opacity",
              opacity: 70,
            }}
            key={index}
          ></motion.div>
        );
      })}
    </div>
  );
};

export default LightRays;
