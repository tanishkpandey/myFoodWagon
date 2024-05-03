import React, { useState } from "react";
import Slide1 from "../assets/Slide1.png";
import Slide2 from "../assets/Slide2.png";
import Slide3 from "../assets/Slide3.png";
import Slide4 from "../assets/Slide4.png";
import Slide5 from "../assets/Slide5.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

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
        <p className="text-center max-w-[550px] m-auto text-[#9E9E9E]">
          Loved by all for their exceptional taste and quality. From savory
          classics to delightful treats, find your new favorites here!
        </p>
      </div>

      <div className="flex items-center justify-center max-w-[1200px] m-auto h-[500px] py-24 px-4 ">
        <div className="w-full relative flex items-center justify-center">
          <div className="w-full h-[500px] mx-auto overflow-x-hidden">
            <div
              id="slider"
              className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              style={{ transform: `translateX(${defaultTransform}px)` }}
            >
              <Card image={Slide5} />
              <Card image={Slide3} />
              <Card image={Slide4} />
              <Card image={Slide1} />
              <Card image={Slide2} />
            </div>
          </div>

          <button
            aria-label="slide forward"
            className=" h-12 w-15 absolute z-30 px-4 py-3 -right-2 bg-[#FFB30E] focus:bg-[#F17228] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-white text-xl"
            id="next"
            onClick={goNext}
            style={{ boxShadow: "0px 5px 8px rgba(255,218,139)" }}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

const Card = ({ image }) => {
  return (
    <div className="relative flex w-full min-w-[18rem] flex-col rounded-lg bg-white border bg-clip-border text-gray-700 shadow hover:shadow-md hover:cursor-pointer">
      <div className="relative mx-4 mt-4 overflow-hidden text-white rounded-lg">
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
    </div>
  );
};

export default Carousel;
