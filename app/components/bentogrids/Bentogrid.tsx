import React from "react";
import Keyboard from "./grids/keyboard/Keyboard";

const Bentogrid = () => {
  return (
    <div className="flex items-center justify-center w-full h-[1550px] absolute top-[1700px]">
      <div className="flex flex-col items-center justify-between w-[1150px] h-[1250px]">
        <div className="flex flex-col w-full items-center justify-center gap-5 opacity-75">
          <div className="flex flex-col items-center leading-tight font-aeonic">
            <h2 className="text-[40px]">Unlike any library</h2>
            <h2 className="text-[40px]">you've used before</h2>
          </div>
          <p className="text-[17px] font-inter opacity-40 w-[650px] text-center">
            The ultimate wizard for getting things done—our cutting-edge, almost
            divine approach to front-end user interfaces will leave you
            mesmerized.
          </p>
        </div>
        {/* The bento starts here  */}
        <div className="flex flex-col w-[1147px] h-[1000px] relative top-2">
          <div className="flex items-center justify-between w-full h-auto">
            <Keyboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bentogrid;
