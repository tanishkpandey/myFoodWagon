import React, { useState } from "react";
import Sale1 from "../assets/Sale1.png";
import Sale2 from "../assets/Sale2.png";
import Sale3 from "../assets/Sale3.png";
import Sale4 from "../assets/Sale4.png";

// Card component to handle hover effect
const Card = ({ image, title, remaining }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-xl w-80 ${
        hovered ? "-translate-y-1" : ""
      } transition-transform duration-300`}
      
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-56 mx-4 mt-6 mb-3 overflow-hidden cursor-pointer text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <div className="relative">
          <img src={image} alt="card-image" className="absolute z-10" />
          <div className="bg-[#Ffb30e] absolute z-20 bottom-[-14.75rem] rounded-tr-2xl flex items-center gap-2 p-3">
            <span className="text-5xl font-medium italic tracking-tighter">
              15
            </span>
            <div>
              <div className="-mb-1 italic">%</div>
              <span>Off</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 px-6">
        <h4 className="text-lg">{title}</h4>
      </div>
      <div className="p-6 pt-0">
        <button className="px-[24px] py-[3px] bg-[#fce3d4] text-[#F17228] rounded-md flex gap-2 font-bold justify-center items-center">
          {remaining}
        </button>
      </div>
    </div>
  );
};

function Sale() {
  return (
    <div>
      <div className="card-container w-[1200px] m-auto flex my-12">
        <Card image={Sale1} title="Fresh Salad" remaining="6 Days Remaining" />
        <Card image={Sale2} title="Tomato Pasta" remaining="6 Days Remaining" />
        <Card image={Sale3} title="Fresh Salad" remaining="5 Days Remaining" />
        <Card image={Sale4} title="Dal Makhani" remaining="8 Days Remaining" />
      </div>
    </div>
  );
}

export default Sale;
