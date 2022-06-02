import React from "react";
import Image from "next/image";
import IconsLink from "../assets/IconsLink.svg";
import IconStar from "../assets/IconStar.svg";
import IconGreen from "../assets/IconGreen.svg";

const CardInterest = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 sm:flex-row ">
      {/* Card 1  */}

      <div className="w-full  sm:bg-green-300 rounded-[6px] flex p-4 gap-4 sm:flex-col  sm:justify-between  sm:p-10 ">
        <div className="w-[20%]   flex justify-end items-start sm:justify-start sm:items-end ">
          <Image src={IconsLink} />
        </div>

        <div className="w-[80%] h-full  flex flex-col gap-2 ">
          <h1 className="font-bold text-[20px] sm:text-[28px]  sm:w-[120%]">
            Blockchain product{" "}
          </h1>
          <p className="text-[13px] text-[#5B5B5B] sm:text-[18px] ">
            Create something novel that has never been done.
          </p>
          <h1 className="font-semibold text-[16px] text-[#FF6600] sm:text-[18px]  ">
            Read More...
          </h1>
        </div>
      </div>

      {/* Card 2  */}

      <div className="w-full  sm:bg-green-300 rounded-[6px] flex p-4 gap-4 sm:flex-col  sm:justify-between   sm:p-10 ">
        <div className="w-[20%]   flex justify-end items-start sm:justify-start sm:items-end ">
          <Image src={IconStar} />
        </div>

        <div className="w-[80%] h-full  flex flex-col gap-2 ">
          <h1 className="font-bold text-[20px] sm:text-[28px]">
            Quality product
          </h1>
          <p className="text-[13px] text-[#5B5B5B] sm:text-[18px]  sm:w-[300px] ">
            Create something novel that has never been done.
            <span className=""> on the blockchain before Build a product</span>
          </p>
          <h1 className="font-semibold text-[16px] text-[#FF6600] sm:text-[18px]  ">
            Read More...
          </h1>
        </div>
      </div>

      {/* Card 3  */}

      <div className="w-full  sm:bg-green-300 rounded-[6px] flex p-4 gap-4 sm:flex-col  sm:justify-between  sm:p-10 ">
        <div className="w-[20%]   flex justify-end items-start sm:justify-start sm:items-end ">
          <Image src={IconGreen} />
        </div>

        <div className="w-[80%] h-full  flex flex-col gap-2 ">
          <h1 className="font-bold text-[20px] sm:text-[28px]">
            Viable product
          </h1>
          <p className="text-[13px] text-[#5B5B5B] sm:text-[18px]  sm:w-[300px] ">
            Create something novel that has never been done.
            <span className=""> on the blockchain before Build a product</span>
          </p>
          <h1 className="font-semibold text-[16px] text-[#FF6600] sm:text-[18px]  ">
            Read More...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardInterest;
