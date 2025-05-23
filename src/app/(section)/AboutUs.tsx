"use client";

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      <div
        className="absolute top-0 left-0 z-0 mt-100 h-[120px] w-[150px] bg-cover bg-center pl-56 opacity-70 md:-mt-30 md:h-[900px] md:w-[800px] md:pl-0 md:opacity-70"
        style={{ backgroundImage: "url('/images/about-us/bg.png')" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 md:grid-cols-3">
        <div />

        <div className="space-y-2 text-center">
          <h4 className="font-birthstone text-sm tracking-[0.76px] text-yellow-300 uppercase">
            Our Story
          </h4>
          <h2 className="text-3xl tracking-[10.51px] text-[#C9AB81] uppercase">
            About Us
          </h2>
        </div>

        <div>
          <p className="font-inter text-justify text-sm leading-snug font-light text-[#C9AB81]">
            Our journey started in September 2017 with two very passionate chefs
            and two managers (Hoja-Iso, Janer). Our mission is to reflect our
            passion and enthusiasm for Turkish cuisine through our very unique
            menu and delicately sourced authentic ingredients. This is a stand
            alone, an individual restaurant with no other branches. We are in
            Hayes-Bromley serving contemporary Mediterranean Food.
          </p>
        </div>
      </div>

      <div className="font-open-sans relative z-10 mt-10 flex items-end justify-center bg-gradient-to-r from-[#9B834E] to-[#352D1B] bg-clip-text leading-none tracking-widest whitespace-nowrap text-transparent">
        <span className="text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[20rem] xl:text-[28rem]">
          T
        </span>

        <span className="inline-block h-[4.2rem] w-[4rem] overflow-hidden rounded-b-full pl-1 align-bottom sm:h-[6.5rem] sm:w-[6rem] md:h-[13rem] md:w-[12rem] md:pl-5 lg:h-[20rem] lg:w-[18rem] xl:h-[23rem] xl:w-[22rem]">
          <Image
            src="/images/about-us/img1.png"
            alt="U letter"
            width={1080}
            height={1080}
            className="h-full w-full rounded-b-full object-cover"
          />
        </span>

        <span className="text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[20rem] xl:text-[27rem]">
          G
        </span>
        <span className="text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[20rem] xl:text-[27rem]">
          R
        </span>
        <span className="text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[20rem] xl:text-[27rem]">
          A
        </span>
      </div>
    </section>
  );
};

export default AboutUs;
