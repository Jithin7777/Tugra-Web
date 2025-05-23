"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    src: "/images/menu-showcase/cocktails.png",
    title: "Cocktails",
    border: "border-gold",
    shape: "md:rounded-tr-[397px] rounded-tr-[200px]",
  },
  {
    src: "/images/menu-showcase/chops.png",
    title: "Chops",
    shape:
      "md:rounded-tl-[210px] md:rounded-tr-[210px] rounded-tl-[100px] rounded-tr-[100px]",
  },
  {
    src: "/images/menu-showcase/grills.png",
    title: "Grills",
    border: "border-blue-500",
    shape: "md:rounded-tl-[397px] rounded-tl-[200px]",
  },
  {
    src: "/images/menu-showcase/cocktails.png",
    title: "Cocktails",
    border: "border-gold",
    shape: "md:rounded-tr-[397px] rounded-tr-[200px]",
  },
];

const MenuShowcaseCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    breakpoints: {
      "(min-width: 768px)": { align: "start" },
    },
  });
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setHasMounted(true);
    if (emblaApi) emblaApi.scrollTo(0);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!hasMounted) return null;

  return (
    <div className="w-full bg-black px-4 py-8 md:py-16">
      <h2 className="font-open-sans mb-8 text-center text-lg font-normal tracking-[5.51px] text-[#C9AB81] uppercase md:mb-12">
        What do we <br />
        have for you
      </h2>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* /* Left Arrow  */}
        <button
          className="absolute top-[40%] -left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0E171A] text-white hover:bg-black md:-left-12 md:h-10 md:w-10"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-4 w-4 text-[#C9AB81] md:h-5 md:w-5" />
        </button>

        {/* Carousel Container  */}
        <div className="embla mx-8 overflow-hidden md:mx-12" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_85%] px-2 sm:flex-[0_0_60%] md:flex-[0_0_33.33%] md:px-4"
              >
                <div className="flex flex-col items-center gap-5 md:gap-6">
                  <div
                    className={`bg-gradient-to-r from-[#AE8B38] to-black p-1 md:p-[9.95px] ${slide.shape}`}
                  >
                    <div
                      className={`h-[250px] w-full overflow-hidden bg-black shadow-lg md:h-[380px] ${slide.shape}`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.title}
                        width={500}
                        height={600}
                        className="h-full w-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  <p className="font-open-sans text-xs font-normal tracking-[10px] text-[#C9AB81] uppercase md:text-sm">
                    {slide.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow  */}
        <button
          className="absolute top-[40%] -right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0E171A] text-white hover:bg-black md:-right-12 md:h-10 md:w-10"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next slide"
        >
          <ArrowRight className="h-4 w-4 text-[#C9AB81] md:h-5 md:w-5" />
        </button>

        {/* Diamond Indicators */}
        <div className="mt-6 flex justify-center gap-3 md:mt-8 md:gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`relative h-2 w-2 rotate-45 overflow-hidden transition-all duration-300 md:h-2 md:w-2 ${
                index === selectedIndex
                  ? "scale-125 border border-[#9C7C57]"
                  : "border border-[#9C7C576E] hover:border-[#9C7C57]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index === selectedIndex
                    ? "from-[#9C7C57] via-[#8A6D4D] to-[#9C7C57]"
                    : "from-[#9C7C576E] via-[#9C7C573D] to-[#9C7C576E]"
                }`}
              />
              <div className="${ index === selectedIndex ? 'from-[#B08D5F] to-transparent' : 'from-[#9C7C576E] to-transparent' } absolute inset-0 bg-gradient-to-tl opacity-60" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuShowcaseCarousel;
