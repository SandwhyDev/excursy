import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import FooterBG from "../assets/FooterBG.svg";
import Facebook from "../assets/Facebook.svg";
import Twitch from "../assets/Twitch.svg";
import Linkedin from "../assets/Linkedin.svg";
import Github from "../assets/Github.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full h-full relative font-manrope ">
      <Image src={FooterBG} />
      <div className="w-full h-full  flex flex-col gap-10  items-center py-20 absolute top-0 left-0  ">
        <div className="flex items-center gap-3">
          <div className="w-[44px] h-[44px] ">
            <Image src={Logo} className="object-cover" />
          </div>
          <h1 className="font-bold text-[24px] text-white">Excursy</h1>
        </div>
        <div className="w-full    px-14 flex gap-4 items-center justify-center">
          <Image src={Facebook} />
          <Image src={Twitch} />
          <Image src={Linkedin} />
          <Image src={Github} />
        </div>

        <div className="w-full    px-14 flex flex-wrap  gap-[20px] text-white items-center justify-center">
          <Link href={"#home"}>
            <h1>Home</h1>
          </Link>

          <Link href={"#aboutUs"}>
            <h1>About Us</h1>
          </Link>

          <Link href={"#ourInterests"}>
            <h1>Our Interests</h1>
          </Link>

          <Link href={"#values"}>
            <h1>Values</h1>
          </Link>

          <Link href={"#currentProjects"}>
            <h1>Current Projects</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
