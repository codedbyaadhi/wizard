"use client";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import wizard from "@/svg/footer/wizard.svg";

const Footer = () => {
  return (
    <footer className="absolute top-[6800px] w-full min-h-screen flex flex-col items-center justify-between py-20 overflow-hidden bg-[#050213]">
      {/* Top CTA Section */}
      <div className="flex items-center justify-between max-w-[1235px] w-full h-[415px] rounded-[19px] shadow-md bg-gradient-to-b from-[#7D5AF8] to-[#4A3592] px-12">
        <div className="flex flex-col items-start justify-between max-w-[565px] h-[240px]">
          <h3 className="text-white text-[45px] font-aeonic font-medium">
            Get started with Wizard
          </h3>
          <p className="text-white text-sm font-inter opacity-60">
            Dive deep into front-end development effortlessly and unlock the
            power of smooth, interactive experiences with Wizard. Enhance your
            app with stunning, pre-built animations that bring your UI to life!
          </p>
          <div className="flex items-start justify-start w-full h-[60px] gap-3">
            {/* The call to action buttons  */}
            <div className="flex items-center justify-center border border-white/10 w-[237px] h-full rounded-[15px] shadow-md p-1">
              <div className="flex items-center justify-center w-full h-[50px] rounded-[11px] shadow-md bg-white px-4">
                <div className="flex items-center justify-center gap-2 font-aeonic text-[#5D37D5] font-medium">
                  <p>Press</p>
                  <div className="flex items-center justify-center w-[30px] h-[22px] rounded bg-[#957be7] shadow-md px-1">
                    <div className="flex items-center justify-center w-[29px] h-[18px] rounded bg-[#8B6AFD] shadow-md">
                      <p className="text-[13px] text-white">B</p>
                    </div>
                  </div>
                  <p>to book a call</p>
                </div>
              </div>
            </div>
            {/* The second button CTA  */}
            <div className="flex items-center justify-center border border-white/10 w-[187px] h-full rounded-[15px] shadow-md p-1">
              <div className="flex items-center justify-center w-full h-[50px] rounded-[11px] shadow-md bg-[#7557e1] px-4">
                <div className="flex items-center justify-center gap-2 font-aeonic text-white font-medium">
                  <div className="flex items-center justify-center w-[30px] h-[22px] rounded bg-[#957be7] shadow-md px-1">
                    <div className="flex items-center justify-center w-[29px] h-[18px] rounded bg-[#8C6AFC] shadow-md">
                      <Send size={13} />
                    </div>
                  </div>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[520px] h-[412px]"></div>
      </div>

      {/* Middle Section - Links and Info */}
      <div className="flex max-w-[1235px] w-full h-[280px] items-start justify-between mt-20 px-4">
        {/* Logo and Description Section */}
        <div className="flex flex-col items-start justify-between w-[490px] h-full space-y-8">
          <div className="flex items-start w-full">
            <div className="flex items-center justify-center gap-2">
              {/* The wizard logo  */}
              <div className="flex items-center justify-center w-[48px] h-[48px] border border-white/10 bg-[#0B080F] rounded-xl">
                <div className="flex items-center justify-center w-[40px] h-[40px] border border-white/5 bg-[#100b2841] rounded-[7px]"></div>
              </div>
              <h3 className="text-[25px] font-aeonic opacity-70">Wizard</h3>
            </div>
          </div>
          <p className="text-white text-sm font-inter opacity-40">
            Bring your dreams to life and transform them into a mesmerizing,
            absolute reality with the unparalleled magic of Wizard UI's
            innovative technology
            <br />
            <br />
            <br />
            Copyright © 2024 Emblem. All rights reserved.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex w-[725px] items-start justify-end gap-28 h-full font-inter">
          <div className="col-span-1">
            <h3 className="text-white text-lg font-normal mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Who we serve
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Affiliate Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-6">Socials</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="w-full max-w-[1230px] h-[1.5px] bg-gradient-to-r from-transparent via-[#978eff50] to-transparent mt-20"></div>

      {/* Bottom Image */}
      <div className="w-full max-w-[1230px] flex items-center justify-center mt-20 overflow-hidden">
        <Image
          src={wizard}
          alt="wizard ui"
          draggable="false"
          width={1392}
          height={100}
        />
      </div>
    </footer>
  );
};

export default Footer;
