import React from "react";
import { FaAngleRight } from "react-icons/fa";
function Ordernow() {
  return (
    <div className="bg-[#FEFAF1] py-12 text-center flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl font-bold text-center mb-3 w-[400px] m-auto">
        Are you ready to order with the best deals?
      </h1>

      <button
        className="rounded-md bg-[#F17228] hover:bg-[#FFB30E] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white transition-all hover:shadow-none  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex gap-2"
        type="button"
        style={{ boxShadow: "0px 3px 8px rgba(241, 114, 40, 0.5)" }}
      >
        Proceed to order <FaAngleRight />
      </button>
    </div>
  );
}

export default Ordernow;
