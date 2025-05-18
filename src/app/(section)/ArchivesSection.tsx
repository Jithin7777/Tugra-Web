import React from "react";
import Image from "next/image";

const ArchivesSection = () => {
  return (
    <section className="py-26 bg-black">
      {/* Centered Heading */}
      <h2 className="text-3xl tracking-[10.51px] uppercase font-normal font-open-sans text-center text-[#C9AB81] mb-8">
        From Our <br /> Archives
      </h2>

      {/* Three-column grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 items-start mt-10 md:mt-30">
        
        {/* Column 1: 12 "TUGRA" Headings */}
        <div className="flex flex-col font-open-sans font-normal leading-none mt-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="block -mt-12 tracking-[-20px] text-[135px] bg-gradient-to-b from-[#9B834E] to-[#352D1B] bg-clip-text text-transparent"
            >
              TUGRA
            </span>
          ))}
        </div>

        {/* Column 2: 3 Images */}
        <div className="flex flex-col gap-6 items-center">
          <Image
            src="/images/archives/img1.png"
            alt="Archive 1"
            width={400}
            height={250}
            className=" object-cover w-[400px] h-[400px]"
          />
          <Image
            src="/images/archives/img3.png"
            alt="Archive 2"
            width={400}
            height={250}
            className=" object-cover w-[400px] h-[400px]"
          />
          <Image
            src="/images/archives/img2.png"
            alt="Archive 3"
            width={400}
            height={130}  // half height of 250
            className=" object-cover w-[400px] h-[200px]"
          />
        </div>

        {/* Column 3: 3 Images */}
        <div className="flex flex-col gap-6 items-center">
          <Image
            src="/images/archives/img4.png"
            alt="Archive 4"
            width={400}
            height={250}
            className=" object-cover w-[400px] h-[400px]"
          />
          <Image
            src="/images/archives/img5.png"
            alt="Archive 5"
            width={400}
            height={250}
            className=" object-cover w-[400px] h-[400px]"
          />
          <Image
            src="/images/archives/img6.png"
            alt="Archive 6"
            width={400}
            height={130}  // half height of 250
            className=" object-cover w-[400px] h-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ArchivesSection;
