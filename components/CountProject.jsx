import React from "react";

const CountProject = () => {
  return (
    <div className="w-full h-auto    flex flex-col gap-5 items-center sm:flex-row  sm:w-auto sm:h-auto sm:p-4 sm:gap-6 text-[#5B5B5B] sm:flex sm:bg-white sm:justify-center ">
      {/* JUST SPACE  */}

      <div className="flex gap-6 items-center sm:flex-col-reverse sm:justify-center  sm:gap-0  ">
        <div className="p-2 bg-[#FFEDE6] sm:bg-transparent  rounded-[6px] sm:flex sm:flex-row ">
          <h1 className="font-bold text-[18px] text-[#FF6600] sm:text-[40px] sm:w-auto sm:text-center sm:-mt-2   ">
            600+
          </h1>
        </div>
        <h1 className=" text-[16px] font-bold sm:text-[24px] sm:font-semibold  ">
          Project Done{" "}
        </h1>
      </div>

      <hr className="border-2 sm:border-[1px] border-orange-500 w-full rounded-full sm:w-[1px] sm:h-[70%]" />

      <div className="flex gap-6 items-center sm:flex-col-reverse sm:justify-center sm:gap-0">
        <div className="p-2 bg-[#FFEDE6] rounded-[6px] sm:bg-transparent   sm:flex sm:flex-row">
          <h1 className="font-bold text-[18px] text-[#FF6600]  sm:text-[40px] sm:w-auto sm:text-center sm:-mt-2">
            950+
          </h1>
        </div>
        <h1 className=" text-[16px] font-bold  sm:text-[24px] sm:font-semibold   ">
          Happy Clients{" "}
        </h1>
      </div>

      <hr className="border-2 sm:border-[1px] border-orange-500 w-full rounded-full sm:w-[1px] sm:h-[70%]" />

      <div className="flex gap-6 items-center sm:flex-col-reverse sm:items-center sm:justify-center sm:gap-0  ">
        <div className="p-2 bg-[#FFEDE6] rounded-[6px] sm:bg-transparent   sm:flex sm:flex-row">
          <h1 className="font-bold text-[18px] text-[#FF6600]  sm:text-[40px] sm:w-auto sm:text-right sm:-mt-2">
            30+
          </h1>
        </div>
        <h1 className=" text-[16px] font-bold  sm:text-[24px] sm:font-semibold   ">
          Employee
        </h1>
      </div>
    </div>
  );
};

export default CountProject;
