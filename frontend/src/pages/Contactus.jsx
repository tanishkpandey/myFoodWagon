import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Contactus = () => {
  return (
    <div className="bg-[#FFF5E2] py-[5rem] px-4 md:px-0 flex justify-center items-center   overflow-hidden">
      <div className="form max-w-screen-lg mx-auto bg-white rounded-xl shadow-lg h-[500px] grid md:grid-cols-2">
        <div className="contact-form bg-[#FFB607] rounded-tl-lg rounded-bl-lg  relative">
          <div className="circle one absolute rounded-full bg-gradient-to-br from-transparent to-[#F17228] w-10 h-10 top-16 right-14"></div>
          <div className="circle two absolute rounded-full bg-gradient-to-br from-transparent to-[#F17228] w-16 h-16 top-0 right-0"></div>

          <form className="p-6 z-10 relative flex flex-col justify-between">
            <h2 className="title text-white font-semibold text-4xl mb-12">
              Contact Us
            </h2>

            <div>
              <div className="input-container mb-4">
                <input
                  type="text"
                  className="input w-full bg-transparent border-2 border-white py-2 px-4 text-white font-semibold text-sm rounded focus:outline-none focus:border-[#F17228] placeholder-white"
                  placeholder="Name"
                />
              </div>

              <div className="input-container mb-4">
                <input
                  type="text"
                  className="input w-full bg-transparent border-2 border-white py-2 px-4 text-white font-semibold text-sm rounded focus:outline-none focus:border-[#F17228] placeholder-white"
                  placeholder="Email"
                />
              </div>
              <div className="input-container mb-4">
                <input
                  type="text"
                  className="input w-full bg-transparent border-2 border-white py-2 px-4 text-white font-semibold text-sm rounded focus:outline-none focus:border-[#F17228] placeholder-white"
                  placeholder="Phone"
                />
              </div>

              <div className="input-container textarea">
                <textarea
                  className="input w-full bg-transparent border-2 border-white py-2 px-4 text-white font-semibold text-sm rounded focus:outline-none focus:border-[#F17228] transition-all placeholder-white mb-4"
                  placeholder="Your Message here "
                ></textarea>

                <span className="absolute w-1/2 h-1 bg-[#FFB607] top-4 transform left-10 transition-all"></span>
              </div>

              <button
                className="block  select-none rounded-md bg-[#F17228] hover:bg-[#f17228be] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white transition-all hover:shadow-none  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-4"
                type="button"
                style={{ boxShadow: "0px 3px 8px rgba(241, 114, 40, 0.5)" }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="contact-info p-6 relative">
          <h2 className="title text-[#F17228] font-semibold text-4xl mb-12">
            Contact Information
          </h2>
          <p className="text text-base text-gray-700">
            Feel free to get in touch with us. We are always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <div className="information flex items-center text-gray-600 mt-12 gap-2">
            <FaLocationDot className="text-[#F17228]" />
            <p>Jharsa Village, Gurugram, Haryana, India</p>
          </div>
          <div className="information flex items-center text-gray-600 gap-2 mt-4">
            <IoCall className="text-[#F17228]" />
            <p>+123 456 7890</p>
          </div>
          <div className="information flex items-center text-gray-600 gap-2 mt-4">
            <MdEmail className="text-[#F17228]" />
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
