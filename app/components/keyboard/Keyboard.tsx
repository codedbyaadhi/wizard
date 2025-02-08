/*
  This component renders a visual representation of a keyboard.
  It is designed with a combination of dynamic keys and static elements,
  styled using Tailwind CSS and responsive gradient effects.
  Each key is generated dynamically based on the specified rows and gaps.
*/

import React from "react";

const Keyboard = () => {
  return (
    <div className="flex items-center justify-center w-[799px] h-[295px] bg-gradient-to-b from-[#151326] to-[#100F1C] rounded-[7px] shadow-md">
      <div className="flex flex-col items-center justify-center w-[796px] h-[292px] bg-[#080714] rounded-[7px] gap-[7px]">
        <div className="flex w-[774px] h-[50px] items-center justify-center gap-[10px]">
          {Array.from({ length: 13 }).map((key, idx) => {
            return (
              <div
                className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666616] w-[43px] h-[43px] rounded-[4px] shadow-md"
                key={idx}
              >
                <div className="bg-[#090915] w-[41.7px] h-[41.7px] relative top-[0.3px] rounded-[3px]"></div>
              </div>
            );
          })}
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666610] w-[75px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex items-center justify-center bg-[#090915] w-[74px] h-[41.5px] rounded-[4px]"></div>
          </div>
        </div>
        <div className="flex w-[774px] h-[50px] items-center justify-center gap-[10px]">
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666610] w-[75px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex items-center justify-center bg-[#090915] w-[74px] h-[41px] rounded-[4px]"></div>
          </div>
          {Array.from({ length: 13 }).map((key, idx) => {
            return (
              <div
                className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666616] w-[43px] h-[43px] rounded-[4px] shadow-md"
                key={idx}
              >
                <div className="bg-[#090915] w-[41.5px] h-[41.7px] relative top-[0.3px] rounded-[3px]"></div>
              </div>
            );
          })}
        </div>
        <div className="flex w-[774px] h-[50px] items-center justify-center gap-[10px]">
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666610] w-[85px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex items-center justify-center bg-[#090915] w-[83.5px] h-[41px] rounded-[4px]"></div>
          </div>
          {Array.from({ length: 11 }).map((key, idx) => {
            return (
              <div
                className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666616] w-[43px] h-[43px] rounded-[4px] shadow-md"
                key={idx}
              >
                <div className="bg-[#090915] w-[41.5px] h-[42.1px] relative top-[0.3px] rounded-[3px]"></div>
              </div>
            );
          })}
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666610] w-[85px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex items-center justify-center bg-[#090915] w-[83.5px] h-[41.5px] rounded-[4px]"></div>
          </div>
        </div>
        <div className="flex w-[774px] h-[50px] items-center justify-center gap-[10px]">
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666610] w-[59px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex items-center justify-center bg-[#090915] w-[57.3px] h-[41.5px] rounded-[4px]"></div>
          </div>
          {Array.from({ length: 11 }).map((key, idx) => {
            return (
              <div
                className={`flex items-center justify-center ${
                  idx === 3 || idx === 4
                    ? "bg-gradient-to-b from-[#988EFF] to-[#978eff33]"
                    : "bg-gradient-to-b from-[#ffffff11] to-[#66666616]"
                } w-[43px] h-[43px] rounded-[4px] shadow-md`}
                key={idx}
              >
                <div
                  className={`${
                    idx === 3 || idx === 4 ? "bg-[#090915]" : "bg-[#090915]"
                  } w-[41.1px] h-[41.4px] relative top-[0.3px] rounded-[3px] flex items-center justify-center ${
                    idx === 3 || idx === 4
                      ? "text-[#978eff28]"
                      : "text-[#978eff28]"
                  } text-sm font-inter`}
                >
                  {idx === 3 ? "C" : idx === 4 ? "V" : ""}
                </div>
              </div>
            );
          })}
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666610] w-[110px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex items-center justify-center bg-[#090915] w-[108.3px] h-[41.5px] rounded-[4px]"></div>
          </div>
        </div>
        <div className="flex w-[774px] h-[50px] items-center justify-center gap-[10px]">
          {Array.from({ length: 3 }).map((key, idx) => {
            return (
              <div
                className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666616] w-[43px] h-[43px] rounded-[4px] shadow-md"
                key={idx}
              >
                <div className="bg-[#090915] w-[41.5px] h-[42.1px] relative top-[0.3px] rounded-[3px]"></div>
              </div>
            );
          })}
          <div className="flex items-center justify-center bg-gradient-to-b from-[#988EFF] to-[#978eff33] w-[70px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex flex-col items-center justify-center bg-[#090915] w-[68.5px] h-[42px] rounded-[3px]">
              <p className="text-[10px] text-[#978eff28] text-right pl-8">⌘</p>
              <p className="text-[10px] text-[#978eff28]">command</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666610] w-[235px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex items-center justify-center bg-[#090915] w-[232.5px] h-[41.5px] rounded-[4px]"></div>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666610] w-[68.5px] h-[43px] rounded-[4px] shadow-md">
            <div className="flex items-center justify-center bg-[#090915] w-[83.5px] h-[41.5px] rounded-[4px]"></div>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666616] w-[43px] h-[43px] rounded-[4px] shadow-md">
            <div className="bg-[#090915] w-[41.5px] h-[42.1px] relative top-[0.3px] rounded-[3px]"></div>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666616] w-[43px] h-[43px] rounded-[4px] shadow-md">
            <div className="bg-[#090915] w-[41.5px] h-[42.1px] relative top-[0.3px] rounded-[3px]"></div>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666616] w-[43px] h-[43px] rounded-[4px] shadow-md">
            <div className="bg-[#090915] w-[41.5px] h-[42.1px] relative top-[0.3px] rounded-[3px]"></div>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff11] to-[#66666616] w-[43px] h-[43px] rounded-[4px] shadow-md">
            <div className="bg-[#090915] w-[41.5px] h-[42.1px] relative top-[0.3px] rounded-[3px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
