"use client";
import React from "react";
import FeedbackCard from "@/app/components/feedbackcard/FeedbackCard";
import { Feedbacks } from "@/config/config";
import TweetCard from "../tweetcard/TweetCard";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.5 * i,
      staggerChildren: 0.3,
      type: "spring",
      stiffness: 20,
      damping: 15,
    },
  }),
};

const Feedback = () => {
  return (
    <div className="absolute top-[4532px] flex flex-col items-center w-[935px] h-[1500px]">
      <div className="flex items-center justify-center w-[650px] h-[623.33px]">
        <svg
          width="650"
          height="624"
          viewBox="0 0 650 624"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M632.554 311.396C554.212 315.988 485.225 351.443 425.687 408.538C366.057 465.722 329.053 531.961 324.358 607.29C319.813 532.004 283.945 465.724 224.313 408.538C164.768 351.437 95.8249 317.608 17.4499 313.24C95.8329 308.575 164.775 272.567 224.313 215.33C283.93 158.017 322.634 91.778 327.565 16.7005C331.875 91.9924 366.042 158.284 425.687 215.483C485.231 272.584 554.176 306.955 632.554 311.396Z"
            fill="url(#paint0_linear_242_37)"
            stroke="url(#paint1_linear_242_37)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_242_37"
              x1="325"
              y1="0.34375"
              x2="325"
              y2="623.677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#072E57" />
              <stop offset="0.5" stopColor="#071C33" stopOpacity="0" />
              <stop offset="1" stopColor="#070A0F" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_242_37"
              x1="325"
              y1="0.34375"
              x2="325"
              y2="623.677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#988EFF" stopOpacity="0.35" />
              <stop offset="0.5" stopColor="#4C4780" stopOpacity="0.11" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col absolute items-center justify-center gap-2">
          <h3 className="font-aeonic text-[45px] bg-gradient-to-r from-[#99999950] via-white to-[#99999950] bg-clip-text text-transparent">
            Loved By Developers
          </h3>
          <p className="font-inter w-[480px] text-center text-[17px] opacity-25 ">
            We are proud to have tons of thousands of developers all over the
            world to be more efficient
          </p>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-[25rem] flex items-center justify-center gap-[22px] w-full h-[1100px]"
      >
        {Feedbacks.map((group, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-[33px] w-[297px] h-full"
            variants={containerVariants}
            custom={index}
          >
            {group.map((feed, idx) => (
              <motion.div
                key={idx}
                variants={containerVariants}
                className="flex items-center justify-center"
              >
                <FeedbackCard {...feed} lastIndex={3} id={idx} />
              </motion.div>
            ))}
            {index === 1 && <TweetCard />}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Feedback;
