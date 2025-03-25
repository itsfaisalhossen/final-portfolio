"use client";
import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion"; // ✅ Correct import
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (scope.current) {
      animate(
        scope.current.querySelectorAll("span"), // ✅ Ensure it selects span elements
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope, animate]); // ✅ Correct dependency array

  return (
    <div className={cn("font-bold", className)}>
      <div className="dark:text-white w-full lg:w-[938px] text-black leading-[3.8rem] tracking-wide">
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`${
                idx > 6
                  ? "text-purple text-3xl"
                  : "dark:text-white text-black-100"
              } opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
