import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John D.",
    text: "ACT Ambulette provided exceptional service. Safe, reliable, and very respectful staff.",
    rating: 5,
  },
  {
    name: "Martha S.",
    text: "They really care for their patients. Clean vehicles and always on time!",
    rating: 4,
  },
  {
    name: "Ravi P.",
    text: "The stair assist service was handled with such professionalism and care.",
    rating: 5,
  },
  {
    name: "Linda W.",
    text: "From start to finish, ACT made our experience stress-free. Highly recommended!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-white py-20 px-4 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#132870] mb-16">
        Health Express Ambulette Service Reviews
        </h2>
        <Slider {...settings}>
          {reviews.map((review, i) => (
            <div key={i}>
              <div className="bg-[#f9f9f9] border border-gray-200 rounded-3xl p-10 shadow-lg transition duration-300 hover:shadow-2xl">
                <p className="text-gray-700 text-xl leading-relaxed italic mb-6">
                  “{review.text}”
                </p>
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-[#132870] font-semibold text-lg">
                    — {review.name}
                  </h4>
                  <div className="flex text-yellow-400 mt-2">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <FaStar key={idx} className="text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsSection;
