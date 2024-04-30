import React from "react";
import foodData from "../assets/cards";
import { FaClock, FaTag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Restaurant from "../assets/restaurant.png";
import { NavLink } from "react-router-dom";

function Foodgrid() {
  return (
    <div className="p-12">
      <div className="w-[1200px] m-auto">
        <div>
          <h1 className="text-4xl font-bold text-center mb-3">
            Browse food that you love
          </h1>
        </div>

        <div className="card-container grid grid-cols-1 cursor-pointer gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full mx-auto my-12">
          {foodData.map((food, index) => (
            <div
              key={index}
              className="relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="relative flex flex-col  text-gray-700 bg-white bg-clip-border rounded-xl w-80">
                <div className="relative h-60 mx-4 mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <div className="relative">
                    <img
                      src={food.image}
                      alt="card-image"
                      className="absolute z-10"
                    />
                    <div className="bg-[#FFB30E] absolute z-20  rounded flex items-center px-2 py-1 top-3 left-28">
                      <span className=" font-medium  tracking-tighter flex justify-center items-center gap-2">
                        <FaClock />
                        Fast
                      </span>
                    </div>
                    <div className="bg-[#F17228] absolute z-20  rounded flex items-center px-2 py-1 top-3 left-3">
                      <span className=" font-medium  tracking-tighter flex justify-center items-center gap-2">
                        <FaTag />
                        10% Off
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 px-6 flex gap-4 items-center">
                  <img
                    src={Restaurant}
                    alt="Restaurant"
                    className="w-10 h-10"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{food.itemName}</h4>
                    <h5 className="items-center text-[#F17228] flex gap-2 font-medium">
                      <IoLocationSharp /> {food.location}
                    </h5>
                  </div>
                </div>
                <div className="p-6 pt-0 ">
                  <button className="px-[18px] py-[3px] bg-[#78b93c2d] text-[#79B93C] rounded-md flex gap-2 font-bold justify-center items-center mt-3">
                    Restaurant Opened
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <NavLink to="/food">
            <button
              className="block  select-none rounded-md bg-[#F17228] hover:bg-[#FFB30E] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white transition-all hover:shadow-none  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-4"
              type="button"
              style={{ boxShadow: "0px 3px 8px rgba(241, 114, 40, 0.5)" }}
            >
              Find Food
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Foodgrid;
