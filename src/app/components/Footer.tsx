import React from "react";
import { Instagram, Facebook, Globe, Music2 } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-[#C5A14A] text-sm px-6 md:px-16 py-16 md:pt-40 border-t border-[#AE8B38]">
      <div className="max-w-full  grid grid-cols-2 md:grid-cols-12 gap-10  text-left">
        <div className="space-y-2 font-open-sans text-[#CFAC6A] md:col-span-2">
          <p className="mb-3">OUR FOOD</p>
          <p>DRINKS MENU</p>
          <p>PRIVATE DINING</p>
          <p>WHAT&apos;S ON</p>

          <p>OUR POLICY</p>
        </div>

        <div className="space-y-2 font-open-sans text-[#CFAC6A] md:col-span-2">
          <p className="mb-3">BLOG</p>
          <p>PRESS</p>
          <p>CONTACT US</p>
          <p>CAREER</p>
          <p>FIND US</p>
        </div>

        <div className="space-y-2 font-open-sans text-[#CFAC6A] md:col-span-2">
          <p className="mb-3">BIRTHDAY BOOKINGS</p>
          <p>CORPORATE EVENTS</p>
          <p>CHRISTMAS PARTIES</p>
          <p>VENUE HIRE</p>
          <p>OUR PARTNERS</p>
        </div>

        <div className="flex flex-col -mt-5 md:-mt-32  md:space-y-40 md:col-span-2">
          <Image
            width={160}
            height={160}
            src="/images/footer/img.png"
            alt="Tugra Logo"
            className="h-40 object-contain mx-auto"
          />

          <div className="flex justify-center space-x-8 text-[#C5A14A] mt-2">
            <Instagram className="h-5 w-5 hover:text-white cursor-pointer" />
            <Globe className="h-5 w-5 hover:text-white cursor-pointer" />
            <Music2 className="h-5 w-5 hover:text-white cursor-pointer" />
            <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="space-y-2 font-open-sans text-[#CFAC6A] md:col-span-2">
          <p className="mb-3">CONTACT</p>
          <p>44 Station Approach, Hayes,</p>
          <p>Bromley BR2 7EJ, United Kingdom</p>
          <p>+44 20 8462 9898</p>
        </div>

        <div className="space-y-2 font-open-sans text-sm text-[#CFAC6A] md:col-span-2">
          <p className="mb-3">OPENING HOURS</p>
          <p>Monday - 12 PM - 10:30 PM</p>
          <p>Tuesday - Closed</p>
          <p>Wednesday - 12 PM - 11 PM</p>
          <p>Thursday - 12 PM - 11:30 PM</p>
          <p>Friday & Saturday - 12 PM - 12 AM</p>
          <p>Sunday - 12 PM - 10 PM</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between text-center font-open-sans text-xs text-[#CFAC6A] px-4 md:px-0">
        <p>© 2025 VU LOUNGE, ALL RIGHTS RESERVED</p>
        <p className="mt-2 md:mt-0">POWERED BY FOODO</p>
      </div>
    </footer>
  );
};

export default Footer;
