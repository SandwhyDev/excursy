import React from "react";
import Slack from "../assets/Slack.svg";
import Woocommerce from "../assets/woocommerce.svg";
import Amazon from "../assets/Amazon.svg";
import Microsoft from "../assets/Microsoft.svg";
import Image from "next/image";

const Sponsor = () => {
  return (
    <div className="w-full h-full items-center  px-4 flex gap-4 sm:justify-center sm:items-center">
      <Image src={Slack} width={70} height={70} />
      <Image src={Woocommerce} width={70} height={70} />
      <Image src={Amazon} width={70} height={70} />
      <div className=" h-[80%] ">
        <Image src={Microsoft} width={70} height={70} />
      </div>
    </div>
  );
};

export default Sponsor;
