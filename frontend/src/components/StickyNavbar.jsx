import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom"; // For proper navigation

const StickyNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  // Close MobileNav when window is resized to larger than 960px
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
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Typography as={Link} to="/" className="font-normal">
          Home
        </Typography>
      </li>
      <li>
        <Typography as={Link} to="/about" className="font-normal">
          About
        </Typography>
      </li>
      <li>
        <Typography as={Link} to="/contactus" className="font-normal">
          Contact
        </Typography>
      </li>
      <li>
        <Typography as={Link} to="/services" className="font-normal">
          Services
        </Typography>
      </li>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-50 bg-white px-4 py-2 lg:px-8 lg:py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Typography
          as={Link}
          to="/"
          className="mr-4 cursor-pointer text-lg font-bold"
        >
          BrandName
        </Typography>
        <div className="hidden lg:block">{navList}</div>{" "}
        <div className="flex items-center gap-4">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            Log In
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            Sign Up
          </Button>
        </div>
      </div>

      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="mb-2">
            Log In
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="mb-2">
            Sign Up
          </Button>
        </div>
      </MobileNav>
      
    </Navbar>
  );
};

export default StickyNavbar;
