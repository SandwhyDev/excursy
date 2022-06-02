import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/Hamburger.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[#FAFAFA] flex items-center justify-between px-4 font-manrope sm:p-14 sm:gap-[150px]  sm:justify-end ">
      <div className="flex items-center gap-3">
        <div className="w-[44px] h-[44px] ">
          <Image src={Logo} className="object-cover" />
        </div>
        <h1 className="font-bold text-[24px]">Excursy</h1>
      </div>
      <div className="w-full hidden   px-14 sm:flex  gap-[20px] sm:gap-14 sm:pl-20   items-center justify-between">
        <Link href={"#home"}>
          <h1 className="cursor-pointer">Home</h1>
        </Link>

        <Link href={"#aboutUs"}>
          <h1 className="cursor-pointer">About Us</h1>
        </Link>

        <Link href={"#ourInterests"}>
          <h1 className="cursor-pointer">Our Interests</h1>
        </Link>

        <Link href={"#values"}>
          <h1 className="cursor-pointer">Values</h1>
        </Link>

        <Link href={"#currentProjects"}>
          <h1 className="cursor-pointer">Current Projects</h1>
        </Link>

        <button className="p-2 w-[146px] bg-[#FF6600] sm:rounded-[8px] sm:text-white rounded-[10px]  text-[16px] font-bold">
          <p>Sign Up</p>
        </button>
      </div>

      <div className="w-[44px] h-[44px]  flex items-center justify-center sm:hidden ">
        <Image src={Hamburger} />
      </div>
    </nav>
  );
};

export default Navbar;
