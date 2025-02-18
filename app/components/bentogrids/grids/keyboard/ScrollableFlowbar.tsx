/**
 * Purpose:
 * The ScrollableFlowbar component displays a horizontal, scrollable flow of items with a letter badge and descriptive text.
 * Each item appears with a smooth scrolling animation, where each letter is displayed in a circular badge.
 * The flow automatically scrolls through the items at a regular interval, with increased blur effect at the ends.
 */

"use client"; // Ensures this component works on the client-side with Next.js

// Importing necessary libraries
import { motion } from "framer-motion"; // Importing motion from framer-motion to handle animations
import { useState, useEffect } from "react"; // Importing hooks for state management and side effects

const ScrollableFlowbar = () => {
  // Array of items, each containing a letter and text to display
  const items = [
    { letter: "O", text: "Open browser" },
    { letter: "N", text: "Navigate to search" },
    { letter: "S", text: "Search for wizard UI" },
    { letter: "G", text: "Get in touch" },
    { letter: "B", text: "Browse components" },
    { letter: "C", text: "Copy component code" },
    { letter: "I", text: "Get inside your project" },
    { letter: "P", text: "Paste code on project" },
    { letter: "N", text: "Now you have that" },
  ];

  // State hook for tracking the scroll position of the flow
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect hook to handle automatic scrolling
  useEffect(() => {
    const positions = [0, -200, -420, -630, -840, -1120]; // Array of scroll positions for each item
    let currentIndex = 0; // Index to track current position in the array of positions

    // Set interval to change the scroll position every 2 seconds
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % positions.length; // Cycle through the positions array
      setScrollPosition(positions[currentIndex]); // Update the scroll position state
    }, 2000); // Change scroll position every 2 seconds

    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="relative w-[780px] h-[40px] overflow-hidden opacity-70">
      {/* Main container for the flow of items with hidden overflow for smooth scrolling */}

      <motion.div
        className="absolute flex items-center h-[40px] gap-3" // Position and style for the scrolling container
        initial={{ x: 0 }} // Initial position for the motion animation
        animate={{
          x: scrollPosition, // Animate the x-axis based on scrollPosition state
        }}
        transition={{
          duration: 1.2, // Duration of the animation
          ease: "easeInOut", // Easing function for smooth transition
        }}
      >
        {/* Map over the items array to display each item */}
        {items.map(({ letter, text }, index) => (
          <div
            key={index} // Unique key for each item in the list
            className="flex items-center justify-between w-auto h-[32px] border border-[#333441] bg-[#222331] rounded-full px-2 min-w-[200px]"
          >
            {/* Rounded Letter Badge */}
            <div className="flex items-center justify-center w-[25px] h-[20px] bg-[#333] rounded-full text-white text-[12px] flex-shrink-0">
              {letter} {/* Display the letter inside the badge */}
            </div>

            {/* Evenly Spaced Text */}
            <p className="font-inter text-[14px] font-light text-white text-center flex-grow">
              {text} {/* Display the descriptive text */}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollableFlowbar; // Export the component for use in other parts of the app
