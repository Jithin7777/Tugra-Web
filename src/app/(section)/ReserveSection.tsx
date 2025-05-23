"use client";

import React from "react";
import Image from "next/image";

const ReserveSection = () => {
  return (
    <section className="relative h-[700px] w-full">
      <Image
        src="/images/reserve-table/dining-room.png"
        alt="Dining Room"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-20"
        priority
      />

      <div className="absolute inset-0 z-10 bg-black opacity-40" />

      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="clip-curve flex h-[700px] w-[80%] flex-col items-center justify-center rounded-br-[600px] rounded-bl-[600px] bg-gradient-to-b from-[#F3CB6E] to-[#866F39] px-6 text-center text-black md:w-[480px]">
          <h2 className="font-open-sans mb-4 text-2xl font-light tracking-[10.51px] uppercase md:text-4xl">
            Reserve <br /> Your Table
          </h2>
          <p className="font-inter mx-auto mb-6 max-w-lg text-sm text-[#00000099]">
            Secure your spot for an unforgettable Turkish dining experience.
            Book your table now and let us take care of the rest!
          </p>
          <button className="font-open-sans hex-button rounded-md border border-black bg-transparent bg-gradient-to-r from-[#76560A] to-[#715B3E] px-6 py-2 transition-all hover:bg-black hover:text-white">
            BOOK TABLE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;
