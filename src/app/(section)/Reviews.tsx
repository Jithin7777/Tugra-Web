import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      text: "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
      name: "-Gerrin Tom-",
    },
    {
      text: "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
      name: "-Gerrin Tom-",
    },
    {
      text: "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
      name: "-Gerrin Tom-",
    },
    {
      text: "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
      name: "-Gerrin Tom-",
    },
  ];

  return (
    <section className="bg-black py-30">
      <h2 className="font-open-sans mb-10 text-center text-3xl font-normal tracking-[10px] text-[#C9AB81] uppercase">
        Stories from Hearts
      </h2>
      <div className="max-w-8xl mx-auto mt-25 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-[#CFAC6A] bg-black p-12 shadow transition hover:shadow-lg"
          >
            <div className="mb-3 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-[#CFAC6A] text-[#CFAC6A]"
                />
              ))}
            </div>
            <p className="font-joan mb-4 text-center text-sm text-[#C9AB81] italic">
              {review.text}
            </p>
            <p className="font-joan pb-10 text-center text-[#C9AB81]">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
