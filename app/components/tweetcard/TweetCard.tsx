"use client";
import Image from "next/image";
import React from "react";

const TweetCard = () => {
  return (
    <div className="flex flex-col items-center w-full h-[410px] rounded-[10px] bg-gradient-to-b from-[#101928] to-[#090C1350] shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 overflow-hidden">
            <Image
              src={"https://i.ibb.co/8nWvTgDW/ashirvad.png"}
              alt={``}
              draggable="false"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-0.5">
            <div className="flex gap-1 items-center">
              <h4 className="text-start font-aeonic text-sm font-medium">
                Aashirvad
              </h4>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49091 13L3.36818 11.019L1.24091 10.5238L1.44773 8.23333L0 6.5L1.44773 4.76667L1.24091 2.47619L3.36818 1.98095L4.49091 0L6.5 0.897619L8.50909 0L9.63182 1.98095L11.7591 2.47619L11.5523 4.76667L13 6.5L11.5523 8.23333L11.7591 10.5238L9.63182 11.019L8.50909 13L6.5 12.1024L4.49091 13ZM5.87955 8.69762L9.21818 5.2L8.39091 4.30238L5.87955 6.93333L4.60909 5.63333L3.78182 6.5L5.87955 8.69762Z"
                  fill="#3C7CE5"
                />
              </svg>
            </div>
            <h4 className="text-start font-inter text-sm opacity-50">
              @pr0tagon1st
            </h4>
          </div>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.025 0.65625H13.172L8.482 6.03025L14 13.3442H9.68L6.294 8.90925L2.424 13.3442H0.275L5.291 7.59425L0 0.65725H4.43L7.486 4.71025L11.025 0.65625ZM10.27 12.0562H11.46L3.78 1.87725H2.504L10.27 12.0562Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>
      <div className="flex flex-col w-[231px] h-[300px] justify-evenly space-y-2">
        <p className="text-[12px] font-inter font-light">
          Building front end is chaos
        </p>
        <div className="flex items-start">
          <div className="flex items-center justify-center p-2 w-[174px] h-[45px] bg-[#26262A] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] shadow-md">
            <p className="text-[12px] font-inter font-light text-left">
              Any savior ui libraries out there ?
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center justify-center p-2 w-[70px] h-[32px] bg-[#1E8EFE] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] shadow-lg shadow-blue-500/50">
            <p className="text-[12px] font-inter font-light">wizard ui</p>
          </div>

          <p className="text-[8px] font-inter text-white opacity-25">
            Delivered
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1">
          <div className="flex items-center justify-center p-2 w-[100px] h-[30px] bg-[#26262A] rounded-full shadow-md">
            <p className="text-[12px] font-inter font-light text-left">
              Holy fuck bro
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 w-[120px] h-[30px] bg-[#26262A] rounded-full shadow-md">
            <p className="text-[12px] font-inter font-light text-left">
              this is pure magic
            </p>
          </div>
          <p className="text-[30px]">😭😭</p>
          <div className="flex items-center justify-center gap-2 p-2 w-[210px] h-[30px] bg-[#26262A] rounded-full shadow-md">
            <p className="text-[12px] font-inter font-light text-left">
              let’s say goodbye to other libraries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
