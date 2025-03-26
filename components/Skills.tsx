import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { skills } from "@/data";
import { BackgroundBeamsWithCollision } from "./ui/Background";

const Skills = () => {
  return (
    <div className="border border-white/[0.2] mb-32 rounded-xl relative">
      <BackgroundBeamsWithCollision children={undefined} />
      <h3 className="font-bold mt-5 mb-3 md:mt-8 md:mb-6 text-lg lg:text-3xl ml-6 md:ml-12">
        My Skills
      </h3>
      <InfiniteMovingCards
        className="pb-6 md:pb-8"
        items={skills}
        direction="left"
        speed="fast"
      />
    </div>
  );
};

export default Skills;
