import React from "react";
import { FaAngleRight } from "react-icons/fa";
function Ordernow() {
  return (
    <div className="bg-[#FEFAF1] py-12 border border-[#f1722833] ">
      <div className="max-w-[1200px] flex justify-between items-center mx-auto">

        <h1 className="text-3xl font-bold text-[#F17228] ">
          Are you ready to order with the best Food 😋?
        </h1>

        <button
          className="rounded-md bg-[#F17228] hover:bg-[#FFB30E] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white transition-all hover:shadow-none  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex gap-2"
          type="button"
          style={{ boxShadow: "0px 3px 8px rgba(241, 114, 40, 0.5)" }}
        >
          Get Started <FaAngleRight className="text-xl" />
        </button>

      </div>
    </div>
  );
}

export default Ordernow;
