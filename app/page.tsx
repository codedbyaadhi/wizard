"use client";
import Dashboard from "./components/dashboard/Dashboard";
import Origin from "./components/origin/Origin";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#050213]">
      <Origin />
      {/* <Dashboard /> */}
    </div>
  );
}
