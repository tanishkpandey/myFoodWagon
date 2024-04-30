import React from "react";
import HeaderImg from "../assets/Header.png";
import { RiEBike2Fill } from "react-icons/ri";
import { IoSearch, IoBagHandle, IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
function HeroSection() {
  return (
    <div
      className="h-[500px] bg-cover bg-center m-auto p-10 flex justify-start items-center"
      style={{ backgroundImage: `url(${HeaderImg})` }}
    >
      <div className="w-[1200px] m-auto">
        <div className="mb-4">
          <h1 className="text-5xl font-bold text-[#F17228] mb-4">
            Satisfy your Cravings!!
          </h1>
          <p className="text-lg text-gray-700">
            Welcome to FoodWagon, <br />
            Discover tasty meals nearby, just for you.
          </p>
        </div>

        <div className="w-[600px] p-[24px] bg-white rounded-lg shadow-md">
          <div className="flex justify-start flex-col">
            <div className="flex gap-4 ">
              <button className="px-[24px] py-[10px] bg-[#fef1e9] text-[#F17228] rounded-md flex gap-2 font-bold justify-center items-center">
                <RiEBike2Fill />
                Delivery
              </button>
              <button className="px-[24px] py-[10px] bg-[#fef1e9] text-[#F17228] rounded-md flex gap-2 font-bold justify-center items-center">
                <IoBagHandle />
                Pick Up
              </button>
            </div>

            <hr className="my-4 opacity-70"></hr>

            <div>
              <div className="flex items-center mb-4 gap-4">
                <div className="relative rounded-md shadow-sm w-[70%]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-[#F17228] sm:text-sm">
                      <IoLocationSharp />
                    </span>
                  </div>

                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="w-full block rounded-md py-2 pl-7 pr-3 bg-slate-100 placeholder-[#F17228] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3"
                    placeholder="Enter your location"
                  />
                </div>

                <NavLink to="/food">
                  <button className="w-[100%] px-[24px] py-[10px] flex gap-2 bg-[#F17228] justify-center items-center font-bold text-white rounded-md shadow-md hover:bg-[#FFB30E] transition duration-300">
                    <IoSearch />
                    Find Food
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
