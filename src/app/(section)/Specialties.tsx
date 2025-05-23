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
    <section className="bg-black py-16 text-center text-white">
      <h2 className="mb-12 text-2xl font-light tracking-wide text-[#D2B48C] md:text-4xl">
        OUR BEST SPECIALTIES
      </h2>

      {/* Mobile View  */}
      <div className="mx-auto flex max-w-xs items-center justify-between px-4 md:hidden">
        <button
          onClick={prev}
          className="mb-12 text-[#D2B48C] transition hover:scale-110"
        >
          <ArrowLeft size={32} />
        </button>

        <div className="text-center">
          <div className="relative mx-auto mb-4 h-50 w-50">
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
          <h3 className="mb-1 text-sm tracking-widest text-[#D2B48C] uppercase">
            {dishes[index].title}
          </h3>
          <p className="text-[#D2B48C]">€ {dishes[index].price}</p>
        </div>

        <button
          onClick={next}
          className="mb-12 text-[#D2B48C] transition hover:scale-110"
        >
          <ArrowRight size={32} />
        </button>
      </div>

      {/* Desktop View  */}
      <div className="mx-auto hidden max-w-screen-xl items-center justify-center gap-28 px-4 md:flex">
        <button
          onClick={prev}
          className="mx-4 text-[#D2B48C] transition hover:scale-110"
        >
          <ArrowLeft size={32} />
        </button>

        <div className="flex gap-32">
          {visibleDishes.map((dish, i) => (
            <div key={i} className="max-w-xs text-center">
              <div className="relative mx-auto mb-4 h-60 w-60">
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
              <h3 className="mb-1 text-sm tracking-widest text-[#D2B48C] uppercase">
                {dish.title}
              </h3>
              <p className="text-[#D2B48C]">€ {dish.price}</p>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          className="mx-4 text-[#D2B48C] transition hover:scale-110"
        >
          <ArrowRight size={32} />
        </button>
      </div>

      <button className="mt-10 rounded border border-[#D2B48C] px-6 py-2 text-[#D2B48C] transition hover:bg-[#D2B48C] hover:text-black">
        VIEW MENU
      </button>
    </section>
  );
};

export default Specialties;
