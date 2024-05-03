import React from "react";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Button } from "@material-tailwind/react";
function Navbar() {
  const [openNav, setOpenNav] = React.useState(false); // State for mobile nav

  // Close the mobile menu on larger screens
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 w-full text-center">
      <li>
        <NavLink to="/" exact className="p-2" onClick={() => setOpenNav(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/food" className="p-2" onClick={() => setOpenNav(false)}>
          Food
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="p-2" onClick={() => setOpenNav(false)}>
          Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className="p-2"
          onClick={() => setOpenNav(false)}
        >
          Contact Us
        </NavLink>
      </li>
      <li className="flex gap-5 justify-center">
        <NavLink to="/login">
          <Button className="bg-[#F17228] text-white px-4 py-2 rounded hover:shadow hover:text-white transition duration-300">
            Login
          </Button>
        </NavLink>
        <NavLink to="/signup">
          <Button className="bg-[#F17228] text-white px-4 py-2 rounded hover:shadow hover:text-white transition duration-300">
            SignUp
          </Button>
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm w-full border-b">
      {" "}
      {/* Sticky positioning */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="h-9" />
        </div>
        <div className="hidden lg:block">{navList}</div>{" "}
        <div className="flex items-center gap-4 lg:hidden">
          <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <FaTimes size={24} /> : <FaBars size={24} />}{" "}
            {/* Toggle icon */}
          </button>
        </div>
      </div>
      {openNav && (
        <div className="lg:hidden bg-white flex flex-col items-center py-4 border-t">
          {navList}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
