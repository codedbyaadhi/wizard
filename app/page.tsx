"use client";
import Origin from "./components/origin/Origin";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#040313]">
      <Origin />
      {/* <Dashboard /> */}
    </div>
  );
}
