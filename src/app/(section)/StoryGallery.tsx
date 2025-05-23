import React from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";

const StoryGallery = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 pt-5 text-white md:px-5 md:pt-48">
      <Image
        src="/images/story-gallery/bg.png"
        alt="Left Background"
        width={300}
        height={800}
        className="absolute top-0 left-0 z-0 -mt-75 hidden h-[1300px] w-[800px] object-cover opacity-30 md:block"
      />

      <div className="relative z-10">
        <h2 className="font-open-sans mb-16 -translate-x-0 text-right text-2xl font-light tracking-[5px] text-[#C9AB81] uppercase md:-translate-x-20 md:text-4xl md:tracking-[10.59px]">
          scroll our stories
        </h2>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Image
            src="/images/story-gallery/img1.png"
            alt="Image 1"
            className="h-68 w-full object-cover"
            width={400}
            height={200}
          />

          <div className="flex h-64 w-full flex-col items-center justify-center rounded-md text-white">
            <Instagram size={58} className="mt-5 text-[#C59D31]" />
            <p className="font-open-sans text-center text-xs text-[#CEAC5C] uppercase md:text-2xl">
              @tugrahayes
            </p>
          </div>

          <Image
            src="/images/story-gallery/img2.png"
            alt="Image 3"
            className="h-68 w-full object-cover"
            width={400}
            height={200}
          />
          <Image
            src="/images/story-gallery/img3.png"
            alt="Image 4"
            className="h-68 w-full object-cover"
            width={400}
            height={200}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Image
            src="/images/story-gallery/img4.png"
            alt="Image 5"
            className="col-span-1 h-68 w-full object-cover"
            width={400}
            height={200}
          />
          <Image
            src="/images/story-gallery/img5.png"
            alt="Image 6"
            className="col-span-2 h-68 w-full object-cover"
            width={400}
            height={200}
          />
          <Image
            src="/images/story-gallery/img6.png"
            alt="Image 7"
            className="col-span-1 h-68 w-full object-cover"
            width={400}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default StoryGallery;
