import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Button } from "@material-tailwind/react";
import { AuthContext } from "../context/AuthContext";
import { useState, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    toast.success("Successfully Logged Out!");
    setIsAuthenticated(false);
    navigate("/");
  };

  const navList = (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 w-full text-center">
      {isAuthenticated ? (
        <>
          <li>
            <NavLink
              to="/food"
              className="p-2"
              onClick={() => setOpenNav(false)}
            >
              Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="p-2"
              onClick={() => setOpenNav(false)}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orderhistory"
              className="p-2"
              onClick={() => setOpenNav(false)}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <Button
              className="bg-[#F17228] text-white px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/" className="p-2" onClick={() => setOpenNav(false)}>
              Home
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
              <Button className="bg-[#F17228] text-white px-4 py-2 rounded">
                Login
              </Button>
            </NavLink>
            <NavLink to="/signup">
              <Button className="bg-[#F17228] text-white px-4 py-2 rounded">
                Sign Up
              </Button>
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );

  useEffect(() => {
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

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm w-full border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="h-9" />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4 lg:hidden">
          <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <FaTimes size={24} /> : <FaBars size={24} />}
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
