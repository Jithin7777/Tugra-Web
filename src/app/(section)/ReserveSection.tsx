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

      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      <div className="relative z-20 flex justify-center items-center h-full">
        <div className="bg-gradient-to-b from-[#F3CB6E] to-[#866F39] text-black w-[80%] md:w-[480px] h-[700px] px-6 text-center clip-curve rounded-bl-[600px] rounded-br-[600px] flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-light font-open-sans uppercase tracking-[10.51px] mb-4">
            Reserve <br /> Your Table
          </h2>
          <p className="text-sm text-[#00000099] max-w-lg mx-auto mb-6 font-inter">
            Secure your spot for an unforgettable Turkish dining experience.
            Book your table now and let us take care of the rest!
          </p>
          <button className="px-6 font-open-sans bg-gradient-to-r from-[#76560A] to-[#715B3E] hex-button py-2 bg-transparent border border-black rounded-md hover:bg-black hover:text-white transition-all">
            BOOK TABLE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;
