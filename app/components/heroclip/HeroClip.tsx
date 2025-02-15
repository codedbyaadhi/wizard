/**
 * HeroClip Component
 *
 * This React functional component is responsible for rendering a motion-enabled hero section
 * with an animated gradient overlay, an interactive circular button, and a preview image.
 * The component leverages the `motion` library for animations and `next/image` for optimized image rendering.
 *
 * Key Features:
 * - Smooth fade-in and slide-up animation using `motion.div`.
 * - Interactive button with hover scaling effect.
 * - Layered UI design with multiple divs creating depth and style.
 * - Utilizes `next/image` for efficient image rendering with lazy loading.
 * - Fully responsive and absolute positioned within a larger layout.
 *
 * @component
 * @example
 * return (
 *   <HeroClip />
 * )
 */

"use client"; // Ensures this component runs on the client side in Next.js

import { motion } from "motion/react"; // Importing motion for animations
import Image from "next/image"; // Importing Next.js optimized Image component
import React, { useState } from "react"; // Importing React and useState for managing state

/**
 * HeroClip Component
 *
 * Implements an animated hero section with a floating gradient overlay and interactive button.
 * The button changes scale on hover, leveraging React state and `motion.div` animations.
 */
const HeroClip = () => {
  /**
   * State Hook for tracking hover effect
   * @state {boolean} isOver - Determines if the button is hovered
   */
  const [isOver, setIsOver] = useState(false);

  return (
    /**
     * Main container with animation applied on mount
     * - Starts with opacity 0 and slight vertical offset
     * - Animates to full opacity and correct position over 1.5 seconds
     * - Delayed start to synchronize with other page elements
     */
    <motion.div
      className="flex items-center justify-center w-[1236px] h-[786px] absolute top-[424px] -z-0"
      initial={{
        opacity: 0,
        y: 13,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        delay: 2,
      }}
    >
      {/**
       * Semi-transparent gradient overlay
       * - Positioned absolutely to overlay the content below
       * - Adds depth with a dark gradient from top to bottom
       * - Rounded corners for modern UI appearance
       */}
      <div className="flex items-center justify-center absolute w-[1236px] h-[786px] bg-gradient-to-b from-transparent to-[#040313] z-10 rounded-t-[36px]">
        {/**
         * Circular interactive button container
         * - Uses motion div to scale slightly when hovered
         * - Listens for mouse enter/leave to toggle `isOver` state
         */}
        <div className="flex items-center justify-center w-full h-[120px]">
          <motion.div
            className="flex items-center justify-center w-[120px] h-[120px] rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-[1.5px] bg-opacity-0 border border-[#ffffff08] shadow-md"
            onMouseEnter={() => setIsOver((prev) => !prev)}
            onMouseLeave={() => setIsOver((prev) => !prev)}
            animate={{
              scale: isOver ? 1.05 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {/**
             * Inner circular button containing SVG icon
             * - Additional backdrop filter and border for styling
             */}
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[#4d4c6f] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-[#ffffff12] shadow-md">
              <svg
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 10.9019C24.5 12.0566 24.5 14.9434 22.5 16.0981L5.25 26.0574C3.25 27.2121 0.75 25.7687 0.75 23.4593V3.5407C0.75 1.2313 3.25 -0.212068 5.25 0.942632L22.5 10.9019Z"
                  fill="white"
                  fillOpacity="0.19"
                />
                <path
                  d="M22.25 15.6651L5 25.6244C3.33333 26.5866 1.25 25.3838 1.25 23.4593V3.5407C1.25 1.6162 3.33333 0.413394 5 1.37564L22.25 11.3349C23.9167 12.2972 23.9167 14.7028 22.25 15.6651Z"
                  stroke="white"
                  strokeOpacity="0.01"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
      {/**
       * Outer content container
       * - Semi-transparent backdrop to enhance the background effect
       * - Contains another inner container with an embedded image
       */}
      <div className="flex items-center justify-center w-[1216px] h-[766px] border border-[#242332] rounded-t-[36px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5">
        <div className="flex items-center justify-center w-[1195px] h-[747px] border-2 border-[#242332] rounded-t-[24px] bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 overflow-hidden">
          {/**
           * Optimized Next.js Image component
           * - Uses lazy loading and responsive optimization
           * - Ensures smooth rendering and performance benefits
           * - Image is non-draggable to maintain user experience
           */}
          <Image
            src="https://reflect.app/home/build/q-cb311d1c.png"
            alt="hero preview"
            width={1195}
            height={747}
            draggable="false"
            className="rounded-3xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroClip;
