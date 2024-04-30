import Logo from "../assets/Logo.png";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../App.css'
function Navbar() {
  return (
    <nav className="bg-white py-5">
      <div className="w-[1200px] mx-auto flex justify-between items-center">
        <div>
          <img src={Logo} alt="Food_Wagon_Logo" className="h-9" />
        </div>

        <div className="flex gap-4 text-[#726963] font-medium ">
          <p className="cursor-pointer p-2">
            <NavLink to="/">Home</NavLink>
          </p>
          <p className="cursor-pointer p-2">
            <NavLink to="/food">Food</NavLink>
          </p>
          <p className="cursor-pointer p-2">
            <NavLink to="/cart">Cart</NavLink>
          </p>
          <p className="cursor-pointer p-2">
            <NavLink to="/contactus">Contact Us</NavLink>
          </p>
        </div>

        <div className="flex justify-center items-center gap-4">
          <span className="text-[#F17228] cursor-pointer p-3">
            <FaShoppingCart />
          </span>
          <NavLink to="/login">
            <button className="rounded-md px-4 py-2 flex justify-center items-center gap-2 text-[#F17228] font-bold bg-white shadow-sm hover:shadow-md">
              <FaUser />
              Login
            </button>
          </NavLink>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
