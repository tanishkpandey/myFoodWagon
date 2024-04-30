import React from "react";
import Download from "../assets/download.png";
import App from "../assets/app.png";
function Calltoaction() {
  return (
    <div className=" py-12">
      <div className="w-[1200px] m-auto bg-gradient-to-b from-yellow-300 to-[#FFB607] rounded-3xl">
        <div className=" h-[500px] flex">
          <img src={App} alt="App" />
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold ml-10 mb-5 w-[430px] text-[#F17228]">
              Install the app
            </h1>
            <p className="w-[330px] text-[#222A2A] ml-10">
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </p>
            <img src={Download} alt="Appstore and Applestore" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calltoaction;
