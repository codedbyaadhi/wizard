"use client";
import Origin from "./components/origin/Origin";
import Pricing from "./components/pricing/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#040313]">
      <Origin />
      {/* <Dashboard /> */}
      {/* <Pricing /> */}
    </div>
  );
}
