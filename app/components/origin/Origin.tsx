"use client";
import React from "react";
import LightRays from "@/app/components/rays/LightRays";
import Badge from "@/app/components/badge/Badge";
import Hero from "@/app/components/hero/Hero";
import Brands from "@/app/components/brands/Brands";
import HeroClip from "@/app/components/heroclip/HeroClip";
import Section from "@/app/components/section/Section";
import Feedback from "@/app/components/feedback/Feedback";
import Creator from "../creator/Creator";
import Footer from "../footer/Footer";
import Bentogrids from "../bentogrids/Bentogrids";

const Origin = () => {
  return (
    <div className="flex flex-col items-center w-full h-[7981px] bg-[#040313]">
      <LightRays stagger={true} />
      <Badge />
      <Hero />
      <HeroClip />
      <Brands />
      <Section />
      <Bentogrids />
      <Feedback />
      <Creator />
      <Footer />
    </div>
  );
};

export default Origin;
