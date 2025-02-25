import Keyboard from "@/app/components/keyboard/Keyboard";
import React from "react";
import ScrollableFlowbar from "./ScrollableFlowbar";

const Flexibility = () => {
  return (
    <div className="flex justify-center items-center w-[860px] h-[485px] bg-gradient-to-b from-[#050717] to-[#292e43] rounded-[33px]">
      <div className="w-[858px] h-[483.5px] bg-gradient-to-b from-[#010414] to-[#0F1026] rounded-[33px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <Keyboard />
          <div className="flex flex-col items-center justify-center w-full">
            <ScrollableFlowbar />
            <div className="flex flex-col items-center justify-center relative top-10 gap-1">
              <h2 className="font-inter text-[22px]">
                Everything on your keyboard
              </h2>
              <p className="font-inter text-[16px] opacity-40 font-light">
                Glide through your keyboard. Deep-seek everything and let your
                fingertips reflect the universe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexibility;
