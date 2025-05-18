"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Dish = {
  title: string;
  price: number;
  image: string;
};

const dishes: Dish[] = [
  {
    title: "Classic Ribeye Steak",
    price: 30,
    image: "/images/specialties/img2.png",
  },
  {
    title: "Lahmacun",
    price: 30,
    image: "/images/specialties/img3.png",
  },
  {
    title: "İskender Kebab",
    price: 30,
    image: "/images/specialties/img1.png",
  },
];

const Specialties = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? dishes.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === dishes.length - 1 ? 0 : prev + 1));

  const visibleDishes = [
    dishes[(index + dishes.length - 1) % dishes.length],
    dishes[index],
    dishes[(index + 1) % dishes.length],
  ];

  return (
    <section className="bg-black text-white py-16 text-center">
      <h2 className="text-2xl md:text-4xl font-light text-[#D2B48C] tracking-wide mb-12">
        OUR BEST SPECIALTIES
      </h2>

      {/* Mobile View  */}
      <div className="md:hidden mx-auto max-w-xs px-4 flex items-center justify-between">
        <button
          onClick={prev}
          className="text-[#D2B48C] hover:scale-110 transition mb-12"
        >
          <ArrowLeft size={32} />
        </button>

        <div className="text-center">
          <div className="relative w-50 h-50 mx-auto mb-4">
            <Image
              src={dishes[index].image}
              alt={dishes[index].title}
              fill
              className={`object-contain ${
                dishes[index].image === "/images/specialties/img1.png"
                  ? "pb-12"
                  : ""
              }`}
              sizes="100vw"
            />
          </div>
          <h3 className="uppercase text-sm tracking-widest text-[#D2B48C] mb-1">
            {dishes[index].title}
          </h3>
          <p className="text-[#D2B48C]">€ {dishes[index].price}</p>
        </div>

        <button
          onClick={next}
          className="text-[#D2B48C] hover:scale-110 transition mb-12"
        >
          <ArrowRight size={32} />
        </button>
      </div>

      {/* Desktop View  */}
      <div className="hidden md:flex mx-auto max-w-screen-xl px-4 items-center justify-center gap-28">
        <button
          onClick={prev}
          className="text-[#D2B48C] hover:scale-110 transition mx-4"
        >
          <ArrowLeft size={32} />
        </button>

        <div className="flex gap-32">
          {visibleDishes.map((dish, i) => (
            <div key={i} className="text-center max-w-xs">
              <div className="relative w-60 h-60 mx-auto mb-4">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  className={`object-contain ${
                    dish.image === "/images/specialties/img1.png" ? "pb-12" : ""
                  }`}
                  sizes="33vw"
                />
              </div>
              <h3 className="uppercase text-sm tracking-widest text-[#D2B48C] mb-1">
                {dish.title}
              </h3>
              <p className="text-[#D2B48C]">€ {dish.price}</p>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          className="text-[#D2B48C] hover:scale-110 transition mx-4"
        >
          <ArrowRight size={32} />
        </button>
      </div>

      <button className="mt-10 border border-[#D2B48C] px-6 py-2 text-[#D2B48C] rounded hover:bg-[#D2B48C] hover:text-black transition">
        VIEW MENU
      </button>
    </section>
  );
};

export default Specialties;
