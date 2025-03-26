import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
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
      <div className="flex  justify-center relative my-20 z-10">
        <div className="hidden text-white absolute right-0 -top-44">
          <ModeToggle />
        </div>
        <div className="max-w -[89vw] space-y-4 md:space-y-8 md:max-w-2xl lg:max-w-[52vw] flex flex-col justify-center items-center">
          <h2 className="uppercase  tracking-widest text-center text-xs text-blue-100 max-w-90">
            Building Digital Dreams with Stunning Precision
          </h2>
          <TextGenerateEffect
            className="text-center text-4xl lg:text-5xl"
            words="Hi I'm Faisal Frontend Developer based in Dhaka Bangladesh."
          />
          <p className="text-center leading-7 tracking-normal mb-2 text-sm md:text-[18px] lg:text-[20px]">
            {/* Blending creativity and technology,  */}I craft user-friendly,
            responsive, and visually striking digital experiences that transform
            ideas into engaging, scalable, and high-performing web applications,
            using JavaScript, ReactJs, NextJs, TailwindCSS with 'MERN-STACK'.
          </p>
          <div className="flex items-center justify-center gap-8">
            <a href="#projects">
              <MagicButton
                title="Show my Work"
                icon={<FaLocationArrow />}
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
