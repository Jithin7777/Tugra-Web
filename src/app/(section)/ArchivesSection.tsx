"use client";
import React from "react";
import Image from "next/image";

const ArchivesSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-26">
      <div className="absolute -top-50 z-0 h-[200px] opacity-50 md:-right-45 md:h-[900px] md:w-[900px]">
        <Image
          src="/images/archives/bg-right.png"
          alt="Right background"
          fill
          className="object-contain object-right"
          priority
          sizes="(max-width: 768px) 100vw, 950px"
        />
      </div>

      <div className="relative z-10">
        <h2 className="font-open-sans mb-8 text-center text-3xl font-normal tracking-[10.51px] text-[#C9AB81] uppercase">
          From Our <br /> Archives
        </h2>
      </div>

      <div className="relative z-10 mx-auto mt-10 grid max-w-7xl grid-cols-1 items-start gap-6 px-4 md:mt-30 md:grid-cols-3">
        <div className="font-open-sans mt-6 flex flex-col leading-none font-normal">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="-mt-7 block bg-gradient-to-b from-[#9B834E] to-[#352D1B] bg-clip-text text-[80px] tracking-[-10px] text-transparent md:-mt-12 md:text-[135px] md:tracking-[-20px]"
            >
              TUGRA
            </span>
          ))}
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/archives/img1.png"
              alt="Archive 1"
              width={400}
              height={250}
              className="h-[200px] w-[200px] object-cover md:h-[400px] md:w-[400px]"
            />
            <Image
              src="/images/archives/img3.png"
              alt="Archive 2"
              width={400}
              height={250}
              className="h-[200px] w-[200px] object-cover md:h-[400px] md:w-[400px]"
            />
            <Image
              src="/images/archives/img2.png"
              alt="Archive 3"
              width={400}
              height={130}
              className="h-[100px] w-[200px] object-cover md:h-[200px] md:w-[400px]"
            />
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/archives/img4.png"
              alt="Archive 4"
              width={400}
              height={250}
              className="h-[200px] w-[200px] object-cover md:h-[400px] md:w-[400px]"
            />
            <Image
              src="/images/archives/img5.png"
              alt="Archive 5"
              width={400}
              height={250}
              className="h-[200px] w-[200px] object-cover md:h-[400px] md:w-[400px]"
            />
            <Image
              src="/images/archives/img6.png"
              alt="Archive 6"
              width={400}
              height={130}
              className="h-[100px] w-[200px] object-cover md:h-[200px] md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchivesSection;
