"use client";
import type React from "react";
import { useState } from "react";
import { FooterLinks } from "@/config/config";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:aadhicodes.dev@gmail.com?subject=New Subscription&body=Email: ${email}`;
  };

  return (
    <footer className="flex items-center justify-center bg-gradient-to-b from-[#040313] to-[#040313] text-white py-20 w-full absolute top-[7330px] overflow-hidden font-inter">
      <div
        className="flex absolute w-[1250px] h-[250px] bg-[#144AF2] rounded-full 
                blur-3xl opacity-40 shadow-[0_0_200px_#144AF2] top-[600px] -z-0"
      ></div>

      <div className="mx-auto w-[1440px] px-24">
        <div className="flex justify-between items-start mb-16">
          <div className="w-[180px]">
            <div className="w-full h-[120px] border border-white/10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-300">
              {/* Add your logo here */}
              <span className="text-2xl font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Logo
              </span>
            </div>
          </div>
          <div className="flex gap-24">
            {FooterLinks.map((section, index) => (
              <div key={index}>
                <ul className="space-y-5">
                  {section.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={link.path}
                        className="text-[#EFEDFD] opacity-60 hover:opacity-100 transition-all duration-200 font-light text-[15px] hover:translate-x-1 inline-block"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <div className="flex justify-between items-center gap-8">
          <div className="max-w-[500px]">
            <h4 className="text-2xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent font-medium mb-3 font-inter">
              Looking to acquire a component?
            </h4>
            <p className="text-[15px] text-white/40 font-light leading-relaxed">
              Request your desired component and we'll help bring your vision to
              life.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-3 w-[480px]">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border border-white/10 text-white placeholder-white/40 flex-grow px-5 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#251b70] hover:bg-[#0B0821] transition-all duration-200 ease-in-out outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-[#144cf270] to-[#144cf213] px-6 rounded-lg hover:bg-[#120C33] transition-all border border-white/10 font-medium flex items-center justify-center py-2 group font-inter"
            >
              <span>Request</span>
            </button>
          </form>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <div className="flex justify-between items-center text-sm text-white/40">
          <p>Wizard UI, LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-white/60 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white/60 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
