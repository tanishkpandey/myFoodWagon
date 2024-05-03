import Logo from "../assets/Logo.png";
import { Typography } from "@material-tailwind/react";
export function Footer() {
  return (
    <footer className="w-full bg-white p-8 max-w-[1300px] mx-auto">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={Logo} alt="logo-ct" className="h-8" />
        <Typography color="blue-gray" className="text-center font-normal">
          FoodWagon, A project by Tanishk Pandey
        </Typography>
      </div>
    </footer>
  );
}
