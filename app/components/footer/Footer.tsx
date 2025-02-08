import React from "react";

const Footer = () => {
  return (
    <div className="absolute top-[7218px] flex justify-center items-center w-full h-[763px] bg-gradient-to-b from-[#040313] to-[#040313]">
      <div className="flex w-[1128px] h-full items-center justify-between">
        {/* The logo container  */}

        <div className="flex items-center justify-center w-[110px] h-full border">
          <div className="flex w-full h-[220px] border items-center justify-between"></div>
        </div>
        <div className="flex items-center justify-center w-[635px] h-full border"></div>
      </div>
    </div>
  );
};

export default Footer;
