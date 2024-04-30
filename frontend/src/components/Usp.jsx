import React from "react";
import Discount from "../assets/Discount.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";

function Usp() {
  return (
    <div
      style={{
        background: "rgb(255,244,222)",
        background:
          "linear-gradient(184deg, rgba(255,244,222,1) 0%, rgba(255,253,250,1) 100%)",
      }}
    >
      <div className="w-[1200px] mx-auto px-4 py-16 text-[#F17228]">
        <h1 className="text-4xl font-bold text-center mb-3">
          What makes us the best?
        </h1>
        <p className="text-center mb-16 w-[600px] m-auto text-[#9E9E9E]">
          Explore why we're the top choice: daily discounts, live tracing, and
          quick delivery set us apart for your ultimate convenience and
          satisfaction.
        </p>

        <div
          className="flex justify-around items-center gap-8 p-[24px] bg-white rounded-2xl shadow-md  w-[1000px] m-auto"
          style={{ boxShadow: "1px 10px 12px rgba(255,218,139,0.6)" }}
        >
          <div className="text-center">
            <img
              src={Discount}
              alt="Daily Discounts"
              className="mx-auto w-24 mb-7"
            />
            <h2 className="text-lg font-semibold mb-2">Daily Discounts</h2>
            <p className="text-[#9E9E9E] text-sm w-[200px]">
              Enjoy daily savings on your favorite meals.
            </p>
          </div>

          <div className="w-[1px] h-28 bg-[#f172284d]"></div>

          <div className="text-center">
            <img src={Icon2} alt="Live Tracing" className="mx-auto w-24 mb-7" />
            <h2 className="text-lg font-semibold mb-2">Live Tracing</h2>
            <p className="text-[#9E9E9E] text-sm w-[200px]">
              Track your order's journey in real-time.
            </p>
          </div>

          <div className="w-[1px] h-32 bg-[#f172284d]"></div>

          <div className="text-center">
            <img
              src={Icon3}
              alt="Quick Delivery"
              className="mx-auto w-24 mb-7"
            />
            <h2 className="text-lg font-semibold mb-2">Quick Delivery</h2>
            <p className="text-[#9E9E9E] text-sm w-[160px]">
              Get your food super fast, hot and fresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usp;
