"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { ModeToggle } from "@/components/ModeToggle";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="pt-28 w-full text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
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
        <div className="w-full lg:w-[80%] space-y-2.5 lg:space-y-5  flex flex-col justify-center items-center">
          <motion.div
            className="flex items-center justify-center w-[120px] md:w-[130px] rounded-full h-[120px] md:h-[130px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.8 },
            }}
            // style={ball}
          >
            <img
              src="/faisalHdev.jpg"
              className="w-full object-cover rounded-full border-white border-2 h-full"
              alt="hero_img"
            />
          </motion.div>
          <h3 className="tracking-widest items-center text-center text-sm md:text-base text-blue-100 max-w-90 flex">
            {/* Building Digital Dreams with Stunning Precision */}
            <span className="text-sm md:text-lg">👋🏻</span>Hi i'm Faisal Hossen.
          </h3>
          <p className="text-center w-full md:w-[80%] mx-auto text-3xl font-bold md:text-4xl lg:text-5xl">
            Frontend Web Developer Based in{" "}
            <span className="text-xl md:text-2xl lg:text-3xl text-purple">
              Dhaka Bangladesh.
            </span>
          </p>
          <p className="w-full md:w-[75%] text-center leading-6 md:leading-8 tracking-normal mb-2 text-base md:text-[18px]">
            I craft user-friendly, responsive, and visually striking digital
            experiences that transform ideas into engaging, scalable, and
            high-performing web applications, using JavaScript, ReactJs, NextJs,
            TailwindCSS with 'MERN-STACK'.
          </p>
          <div className="flex items-center justify-center">
            <a href="#projects">
              <MagicButton
                title="Show my Work"
                icon={<HiOutlineChevronDoubleDown size={16} />}
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
