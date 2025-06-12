import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { sleep } from "../utils/sleep";
import React from "react";

const list = {
  visible: {
    display: "flex",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    display: "none",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { display: "none", x: 0 },
  visible: { display: "flex", x: 0 },
};

const WORDS = [
  "Web",
  "Mobile Apps",
  "UI/UX",
  "Front-End",
  "Back-End",
  "WordPress",
];

export default function AnimatedTitle() {
  const textControls = useAnimationControls();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    let hasCanceled_ = false;

    const animateLoop = async () => {
      while (!hasCanceled_) {
        await textControls.start("visible");
        await sleep(1000);
        await textControls.start("hidden");
        await sleep(500);

        if (!hasCanceled_) {
          setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    };

    animateLoop();

    return () => {
      hasCanceled_ = true;
    };
  }, [textControls]);

  return (
    <div className="flex text-blue-100">
      <motion.div variants={list} initial="hidden" animate={textControls}>
        <WriteWord word={WORDS[currentWordIndex]} />
      </motion.div>
    </div>
  );
}

function WriteWord({
  word,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { word: string }) {
  return (
    <>
      {word.split("").map((letter, index) => (
        <motion.div key={index} variants={item} {...props}>
          {letter}
        </motion.div>
      ))}
    </>
  );
}

