import React from "react";
import Error from "../assets/Error.png";
function Error404() {
  return (
    <div className=" bg-[#FADF99]">
      <div className="w-[1200px] mx-auto">
        <img src={Error} alt="404 Not Found" className="mx-auto w-[600px]" />
        <p></p>
      </div>
    </div>
  );
}

export default Error404;
