import React from "react";

interface KeyType {
  specialChar?: boolean;
  char?: string;
  keyname: string;
  width: number;
  height: number;
}

const keys: KeyType[][] = [
  [
    {
      specialChar: false,
      keyname: "esc",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "!",
      keyname: "1",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "@",
      keyname: "2",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "#",
      keyname: "3",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "$",
      keyname: "4",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "%",
      keyname: "5",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "^",
      keyname: "6",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "&",
      keyname: "7",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "*",
      keyname: "8",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "(",
      keyname: "9",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: ")",
      keyname: "0",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "-",
      keyname: "-",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "=",
      keyname: "=",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      char: "",
      keyname: "Backspace",
      width: 110,
      height: 43,
    },
  ],
  [
    {
      specialChar: false,
      char: "tab",
      keyname: "tab",
      width: 77,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "Q",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "W",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "E",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "R",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "T",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "Y",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "U",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "I",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "O",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "P",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "{",
      keyname: "[",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "}",
      keyname: "]",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "|",
      keyname: "\\",
      width: 73,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "Pgup",
      width: 43,
      height: 43,
    },
  ],
  [
    {
      specialChar: false,
      keyname: "Capslock",
      width: 77,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "A",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "S",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "D",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "F",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "G",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "H",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "J",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "K",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "L",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: ";",
      keyname: ";",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "'",
      keyname: "'",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "Return",
      width: 120,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "PgDn",
      width: 43,
      height: 43,
    },
  ],
  [
    {
      specialChar: false,
      keyname: "Shift",
      width: 100,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "Z",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "X",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "C",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "V",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "B",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "N",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "M",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "<",
      keyname: ",",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: ">",
      keyname: ".",
      width: 43,
      height: 43,
    },
    {
      specialChar: true,
      char: "?",
      keyname: "/",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "Shift",
      width: 100,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "▲",
      width: 43,
      height: 43,
    },
    {
      specialChar: false,
      keyname: "Fn",
      width: 43,
      height: 43,
    },
  ],
  [
    { keyname: "^", width: 43, height: 43 },
    { keyname: "⌘", width: 43, height: 43 },
    { keyname: "⌥", width: 43, height: 43 },
    { keyname: "", width: 380, height: 43 },
    { keyname: "⌥", width: 43, height: 43 },
  ],
  [
    { keyname: "◄", width: 43, height: 43 },
    { keyname: "▼", width: 43, height: 43 },
    { keyname: "►", width: 43, height: 43 },
  ],
];

