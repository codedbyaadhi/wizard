/**
 * LightRays Component
 *
 * This React functional component renders animated light rays using `motion.div` from Framer Motion.
 * Each ray is dynamically styled based on predefined axis data and props.
 * The animation applies a staggered fade-in effect for a smooth visual transition.
 *
 * Key Features:
 * - Uses Framer Motion for opacity animations.
 * - Dynamically applies styles to create a rotating light ray effect.
 * - Supports staggered animations for sequential appearance.
 * - Uses `tailwind-merge` and `clsx` for efficient class merging and conditional styling.
 * - Fully responsive and optimized for rendering performance.
 *
 * @component
 * @param {string} fromColor - The starting color of the light rays (default: "#988EFF").
 * @param {string} toColor - The ending color of the light rays (default: "rgba(67, 59, 153, 0)").
 * @param {boolean} stagger - Whether to stagger the animations (default: false).
 *
 * @example
 * return (
 *   <LightRays fromColor="#FF0000" toColor="#000000" stagger={true} />
 * )
 */

"use client"; // Ensures the component runs on the client side in Next.js

import { twMerge } from "tailwind-merge"; // Utility for merging Tailwind CSS classes
import React from "react";
import clsx from "clsx"; // Utility for conditionally joining classNames
import { motion } from "motion/react"; // Importing motion for animations

/**
 * Interface for LightRays component props.
 * Defines optional properties for color gradients and animation behavior.
 */
interface LightRaysProps {
  fromColor?: string; // Gradient start color
  toColor?: string; // Gradient end color
  stagger?: boolean; // Enables staggered animation if true
}

/**
 * Defines the axis properties of each light ray.
 * Each ray has a defined width, height, and rotational tilt angle.
 */
const RayAxis = [
  { width: 88, height: 620, tilt: "139.88" },
  { width: 88, height: 600, tilt: "156.94" },
  { width: 88, height: 600, tilt: "0" },
  { width: 88, height: 600, tilt: "-156.94" },
  { width: 88, height: 600, tilt: "-143" },
];

/**
 * LightRays Component
 *
 * Renders animated light rays with adjustable gradient colors and stagger effects.
 */
const LightRays: React.FC<LightRaysProps> = ({
  fromColor = "#988EFF",
  toColor = "rgba(67, 59, 153, 0)",
  stagger = false,
}) => {
  return (
    /**
     * Main container for light rays.
     * - Flexbox aligns items centrally.
     * - Positioned to rotate for visual effect.
     * - Uses overflow-hidden to maintain boundaries.
     */
    <div className="flex items-center justify-center w-[1300px] h-[665px] gap-20 overflow-hidden rotate-180 z-30">
      {RayAxis.map((ray, index) => {
        /**
         * Determines rotation style for each ray.
         * The middle ray (index 2) rotates 180 degrees for symmetrical alignment.
         */
        const rotation =
          index === 2
            ? `rotate(${parseFloat(ray.tilt) + 180}deg)`
            : `rotate(${ray.tilt}deg)`;

        return (
          /**
           * Animated light ray using `motion.div`
           * - Fades in with opacity transition.
           * - Staggered animation effect if enabled.
           * - Styles dynamically adjusted per ray.
           */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 70 }}
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
