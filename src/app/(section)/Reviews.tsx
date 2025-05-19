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
    <section className="py-30 bg-black">
      <h2 className="text-3xl text-[#C9AB81] font-normal text-center mb-10 font-open-sans uppercase tracking-[10px]">
        Stories from Hearts
      </h2>
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-25">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-black p-12     border border-[#CFAC6A] shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-3  space-x-2 ">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#CFAC6A]  fill-[#CFAC6A] " />
              ))}
            </div>
            <p className="text-[#C9AB81] italic mb-4 text-center text-sm font-joan ">{review.text}</p>
            <p className="text-[#C9AB81] pb-10 text-center font-joan">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
