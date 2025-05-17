"use client";

import Image from "next/image";
import React from "react";
import heroImg from "/public/images/hero/heroImg.png"; // static import

const Hero = () => {
  return (
    <section
      aria-label="Hero section"
      className="bg-black h-screen flex items-center justify-center"
    >
      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl h-[60vh] sm:h-[100vh] object-contain">
        <Image
          src={heroImg}
          alt="Hero Image"
          fill
          quality={100} 
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
