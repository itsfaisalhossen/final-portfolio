import { projects } from "@/data";
import React from "react";
// import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="my-36" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-x-24 gap-y-8 mt-16 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer title={title} href={link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
//  <PinContainer title={link} href={link}>
//    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
//      <div className="relative w-full h-full overflow-hidden lg:rounded-lg bg-[#13162d]">
//        <img src="/bg.png" alt="bg-img" />
//      </div>
//      <img src={img} alt={title} className="z-10 absolute bottom-0" />
//    </div>
//    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//      {title}
//    </h1>
//    <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
//      {des}
//    </p>
//    <div className="flex items-center justify-between mt-7 mb-3">
//      <div className="flex items-center">
//        {iconLists.map((icon, index) => (
//          <div
//            key={icon}
//            className="flex items-center justify-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8"
//            style={{ transform: `translateX(-${5 * index * 2}px)` }}
//          >
//            <img src={icon} alt="icon" className="p-2" />
//          </div>
//        ))}
//      </div>
//      <div className="flex items-center justify-center">
//        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
//          Check Live Site
//        </p>
//        <FaLocationArrow className="ms-3" color="#CBACF9" />
//      </div>
//    </div>
//  </PinContainer>;
