import React from "react";
import { Instagram } from "lucide-react";

const StoryGallery = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-5">
      <h2 className="text-4xl  md:text-6xl font-light text-center mb-16 font-oswald text-transparent bg-clip-text bg-gradient-to-b from-[#FFCA4E] to-[#191616] ">
        Scroll Us
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <img
          src="/images/story-gallery/img1.png"
          alt="Image 1"
          className="w-full h-68 object-cover"
        />

        <div className="flex flex-col items-center justify-center  text-white h-64 w-full rounded-md">
          <Instagram size={58} className="mt-5 text-[#C59D31]" />
          <p className="text-center uppercase  font-open-sans text-xs md:text-2xl text-[#CEAC5C]  ">
            @tugrahayes
          </p>
        </div>

        <img
          src="/images/story-gallery/img2.png"
          alt="Image 3"
          className="w-full h-68 object-cover"
        />
        <img
          src="/images/story-gallery/img3.png"
          alt="Image 4"
          className="w-full h-68 object-cover  "
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img
          src="/images/story-gallery/img4.png"
          alt="Image 5"
          className="col-span-1 w-full h-68 object-cover"
        />
        <img
          src="/images/story-gallery/img5.png"
          alt="Image 6"
          className="col-span-2 w-full h-68 object-cover"
        />
        <img
          src="/images/story-gallery/img6.png"
          alt="Image 7"
          className="col-span-1 w-full h-68 object-cover"
        />
      </div>
    </section>
  );
};

export default StoryGallery;
