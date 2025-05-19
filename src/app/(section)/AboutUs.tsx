"use client";

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-32 relative overflow-hidden">
      <div
  className="absolute top-0 left-0 w-[150px] h-[120px]  md:w-[800px] md:h-[900px] mt-100 pl-56 md:pl-0 md:-mt-30 bg-cover bg-center opacity-70 md:opacity-70 z-0"
  style={{ backgroundImage: "url('/images/about-us/bg.png')" }}
/>


      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div />

        <div className="space-y-2 text-center">
          <h4 className="text-sm uppercase tracking-[0.76px] text-yellow-300 font-birthstone">
            Our Story
          </h4>
          <h2 className="text-3xl uppercase text-[#C9AB81] tracking-[10.51px]">About Us</h2>
        </div>

        <div>
          <p className="font-inter font-light leading-snug text-justify text-sm text-[#C9AB81]">
            Our journey started in September 2017 with two very passionate chefs
            and two managers (Hoja-Iso, Janer). Our mission is to reflect our
            passion and enthusiasm for Turkish cuisine through our very unique
            menu and delicately sourced authentic ingredients. This is a stand
            alone, an individual restaurant with no other branches. We are in
            Hayes-Bromley serving contemporary Mediterranean Food.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-10 flex items-end justify-center bg-gradient-to-r from-[#9B834E] to-[#352D1B] bg-clip-text text-transparent tracking-widest font-open-sans leading-none whitespace-nowrap">
        <span className="text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[20rem] xl:text-[28rem]">T</span>

        <span
          className="inline-block align-bottom
            w-[4rem] h-[4.2rem]
            sm:w-[6rem] sm:h-[6.5rem]
            md:w-[12rem] md:h-[13rem]
            lg:w-[18rem] lg:h-[20rem]
            xl:w-[22rem] xl:h-[23rem]
            pl-1 md:pl-5 overflow-hidden rounded-b-full"
        >
          <Image
            src="/images/about-us/img1.png"
            alt="U letter"
            width={1080}
            height={1080}
            className="w-full h-full object-cover rounded-b-full"
          />
        </span>

        <span className="text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[20rem] xl:text-[27rem]">G</span>
        <span className="text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[20rem] xl:text-[27rem]">R</span>
        <span className="text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[20rem] xl:text-[27rem]">A</span>
      </div>
    </section>
  );
};

export default AboutUs;
