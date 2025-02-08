"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface FeedbackCardProp {
  profile: string;
  name: string;
  username: string;
  feedback: string;
  id: any;
  lastIndex: number;
}

const FeedbackCard: React.FC<FeedbackCardProp> = ({
  profile,
  name,
  username,
  feedback,
  id,
  lastIndex,
}) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [elementId, setElementId] = useState<number | null>(null);

  useEffect(() => {
    setElementId(Number(id)); // Convert id to a number and set state
  }, [id]);

  return (
    <div className="flex flex-col items-center w-[297px] p-6 rounded-[10px] bg-gradient-to-b from-[#101928] to-[#090C1350] shadow-md">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 overflow-hidden">
            {profile && (
              <Image
                src={profile}
                alt={`by ${name}`}
                draggable="false"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <h4 className="text-start font-aeonic text-sm font-medium">
                {name}
              </h4>
              <div className="flex items-center justify-center">
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
            </div>
            <h4 className="text-start font-inter text-sm opacity-50">
              @{username}
            </h4>
          </div>
        </div>
        <div className="flex items-center">
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
      </div>
      <div className="w-full mt-3">
        {elementId !== null && elementId === lastIndex ? (
          <p
            className="font-inter font-semibold text-[13px] opacity-50 bg-gradient-to-b from-[#FFFFFF] to-[#99999935] bg-clip-text text-transparent"
            ref={ref}
            id={id.toString()}
          >
            {feedback}
          </p>
        ) : (
          <p
            className="font-inter text-[13px] opacity-50"
            ref={ref}
            id={id.toString()}
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default FeedbackCard;
