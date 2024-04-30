import React from "react";
import Crousal from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import Sale from "../components/Sale";
import Usp from "../components/Usp";
import Foodgrid from "../components/Foodgrid";
import Calltoaction from "../components/Calltoaction";
import Ordernow from "../components/Ordernow";
function Home() {
  return (
    <div>
      <HeroSection />
      <Sale />
      <Usp />
      <Crousal />
      <Foodgrid />
      <Calltoaction />
      {/* <Ordernow /> */}
    </div>
  );
}

export default Home;
