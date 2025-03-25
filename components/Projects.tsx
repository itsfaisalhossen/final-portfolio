import { projects } from "@/data";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className="my-36" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full mx-auto mt-8 md:mt-14">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="flex flex-col justify-between border w-full border-white/[0.2] rounded-2xl p-5 md:p-10 w[60%] mx-auto bg-black-100"
            key={id}
          >
            <div>
              <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-pink-500 to-90%  w-full mx-auto flex p-5 pb-0 rounded-2xl items-center justify-center">
                <img src={img} alt="project_card_image" />
              </div>
              <div className="my-5 md:my-10">
                <h3 className=" text-[18px] md:text-[32px] font-semibold">
                  {title}
                </h3>
                <p className=" text-[12px] md:text-xl text-[#BEC1DD] my-4">
                  {des}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                {iconLists.map((icon, idx) => (
                  <div
                    key={idx}
                    className="rounded-full bg-black-100 -mr-2 bg-black100 p-2 border border-gray-700 flex items-center mx-auto w-8 md:w-full"
                  >
                    <img src={icon} alt="card_icon" />
                  </div>
                ))}
              </div>
              <button className="flex md:gap-2 items-center hover:text-white text-[#CBACF9]">
                Check Live Site <MdArrowOutward />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
