import { FaClock, FaTag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Restaurant from "../assets/restaurant.png";
import FilterImg from "../assets/FilterImg.png";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const generateFoodData = (count) => {
  const foodData = [];
  const locations = ["Location A", "Location B", "Location C"];
  const itemNames = ["Burger", "Pizza", "Sushi", "Tacos", "Pasta"];
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  for (let i = 0; i < count; i++) {
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];
    const randomItemName =
      itemNames[Math.floor(Math.random() * itemNames.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    foodData.push({
      itemName: randomItemName,
      location: randomLocation,
      image: randomImage,
    });
  }

  return foodData;
};

function grid() {
  const foodData = generateFoodData(10);
  return (
    <div>
      <div className="border p-5 rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="relative h-12 w-72 min-w-[200px]">
              <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <option value="brazil">Popularity</option>
                <option value="bucharest">Price: Low to High</option>
                <option value="london">Rating: High to low</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Sort
              </label>
            </div>

            <div className="relative h-12 w-72 min-w-[200px]">
              <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <option value="brazil">Popularity</option>
                <option value="bucharest">Price: Low to High</option>
                <option value="london">Rating: High to low</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Category
              </label>
            </div>

            <div className="relative h-12 w-72 min-w-[200px]">
              <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <option value="brazil">Breakfast</option>
                <option value="bucharest">Lunch</option>
                <option value="london">Dinner</option>
                <option value="london">Snacks</option>
                <option value="london">Drinks</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Meal Type
              </label>
            </div>
          </div>
          {/* <div className="flex justify-between">
            <Checkbox
              id="ripple-off"
              label="Ripple Effect Off"
              ripple={false}
            />
            <Checkbox
              id="ripple-off"
              label="Ripple Effect Off"
              ripple={false}
            />
            <Checkbox
              id="ripple-off"
              label="Ripple Effect Off"
              ripple={false}
            />
            <Checkbox
              id="ripple-off"
              label="Ripple Effect Off"
              ripple={false}
            />
            <Checkbox
              id="ripple-off"
              label="Ripple Effect Off"
              ripple={false}
            />
          </div> */}
        </div>
      </div>
      <div className="card-container grid grid-cols-1 cursor-pointer gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full mx-auto my-12">
        {foodData.map((food, index) => (
          <div
            key={index}
            className="relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow "
          >
            <div className="relative flex flex-col  text-gray-700 bg-white bg-clip-border rounded-xl">
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
                <img src={Restaurant} alt="Restaurant" className="w-10 h-10" />
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
    </div>
  );
}

function Food() {
  const data = [
    {
      label: "🍟 Foodie",
      value: "Foodie",
      desc: grid(),
    },
    {
      label: "🥦 Veg",
      value: "Veg",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: " 🍗 Non-Veg",
      value: "Non-Veg",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <div className=" bg-[#FFF5E2] py-12">
      <div className="w-[1200px] mx-auto">
        <div
          className="h-[250px] bg-cover bg-center m-auto p-10 flex justify-center items-center rounded-2xl"
          style={{ backgroundImage: `url(${FilterImg})` }}
        >
          <h1 className="text-4xl text-white font-bold text-center">
            Explore a range of dishes <br /> Something for everyone!
          </h1>
        </div>

        <div className="bg-white p-8 rounded-xl mt-10">
          <Tabs value="Foodie" className="my-5">
            <TabsHeader
              className="bg-transparent w-1/2 h-200"
              indicatorProps={{
                className: "bg-[#FFBF18] shadow text-white h-200",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="text-2xl">
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Food;
