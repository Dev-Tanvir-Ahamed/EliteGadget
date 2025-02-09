"use client";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const slides = [
  {
    id: 1,
    image: "/images/slider/slider-1.jpg",
    heading: "SAVE $120 WHEN YOU BUY",
    title: "2020 Virtual Reality",
    title2: "Fulldive VR.",
    description:
      "Explore and immerse in exciting 360 content with Fulldive’s all-in-one virtual reality platform.",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: "/images/slider/slider-2.jpg",
    heading: "4K HDR Smart TV 43",
    title: "Sony Bravia.",
    description:
      "Experience the ultimate clarity and immersive visuals with Sony's premium Smart TVs.",
    buttonText: "Shop Now",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
};

const HeroSection: React.FC = () => {
  return (
    <Slider {...settings} className="overflow-hidden">
      {slides.map((slide) => (
        <div key={slide.id} className="relative w-full h-[750px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          {/* Dark Overlay for Small Screens */}
          <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-0 transition-opacity" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-end px-6 md:px-10 text-white">
            <div className="max-w-md text-left">
              <p className="text-yellow-400 text-lg font-semibold">
                {slide.heading}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2">
                {slide.title}
              </h2>
              {slide.title2 && (
                <h3 className="text-2xl font-semibold mt-1">{slide.title2}</h3>
              )}
              <p className="text-base mt-4">{slide.description}</p>
              <Button className="mt-6 px-10 py-5 rounded-none bg-red-600 text-white hover:bg-[#333] transition-all text-lg">
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSection;
