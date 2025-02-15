"use client";
import { Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center absolute top-[6805px] w-full h-[1176px] border">
      <div className="flex items-center justify-between w-[1235px] h-[415px] rounded-[19px] relative top-36 shadow-md bg-gradient-to-b from-[#7D5AF8] to-[#4A3592]">
        <div className="flex flex-col items-start justify-between w-[565px] h-[240px] relative left-12">
          <h3 className="text-white text-[45px] font-aeonic font-medium">
            Get started with Wizard
          </h3>
          <p className="text-white text-sm font-inter opacity-60">
            Dive deep into front-end development effortlessly and unlock the
            power of smooth, interactive experiences with Wizard. Enhance your
            app with stunning, pre-built animations that bring your UI to life!
          </p>
          <div className="flex items-start justify-start w-full h-[60px] gap-3">
            {/* The call to action buttons  */}
            <div className="flex items-center justify-center border border-white/10 w-[237px] h-full rounded-[15px] shadow-md p-1">
              <div className="flex items-center justify-center w-full h-[50px] rounded-[11px] shadow-md bg-white px-4">
                <div className="flex items-center justify-center gap-2 font-aeonic text-[#5D37D5] font-medium">
                  <p>Press</p>
                  <div className="flex items-center justify-center w-[30px] h-[22px] rounded bg-[#957be7] shadow-md px-1">
                    <div className="flex items-center justify-center w-[29px] h-[18px] rounded bg-[#8B6AFD] shadow-md">
                      <p className="text-[13px] text-white">B</p>
                    </div>
                  </div>
                  <p>to book a call</p>
                </div>
              </div>
            </div>
            {/* The second button CTA  */}
            <div className="flex items-center justify-center border border-white/10 w-[187px] h-full rounded-[15px] shadow-md p-1">
              <div className="flex items-center justify-center w-full h-[50px] rounded-[11px] shadow-md bg-[#7557e1] px-4">
                <div className="flex items-center justify-center gap-2 font-aeonic text-white font-medium">
                  <div className="flex items-center justify-center w-[30px] h-[22px] rounded bg-[#957be7] shadow-md px-1">
                    <div className="flex items-center justify-center w-[29px] h-[18px] rounded bg-[#8C6AFC] shadow-md">
                      <Send size={13} />
                    </div>
                  </div>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[520px] h-[412px] border"></div>
      </div>
    </footer>
  );
};

export default Footer;
