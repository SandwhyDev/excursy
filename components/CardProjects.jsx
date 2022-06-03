import React from "react";
import { VectorCardProjects } from "../constants/Vector";

const CardProjects = () => {
  VectorCardProjects.map((e) => {
    console.log(e.vector);
  });

  return (
    <div className="w-screen h-full flex flex-col sm:flex-row sm:justify-between sm:w-full  gap-4  p-4 ">
      {VectorCardProjects.map((e) => {
        return (
          <div className="sm:flex sm:flex-col sm:gap-2">
            <div className="">{e.vector}</div>

            <h1 className=" font-semibold text-[24px] sm:text-[28px] sm:text-[#2B2B2B] sm:w-[80%]     ">
              {e.judul}
            </h1>

            <p className="text-[12px] text-[#5B5B5B] sm:text-[20px] sm:w-[80%]   ">
              {e.body}
            </p>

            <p className="text-[16px] font-semibold text-[#FF6600] text-left">
              Learn More.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardProjects;
