"use client";
import React from "react";
import LightRays from "@/app/components/rays/LightRays";
import Badge from "@/app/components/badge/Badge";
import Hero from "@/app/components/hero/Hero";
import Brands from "@/app/components/brands/Brands";
import HeroClip from "@/app/components/heroclip/HeroClip";
import Section from "@/app/components/section/Section";
import Footer from "../footer/Footer";

const Origin = () => {
  return (
    <div className="flex flex-col items-center w-full h-[7981px] bg-[#040313] overflow-hidden">
      <LightRays stagger={true} />
      <Badge />
      <Hero />
      <HeroClip />
      <Brands />
      <Section />
      <Footer />
    </div>
  );
};

export default Origin;
