import React from "react";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { GoProjectSymlink } from "react-icons/go";
import { ModeToggle } from "@/components/ModeToggle";

const Hero = () => {
  return (
    <section className=" pt-20 lg:pt-36">
      {/* Spotlight Effect use to the background */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* Grid and Dot Backgrounds */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.1] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="hidden text-white absolute right-0 -top-44">
          <ModeToggle />
        </div>
        {/* max-w-[89vw]md:max-w-2xl lg:max-w-[52vw] */}
        <div className="w-full md:w-10/12 lg:w-8/12 space-y-3 md:space-y-6  flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-[100px] md:w-[140px] rounded-full h-[100px] md:h-[140px] border-2 border-white">
            <img
              src="/faisalHdev.jpg"
              className="w-full object-cover rounded-full h-full"
              alt=""
            />
          </div>
          <h3 className="uppercase  tracking-widest text-center text-xs text-blue-100 max-w-90 hidden md:flex">
            Building Digital Dreams with Stunning Precision
          </h3>
          <p className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            Hi I'm Faisal Frontend Web Developer based in{" "}
            <span className="text-xl md:text-2xl lg:text-3xl text-purple">
              Dhaka Bangladesh.
            </span>
          </p>
          <p className="text-center leading-7 tracking-normal mb-2 text-sm md:text-[18px] lg:text-[20px]">
            I craft user-friendly, responsive, and visually striking digital
            experiences that transform ideas into engaging, scalable, and
            high-performing web applications, using JavaScript, ReactJs, NextJs,
            TailwindCSS with 'MERN-STACK'.
          </p>
          <div className="flex items-center justify-center gap-8">
            <a href="#projects">
              <MagicButton
                title="Show my Work"
                icon={<GoProjectSymlink size={18} className="rotate-90" />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
