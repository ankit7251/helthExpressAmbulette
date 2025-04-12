import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';

const reviews = [
  {
    name: "Sarah Mitchell",
    review: "Health Express Ambulette Inc.  was a blessing for my elderly mother. The drivers were kind, patient, and arrived right on time. Highly recommend their service!",
    location: "Staten Island, NY",
    stars: 5
  },
  {
    name: "James Carter",
    review: "The team helped me get to my doctor’s appointment without any stress. The vehicle was clean, and the staff was very professional.",
    location: "Brooklyn, NY",
    stars: 4
  },
  {
    name: "Priya Desai",
    review: "Great service for non-emergency transport. Easy to schedule and the staff made sure I was comfortable the entire ride.",
    location: "Queens, NY",
    stars: 5
  },
  {
    name: "Robert Johnson",
    review: "Good service overall, but the van came 10 minutes late. Still, the ride was smooth and the driver was courteous.",
    location: "Bronx, NY",
    stars: 3
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const HomeServiceReviews = () => {
  return (
    <div className="bg-[#edf2fa] py-16 px-4 md:px-20">
      <h2 className="text-center text-[#132870] font-bold text-[2.5vh] md:text-[2vw] mb-10">
        What Our Clients Say
      </h2>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-4">
            <div className="backdrop-blur-md bg-white/70 border border-[#e0e0e0] shadow-xl rounded-3xl p-8 md:p-12 max-w-3xl mx-auto relative hover:scale-[1.02] transition duration-500">
              <FaQuoteLeft className="absolute top-4 left-4 text-[#2B5A8D] text-3xl opacity-20" />

              <p className="text-[#132870] text-[1.7vh] md:text-[1.1vw] leading-relaxed mb-6">
                {review.review}
              </p>

              <div className="flex items-center justify-between flex-wrap">
                <div>
                  <h3 className="font-semibold text-[#132870] text-[2vh] md:text-[1.2vw]">
                    {review.name}
                  </h3>
                  <p className="text-[#2B5A8D] text-[1.5vh] md:text-[1vw]">
                    {review.location}
                  </p>
                </div>

                <div className="flex space-x-1 mt-3 md:mt-0">
                  {[...Array(review.stars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-[2vh] md:text-[1.2vw]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeServiceReviews;







