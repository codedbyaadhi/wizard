"use client";
import React, { useEffect, useState } from "react";

const Creator = () => {
  const [axis, setAxis] = useState({ x: 0, y: 0 });

  const handleAxis = (value: { x: number; y: number }) => {
    setAxis({ x: value.x, y: value.y });
    console.log(`x:${value.x} y:${value.y}`);
  };

  return (
    <div
      className="flex items-center justify-center absolute top-[6339px] w-[1000px] h-[650px] border border-white/10 rounded-2xl"
      onMouseMove={(event) =>
        handleAxis({ x: event.clientX, y: event.clientY })
      }
    ></div>
  );
};

export default Creator;
