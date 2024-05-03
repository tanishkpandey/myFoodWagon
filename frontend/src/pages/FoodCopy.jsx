import { FaClock, FaTag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Restaurant from "../assets/restaurant.png";
import FilterImg from "../assets/FilterImg.png";
import { useContext, useEffect, useState } from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import toast, { Toaster } from "react-hot-toast";

function FoodCopy() {
  const [dishes, setDishes] = useState([]);
  const [sortBy, setSortBy] = useState("price-asc");
  const [mealtype, setMealType] = useState("all-types");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { addToCart } = useContext(CartContext);
  const cart = useContext(CartContext);

  const getDishes = async (page, sortBy, mealtype) => {
    try {
      const params = {
        page,
        sort: sortBy,
        ...(mealtype !== "all-types" && { mealtype }),
      };

      const response = await axios.get("http://localhost:5000/api/dishes", {
        params,
      });

      if (response.status !== 200) {
        throw new Error("Failed to fetch dishes");
      }

      const { dishes, totalPages } = response.data;
      setDishes(dishes);
      setTotalPages(totalPages);
    } catch (err) {
      console.log("An error occurred while fetching dishes.");
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getDishes(page, sortBy, mealtype);
  }, [page, sortBy, mealtype]);

  return (
    <div className=" bg-[#FFF5E2] py-12">
      <div className="max-w-[1200px] mx-auto">
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
                  <div className="flex justify-between flex-wrap">
                    <div className="relative h-12 min-w-[200px] w-full lg:w-72 md:w-72 mb-4 lg:mb-0 md:mb-0">
                      <select
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating-desc">Rating: High to Low</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Sort
                      </label>
                    </div>

                    <div className="relative h-12 w-full lg:w-72 md:w-72">
                      <select
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        value={mealtype}
                        onChange={(e) => {
                          setMealType(e.target.value);
                        }}
                      >
                        <option value="all-types">All Meals</option>
                        <option value="veg">Vegetarian</option>
                        <option value="non-veg">Non-Vegetarian</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Meal Type
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-container grid grid-cols-1 cursor-pointer gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full mx-auto my-12">
                {dishes.map((dish, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col border border-white text-gray-700 bg-white bg-clip-border rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:border-gray-200"
                  >
                    <div className="relative flex flex-col  text-gray-700 bg-white bg-clip-border rounded-xl">
                      <div className="relative h-56 mx-4 mt-4 overflow-hidden text-white bg-clip-border rounded-xl bg-white shadow-blue-gray-500/40">
                        <div className="relative">
                          <img
                            src={dish.image}
                            alt={dish.foodname}
                            className="absolute z-10"
                          />

                          <div className="bg-[#F17228] absolute z-20  rounded flex items-center px-2 py-1 top-3 left-3">
                            <span className=" font-medium  tracking-tighter flex justify-center items-center gap-2">
                              <FaTag />
                              10% Off
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="py-3 px-4 flex gap-4 justify-between items-start">
                        <div>
                          <h4 className="text-xl font-bold">{dish.foodname}</h4>
                          <h5 className="items-center opacity-80 text-sm text-[#F17228] flex gap-2 font-medium">
                            <IoLocationSharp /> {dish.restaurant}
                          </h5>
                        </div>
                        <div className="py-0.5 px-2.5 text-sm bg-green-600 text-white rounded">
                          <h4>{dish.rating}</h4>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-center"> </h2>
                      </div>
                      <div className="p-4 pt-0 flex items-center justify-between ">
                        {/* <div className="">
                          <h2 className="text-lg font-bold text-center p-2">
                            Rs {dish.price}
                          </h2>
                        </div> */}
                        <Button
                          variant="outlined"
                          className="border border-gray-300 rounded text-md py-2 text-gray-800"
                        >
                          ₹ {dish.price}
                        </Button>
                        <Button
                          className="rounded-md bg-[#F17228]"
                          onClick={() => {
                            addToCart(dish);
                            toast.success(`${dish.foodname} added to cart!`);
                          }}
                        >
                          Add to cart
                        </Button>
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
