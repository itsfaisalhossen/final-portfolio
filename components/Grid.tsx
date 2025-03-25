import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import Skills from "./Skills";

const Grid = () => {
  return (
    <section id="about" className="pt-20">
      <h1 className="text-center relative mx-auto z-50 w-full font-semibold md:font-bold text-4xl md:text-5xl">
        About <span className="text-purple"> Me</span>
      </h1>
      <BentoGrid className="w-full mt-10 mb-10">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
      {/* skills section are added */}
      <Skills />
    </section>
  );
};

export default Grid;
