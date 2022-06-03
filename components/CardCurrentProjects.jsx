import React from "react";
import Vector6 from "../assets/Vector6.svg";
import Image from "next/image";

import CardProjects from "./CardProjects";

const CardCurrentProjects = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4  sm:px-10">
      <CardProjects />
    </div>
  );
};

export default CardCurrentProjects;
