import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from '../../pages/About';

const reviews = [
    {
        name: "Emily Carter",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod turpis non metus placerat.",
        image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        name: "Michael Ross",
        review: "Phasellus ullamcorper, elit a semper varius, nisi nisl tincidunt ante, eget posuere justo leo non ex.",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: "Ava Williams",
        review: "Vivamus vel augue at ipsum dapibus malesuada non nec mi. Morbi malesuada magna at neque posuere.",
        image: "https://randomuser.me/api/portraits/women/34.jpg"
    },
    {
        name: "Chris Martin",
        review: "Curabitur finibus orci et odio varius, eget fermentum nunc pulvinar. Suspendisse ut justo nulla.",
        image: "https://randomuser.me/api/portraits/men/29.jpg"
    }
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const AboutReview = () => {
    return (
        <section className="w-full bg-[#fefefe] py-20 px-4 md:px-20">
            <div data-aos="fade-up" className="max-w-6xl mx-auto">
                <p className="text-[#3E52AD] text-[1.5vh] md:text-[0.9vw] uppercase tracking-wider font-semibold mb-2">
                    Service Recipient Says
                </p>


                <Slider {...sliderSettings}>
                    {reviews.map((client, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white p-6 rounded-3xl shadow-xl h-full flex flex-col justify-between">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#3E52AD]"
                                    />
                                    <div>
                                        <h4 className="text-[2vh] md:text-[1.2vw] font-bold text-[#0D1D5B]">{client.name}</h4>
                                        <span className="text-[1.5vh] md:text-[0.9vw] text-gray-500">Verified Client</span>
                                    </div>
                                </div>
                                <p className="text-[1.7vh] md:text-[1vw] text-gray-700 leading-relaxed">
                                    {client.review}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default AboutReview;
