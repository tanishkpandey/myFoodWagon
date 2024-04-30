import React, { useState } from "react";
import Slide1 from "../assets/Slide1.png";
import Slide2 from "../assets/Slide2.png";
import Slide3 from "../assets/Slide3.png";
import Slide4 from "../assets/Slide4.png";
import Slide5 from "../assets/Slide5.png";
import { IoLocationSharp } from "react-icons/io5";

function Carousel() {
  const [defaultTransform, setDefaultTransform] = useState(0);

  const goNext = () => {
    const nextTransform = defaultTransform - 300;
    if (
      Math.abs(nextTransform) >=
      document.getElementById("slider").scrollWidth / 1.5
    ) {
      setDefaultTransform(0);
    } else {
      setDefaultTransform(nextTransform);
    }
  };

  const goPrev = () => {
    let nextTransform = defaultTransform;
    if (Math.abs(nextTransform) === 0) {
      nextTransform = 0;
    } else {
      nextTransform = nextTransform + 398;
    }
    setDefaultTransform(nextTransform);
  };

  return (
    <div className="py-16">
      <div>
        <h1 className="text-4xl font-bold text-center mb-2 text-[#F17228]">
          What people are crazy about
        </h1>
        <p className="text-center w-[550px] m-auto text-[#9E9E9E]">
          Loved by all for their exceptional taste and quality. From savory
          classics to delightful treats, find your new favorites here!
        </p>
      </div>

      <div className="flex items-center justify-center w-[1200px] m-auto h-[500px] py-24 px-4 ">
        <div className="w-full relative flex items-center justify-center">
          <button
            aria-label="slide backward"
            className="absolute z-30 -left-32 ml-10 focus:outline-none focus:bg-[#F17228] focus:ring-2 focus:ring-offset-2 cursor-pointer bg-[#FFB30E] px-4 py-3 rounded-full"
            id="prev"
            onClick={goPrev}
            style={{ boxShadow: "0px 5px 8px rgba(255,218,139)" }}
          >
            <svg
              className="dark:text-white"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="w-full h-[500px] mx-auto overflow-x-hidden">
            <div
              id="slider"
              className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              style={{ transform: `translateX(${defaultTransform}px)` }}
            >
              <Card image={Slide1} />
              <Card image={Slide2} />
              <Card image={Slide3} />
              <Card image={Slide4} />
              <Card image={Slide5} />
            </div>
          </div>

          <button
            aria-label="slide forward"
            className="absolute z-30 px-4 py-3 -right-32 mr-10 bg-[#FFB30E] focus:bg-[#F17228] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            id="next"
            onClick={goNext}
            style={{ boxShadow: "0px 5px 8px rgba(255,218,139)" }}
          >
            <svg
              className="dark:text-white"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const Card = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative flex w-full min-w-[18rem] flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-lg">
      <div
        className={`relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-lg bg-blue-gray-500 bg-clip-border ${
          isHovered ? "cursor-pointer " : "filter grayscale-[20%]"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="carousel-item" />
      </div>

      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h5 className="block font-bold ">Cheese Burger</h5>
        </div>

        <div className="flex items-center justify-between">
          <h5 className="items-center text-[#FFB30E] flex gap-2">
            <IoLocationSharp /> Burger Arena
          </h5>
        </div>

        <div className="flex items-center justify-between">
          <h5 className="block font-bold ">Rs. 79</h5>
        </div>
      </div>

      <div className="px-4">
        <button
          className="block w-full select-none rounded-md bg-[#F17228] hover:bg-[#FFB30E] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white transition-all hover:shadow-none  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-4"
          type="button"
          style={{ boxShadow: "0px 3px 8px rgba(241, 114, 40, 0.5)" }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Carousel;
