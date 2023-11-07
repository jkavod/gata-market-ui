import React, { useState } from "react";
import { CarouselImage } from "../../assets";

export default function Ads() {
 const [activeIndex, setActiveIndex] = useState(0);
 const images = [CarouselImage, CarouselImage, CarouselImage];

 const goToSlide = (index) => {
  setActiveIndex(index);
};

const goToPreviousSlide = () => {
  setActiveIndex(
    (prevIndex) => (prevIndex - 1 + images.length) % images.length
  );
};

const goToNextSlide = () => {
  setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
};
  return (
    <>
      <section
        id="default-carousel"
        className="relative w-full mb-10"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((src, index) => (
            <div
              key={src}
              className={`duration-700 ease-in-out ${
                index === activeIndex ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <img
                src={src}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-blue-600" : "bg-white"
              }`}
              aria-current={index === activeIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPreviousSlide}
        >
          {/* ... Previous button content */}
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          {/* ... Next button content */}
        </button>
      </section>
    </>
  );
}
