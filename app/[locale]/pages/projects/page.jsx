import React from "react";
import Projects2 from "./components/ProjectsSolar";
import Projects3 from "./components/ProjectsHotel";

const page = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Projects2 />
      <Projects3 />
    </div>
  );
};

export default page;
