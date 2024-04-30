import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Sale1 from "../assets/Sale1.png";
import Sale2 from "../assets/Sale2.png";
import Sale3 from "../assets/Sale3.png";
import Sale4 from "../assets/Sale4.png";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const CartTable = ({ cartItems, removeFromCart }) => {
  // Dummy data for demonstration
  const dummyCartItems = [
    {
      id: 1,
      image: "dummy_image_url_2",
      order: "Pizza",
      price: 250,
      quantity: 2,
    },
    {
      id: 2,
      image: "dummy_image_url_2",
      order: "Burger",
      price: 150,
      quantity: 3,
    },
    {
      id: 1,
      image: "dummy_image_url_2",
      order: "Pizza",
      price: 250,
      quantity: 2,
    },
    {
      id: 2,
      image: "dummy_image_url_2",
      order: "Burger",
      price: 150,
      quantity: 3,
    },
  ];

  return (
    <div className="w-[1200px] mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">My Cart</h2>

      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 "></th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                Order
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                Price (INR)
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                Quantity
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-cente">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyCartItems.map((item) => (
              <tr key={item.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <img src={item.image} alt="Product" className="w-12 h-12" />
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {item.order}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {item.price}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {item.quantity}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button onClick={() => removeFromCart(item.id)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <span className="text-2xl font-bold mr-8">Total:</span>
        <span className="text-4xl font-bold text-[#F1762E]">Rs. 1699</span>
      </div>

      <div className="mt-8 flex w-5/12 gap-4 items-center">
        <NavLink to="/checkout">
          <button
            className="block w-full mt-5 select-none rounded-md bg-[#F17228] hover:bg-[#FFB30E] py-3 px-7 text-center align-middle  text-sm font-bold uppercase text-white transition-all hover:shadow-none  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-4"
            type="button"
            style={{ boxShadow: "0px 3px 8px rgba(241, 114, 40, 0.5)" }}
          >
            Checkout
          </button>
        </NavLink>
        <NavLink to="/food">
          <button
            className="block w-full mt-5 select-none rounded-md bg-[#F17228] hover:bg-[#FFB30E] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white transition-all hover:shadow-none  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-4"
            type="button"
            style={{ boxShadow: "0px 3px 8px rgba(241, 114, 40, 0.5)" }}
          >
            Continue Shoping
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartTable;