const Keyboard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-[789px] h-[253px] bg-gradient-to-b from-[#010515] to-[#121421] rounded-b-[20px] border-b border-[#ffffff09] border-l border-r">
      <div className="flex items-center justify-evenly gap-1">
        {keys[0].map((key, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center bg-gradient-to-b from-[#2E303D] to-[#171927] rounded-[4px] opacity-60 shadow-md"
              style={{
                width: `${key.width}px`,
                height: `${key.height}px`,
              }}
            >
              <div
                className="flex flex-col items-center justify-center bg-gradient-to-b from-[#080A19] to-[#101220] rounded-[4px] gap-[2px] font-inter"
                style={{
                  width: `${key.width - 1.5}px`,
                  height: `${key.height - 1.8}px`,
                }}
              >
                {key.specialChar ? (
                  <>
                    <span className="text-[10px] opacity-20 font-inter">
                      {key.char}
                    </span>
                    <span className="text-[8px] opacity-20 font-inter">
                      {key.keyname}
                    </span>
                  </>
                ) : (
                  <span className="text-[10px] opacity-20 font-inter">
                    {key.keyname}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* QWERTY  */}
      <div className="flex items-center justify-evenly gap-1">
        {keys[1].map((key, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center bg-gradient-to-b from-[#2E303D] to-[#171927] rounded-[4px] opacity-60 shadow-md"
              style={{
                width: `${key.width}px`,
                height: `${key.height}px`,
              }}
            >
              <div
                className="flex flex-col items-center justify-center bg-gradient-to-b from-[#080A19] to-[#101220] rounded-[4px] gap-[2px] font-inter"
                style={{
                  width: `${key.width - 1.5}px`,
                  height: `${key.height - 1.8}px`,
                }}
              >
                {key.specialChar ? (
                  <>
                    <span className="text-[10px] opacity-20 font-inter">
                      {key.char}
                    </span>
                    <span className="text-[8px] opacity-20 font-inter">
                      {key.keyname}
                    </span>
                  </>
                ) : (
                  <span className="text-[10px] opacity-20 font-inter">
                    {key.keyname}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* ASDFG  */}
      <div className="flex items-center justify-evenly gap-1">
        {keys[2].map((key, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center bg-gradient-to-b from-[#2E303D] to-[#171927] rounded-[4px] opacity-60 shadow-md"
              style={{
                width: `${key.width}px`,
                height: `${key.height}px`,
              }}
            >
              <div
                className="flex flex-col items-center justify-center bg-gradient-to-b from-[#080A19] to-[#101220] rounded-[4px] gap-[2px] font-inter"
                style={{
                  width: `${key.width - 1.5}px`,
                  height: `${key.height - 1.8}px`,
                }}
              >
                {key.specialChar ? (
                  <>
                    <span className="text-[10px] opacity-20 font-inter">
                      {key.char}
                    </span>
                    <span className="text-[8px] opacity-20 font-inter">
                      {key.keyname}
                    </span>
                  </>
                ) : (
                  <span className="text-left text-[10px] opacity-20 font-inter">
                    {key.keyname}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* ZXCVB  */}
      <div className="flex items-center justify-evenly gap-1">
        {keys[3].map((key, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center bg-gradient-to-b from-[#2E303D] to-[#171927] rounded-[4px] opacity-60 shadow-md"
              style={{
                width: `${key.width}px`,
                height: `${key.height}px`,
              }}
            >
              <div
                className="flex flex-col items-center justify-center bg-gradient-to-b from-[#080A19] to-[#101220] rounded-[4px] gap-[2px] font-inter"
                style={{
                  width: `${key.width - 1.5}px`,
                  height: `${key.height - 1.5}px`,
                }}
              >
                {key.specialChar ? (
                  <>
                    <span className="text-[10px] opacity-20 font-inter">
                      {key.char}
                    </span>
                    <span className="text-[8px] opacity-20 font-inter">
                      {key.keyname}
                    </span>
                  </>
                ) : (
                  <span className="text-left text-[10px] opacity-20 font-inter">
                    {key.keyname}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Command, space  */}
      <div className="flex items-center justify-evenly gap-16">
        <div className="flex justify-center items-center gap-1">
          {keys[4].map((key, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center bg-gradient-to-b from-[#2E303D] to-[#171927] rounded-[4px] opacity-60 shadow-md"
                style={{
                  width: `${key.width}px`,
                  height: `${key.height}px`,
                }}
              >
                <div
                  className="flex flex-col items-center justify-center bg-gradient-to-b from-[#080A19] to-[#101220] rounded-[4px] gap-[2px] font-inter"
                  style={{
                    width: `${key.width - 1.5}px`,
                    height: `${key.height - 1.5}px`,
                  }}
                >
                  {key.specialChar ? (
                    <>
                      <span className="text-[10px] opacity-20 font-inter">
                        {key.char}
                      </span>
                      <span className="text-[8px] opacity-20 font-inter">
                        {key.keyname}
                      </span>
                    </>
                  ) : (
                    <span className="text-left text-[10px] opacity-20 font-inter">
                      {key.keyname}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-1">
          {keys[5].map((key, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center bg-gradient-to-b from-[#2E303D] to-[#171927] rounded-[4px] opacity-60 shadow-md"
                style={{
                  width: `${key.width}px`,
                  height: `${key.height}px`,
                }}
              >
                <div
                  className="flex flex-col items-center justify-center bg-gradient-to-b from-[#080A19] to-[#101220] rounded-[4px] gap-[2px] font-inter"
                  style={{
                    width: `${key.width - 1.5}px`,
                    height: `${key.height - 1.5}px`,
                  }}
                >
                  {key.specialChar ? (
                    <>
                      <span className="text-[10px] opacity-20 font-inter">
                        {key.char}
                      </span>
                      <span className="text-[8px] opacity-20 font-inter">
                        {key.keyname}
                      </span>
                    </>
                  ) : (
                    <span className="text-left text-[10px] opacity-20 font-inter">
                      {key.keyname}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
