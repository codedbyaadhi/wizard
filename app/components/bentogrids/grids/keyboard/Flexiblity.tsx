import Keyboard from "@/app/components/keyboard/Keyboard";
import React from "react";

const Flexibility = () => {
  return (
    <div className="flex justify-center items-center w-[960px] h-[485px] bg-gradient-to-b from-[#050717] to-[#292e43] rounded-[33px]">
      <div className="w-[958px] h-[483.5px] bg-gradient-to-b from-[#010414] to-[#0F1026] rounded-[33px]">
        <div className="flex items-center justify-center">
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default Flexibility;
