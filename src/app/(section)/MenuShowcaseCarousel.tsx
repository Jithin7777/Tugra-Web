'use client'

import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const slides = [
  {
    src: '/images/menu-showcase/cocktails.png',
    title: 'Cocktails',
    border: 'border-gold',
    shape: 'md:rounded-tr-[397px] rounded-tr-[200px]',
  },
  {
    src: '/images/menu-showcase/chops.png',
    title: 'Chops',
    shape: 'md:rounded-tl-[210px] md:rounded-tr-[210px] rounded-tl-[100px] rounded-tr-[100px]',
  },
  {
    src: '/images/menu-showcase/grills.png',
    title: 'Grills',
    border: 'border-blue-500',
    shape: 'md:rounded-tl-[397px] rounded-tl-[200px]',
  },
  {
    src: '/images/menu-showcase/cocktails.png',
    title: 'Cocktails',
    border: 'border-gold',
    shape: 'md:rounded-tr-[397px] rounded-tr-[200px]',
  },
]

const MenuShowcaseCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'center',
    breakpoints: {
      '(min-width: 768px)': { align: 'start' }
    }
  })
  const [hasMounted, setHasMounted] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    setHasMounted(true)
    if (emblaApi) emblaApi.scrollTo(0)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  if (!hasMounted) return null

  return (
    <div className="bg-[#0B0F11] py-8 md:py-16 px-4">
      <h2 className="text-center text-lg tracking-widest text-white uppercase mb-8 md:mb-12 font-light">
        What do we have for you
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Left Arrow - Visible on all screens */}
        <button
          className="absolute top-[40%] -left-2 md:-left-12 -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/80 hover:bg-black text-white z-10"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Carousel Container with adjusted margins */}
        <div className="embla overflow-hidden mx-8 md:mx-12" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_33.33%] px-2 md:px-4"
              >
                <div className="flex flex-col items-center gap-5 md:gap-6">
                  <div className={`p-1 md:p-[9.95px] bg-gradient-to-r from-[#AE8B38] to-black ${slide.shape}`}>
                    <div className={`w-full h-[250px] md:h-[380px] overflow-hidden bg-black shadow-lg ${slide.shape}`}>
                      <Image
                        src={slide.src}
                        alt={slide.title}
                        width={500}
                        height={600}
                        className="object-cover w-full h-full"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  <p className="text-gold tracking-widest text-xs md:text-sm uppercase text-white">
                    {slide.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow - Visible on all screens */}
        <button
          className="absolute top-[40%] -right-2 md:-right-12 -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/80 hover:bg-black text-white z-10"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Diamond Indicators */}
        <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 md:w-2 md:h-2 rotate-45 transition-all duration-300 relative overflow-hidden ${
                index === selectedIndex 
                  ? 'scale-125 border border-[#9C7C57]' 
                  : 'border border-[#9C7C576E] hover:border-[#9C7C57]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                index === selectedIndex
                  ? 'from-[#9C7C57] via-[#8A6D4D] to-[#9C7C57]'
                  : 'from-[#9C7C576E] via-[#9C7C573D] to-[#9C7C576E]'
              }`} />
              <div className="absolute inset-0 bg-gradient-to-tl opacity-60 ${
                index === selectedIndex
                  ? 'from-[#B08D5F] to-transparent'
                  : 'from-[#9C7C576E] to-transparent'
              }" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuShowcaseCarousel