import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { skills } from "@/data";
import { BackgroundBeamsWithCollision } from "./ui/Background";

const Skills = () => {
  return (
    <div className="border border-white/[0.2] mb-40 rounded-xl relative">
      <BackgroundBeamsWithCollision children={undefined} />
      <h3 className="font-bold my-8 text-lg lg:text-3xl text-center">
        My Skills
      </h3>
      <InfiniteMovingCards
        className="pb-6 md:pb-8"
        items={skills}
        direction="left"
        speed="slow"
      />
    </div>
  );
};

export default Skills;
