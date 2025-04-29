import { projects } from "@/data";
import React from "react";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className="mt-24 lg:mt-36" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full mx-auto mt-8 md:mt-14">
        {projects.map(
          ({ id, title, des, img, iconLists, link, projectLink }) => (
            <div
              className="flex flex-col justify-between border w-full border-white/[0.2] rounded-2xl p-5 w[60%] mx-auto bg-black-100"
              key={id}
            >
              <div>
                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-pink-500 to-90%  w-full mx-auto flex p-5 pb-0 rounded-2xl items-center justify-center">
                  <img src={img} alt="project_card_image" />
                </div>
                <div className="my-5 md:my-8">
                  <h3 className="text-lg md:text-[25px] font-semibold">
                    {title}
                  </h3>
                  <p className="text-sm md:text-[16px] text-[#BEC1DD] my-4">
                    {des}
                  </p>
                </div>
              </div>
              <div className="flex flex-col ustify-between">
                <div className="flex opacity-90">
                  {iconLists.map((icon, idx) => (
                    <div
                      key={idx}
                      className="rounded-full bg-black-100 -mr-2 bg-black100 p-2 border border-gray-700 flex w-9"
                    >
                      <img src={icon} alt="card_icon" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  <a
                    href={link}
                    target="_blank"
                    className="flex md:gap-2 transition items-center text-white hover:text-blue-400"
                  >
                    Check Live Site <MdArrowOutward />
                  </a>
                  <a
                    href={projectLink}
                    target="_blank"
                    title="Check Project Code"
                    className="rounded-lg flex transition items-center hover:text-blue-400 text-violet-300 gap-1"
                  >
                    Github
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
