"use client";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import { BrandVectorProp as vectors } from "@/config/config";

/*
  The Brands component is a visually dynamic and interactive section
  that showcases brand vectors with smooth animations. It leverages
  Framer Motion for managing animation states, ensuring high performance
  and seamless user experience.

  Key Features:
  - Fades in and out elements with opacity-based animations.
  - Includes a blur effect during transitions for added visual depth.
  - Fully responsive, ensuring the design adapts beautifully across devices.
  - Animation for vectors is triggered only after the second div is visible.
*/

const blurOpacityVariant = {
  hidden: {
    opacity: 0,
    y: 15,
    filter: "blur(15px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const Brands = () => {
  // Ref for the second div
  const secondDivRef = useRef(null);

  // Use Framer Motion's useInView hook
  const isSecondDivInView = useInView(secondDivRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  return (
    <motion.div className="flex items-center justify-center w-[1057px] h-[178px] absolute top-[1327px]">
      <div
        className="flex flex-col items-center justify-between w-[957px] h-[94px]"
        ref={secondDivRef} // Attach the ref to the second div
      >
        <div className="flex">
          <p className="font-inter text-[17px] font-normal opacity-15">
            Building complex front-end applications is now became more
            effortless and advanced
          </p>
        </div>
        <motion.div
          className="flex items-center gap-16"
          variants={blurOpacityVariant}
          initial="hidden"
          animate={isSecondDivInView ? "visible" : "hidden"} // Animate only when the second div is visible
        >
          {vectors.map((item, idx) => {
            return (
              <motion.div
                className="flex items-center justify-center"
                key={item.key}
                initial="hidden"
                animate={isSecondDivInView ? "visible" : "hidden"}
                variants={blurOpacityVariant}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.2 * idx,
                }}
              >
                {item.vector()}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Brands;
