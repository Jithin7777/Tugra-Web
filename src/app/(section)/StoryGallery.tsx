import React from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";

const StoryGallery = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-5">
      <h2 className="text-2xl uppercase md:text-4xl tracking-[5px] md:tracking-[10.59px] font-light text-right mb-16 font-open-sans text-[#C9AB81] md:-translate-x-20 -translate-x-0">
        scroll our stories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Image
          src="/images/story-gallery/img1.png"
          alt="Image 1"
          className="w-full h-68 object-cover"
          width={400}
          height={200}
        />

        <div className="flex flex-col items-center justify-center  text-white h-64 w-full rounded-md">
          <Instagram size={58} className="mt-5 text-[#C59D31]" />
          <p className="text-center uppercase  font-open-sans text-xs md:text-2xl text-[#CEAC5C]  ">
            @tugrahayes
          </p>
        </div>

        <Image
          src="/images/story-gallery/img2.png"
          alt="Image 3"
          className="w-full h-68 object-cover"
          width={400}
          height={200}
        />
        <Image
          src="/images/story-gallery/img3.png"
          alt="Image 4"
          className="w-full h-68 object-cover  "
          width={400}
          height={200}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Image
          src="/images/story-gallery/img4.png"
          alt="Image 5"
          className="col-span-1 w-full h-68 object-cover"
          width={400}
          height={200}
        />
        <Image
          src="/images/story-gallery/img5.png"
          alt="Image 6"
          className="col-span-2 w-full h-68 object-cover"
          width={400}
          height={200}
        />
        <Image
          src="/images/story-gallery/img6.png"
          alt="Image 7"
          className="col-span-1 w-full h-68 object-cover"
          width={400}
          height={100}
        />
      </div>
    </section>
  );
};

export default StoryGallery;
