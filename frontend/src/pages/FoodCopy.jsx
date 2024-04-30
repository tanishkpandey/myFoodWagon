import { FaClock, FaTag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Restaurant from "../assets/restaurant.png";
import FilterImg from "../assets/FilterImg.png";
import { useEffect, useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

// Function to generate random food

function FoodCopy() {
  const [dishes, setDishes] = useState([]);
  const [sortBy, setSortBy] = useState("price-asc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getDishes = async (page, sortBy) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/dishes?page=${page}&sort=${sortBy}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch dishes");
      }

      const { dishes, totalPages } = await response.json();
      setDishes(dishes);
      setTotalPages(totalPages);
      console.log(totalPages);
    } catch (err) {
      console.error("Error fetching dishes:", err);
    }
  };

  const sortDishes = (data) => {
    let sortedData;

    switch (sortBy) {
      case "price-asc":
        sortedData = [...data].sort((a, b) => a.price - b.price); // Low to high
        break;
      case "price-desc":
        sortedData = [...data].sort((a, b) => b.price - a.price); // High to low
        break;
      case "rating-desc":
        sortedData = [...data].sort((a, b) => b.rating - a.rating); // High to low
        break;
      case "asc":
        sortedData = [...data].sort((a, b) =>
          a.foodname.localeCompare(b.foodname)
        );
        break;
      case "desc":
        sortedData = [...data].sort((a, b) =>
          b.foodname.localeCompare(a.foodname)
        );
        break;
      default:
        sortedData = [...data].sort((a, b) =>
          a.foodname.localeCompare(b.foodname)
        );
        break;
    }
    setDishes(sortedData);
  };

  const nextPage = () => {
    setPage(page + 1);

    console.log("Next pe click");
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log("Prev pe click");
    }
  };

  useEffect(() => {
    sortDishes(dishes);
  }, [sortBy]);

  useEffect(() => {
    getDishes(page);
  }, [page]);

  console.log(dishes, page, totalPages);

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

        <div className="bg-white p-8 rounded-xl mt-10 border border-gray-300">
          
          <div>
            <div>
              <div className="border border-gray-300 p-5 rounded-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="relative h-12 w-72 min-w-[200px]">
                      <select
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="asc">Popularity</option>
                        <option value="desc">Trending</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating-desc">Rating: High to Low</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Sort
                      </label>
                    </div>

                    {/* <div className="relative h-12 w-72 min-w-[200px]">
                      <select
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="price-asc">North Indian Cuisine</option>
                        <option value="price-desc">South Indian Cuisine</option>
                        <option value="rating-desc">
                          Western Indian Cuisine
                        </option>
                        <option value="desc">Eastern Indian Cuisine</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Category
                      </label>
                    </div> */}

                    {/* <div className="relative h-12 w-72 min-w-[200px]">
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
                    </div> */}

                  </div>
                </div>
              </div>

              <div className="card-container grid grid-cols-1 cursor-pointer gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full mx-auto my-12">
                {dishes.map((dish, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md "
                  >
                    <div className="relative flex flex-col  text-gray-700 bg-white bg-clip-border rounded-xl">
                      <div className="relative h-48 mx-4 mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-500 shadow-blue-gray-500/40">
                        <div className="relative">
                          <img
                            src={dish.image}
                            alt={dish.foodname}
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
                        <img
                          src={Restaurant}
                          alt="Restaurant"
                          className="w-10 h-10"
                        />
                        <div>
                          <h4 className="text-lg font-bold">{dish.foodname}</h4>
                          <h5 className="items-center text-[#F17228] flex gap-2 font-medium">
                            <IoLocationSharp /> {dish.restaurant}
                          </h5>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-center">
                          {" "}
                          {dish.mealtype} | {dish.calories} | {dish.rating}
                        </h2>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-center">
                          Rs {dish.price}
                        </h2>
                      </div>
                      <div className="p-6 pt-0 ">
                        <button
                          className="block w-full select-none rounded-md bg-[#F17228] hover:bg-[#FFB30E] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white transition-all hover:shadow-none  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-4"
                          type="button"
                          style={{
                            boxShadow: "0px 3px 8px rgba(241, 114, 40, 0.5)",
                          }}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center mx-auto gap-8">
                <IconButton size="sm" onClick={prevPage} disabled={page === 1}>
                  <IoArrowBack className="h-4 w-4" />
                </IconButton>
                <Typography color="gray" className="font-normal">
                  Page {page} of {totalPages}
                </Typography>
                <IconButton
                  size="sm"
                  onClick={nextPage}
                  disabled={page === totalPages}
                >
                  <IoArrowForward className="h-4 w-4" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCopy;
