import React from "react";
import SlackRsp from "../assets/SlackRsp.png";
import WoocommerceRsp from "../assets/woocommerceRsp.png";
import AmazonRsp from "../assets/AmazonRsp.png";
import MicrosoftRsp from "../assets/MicrosoftRsp.png";
import Image from "next/image";

const SponsorRsp = () => {
  return (
    <div className="w-full h-full items-center  px-4 flex gap-4 sm:justify-center sm:items-center sm:mt-14 sm:gap-[48px]">
      <Image src={SlackRsp} />
      <div className="w-[2px] h-[50px] bg-[#C0C5D2]"></div>
      <Image src={WoocommerceRsp} />
      <div className="w-[2px] h-[50px] bg-[#C0C5D2]"></div>
      <Image src={AmazonRsp} />
      <div className="w-[2px] h-[50px] bg-[#C0C5D2]"></div>
      <Image src={MicrosoftRsp} />
    </div>
  );
};

export default SponsorRsp;
