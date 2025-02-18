import Keyboard from "@/app/components/keyboard/Keyboard";
import React from "react";
import ScrollableFlowbar from "./ScrollableFlowbar";

const Flexibility = () => {
  return (
    <div className="flex justify-center items-center w-[960px] h-[485px] bg-gradient-to-b from-[#050717] to-[#292e43] rounded-[33px]">
      <div className="w-[958px] h-[483.5px] bg-gradient-to-b from-[#010414] to-[#0F1026] rounded-[33px]">
        <div className="flex flex-col items-center justify-center gap-20">
          <Keyboard />
          <ScrollableFlowbar />
        </div>
      </div>
    </div>
  );
};

export default Flexibility;
