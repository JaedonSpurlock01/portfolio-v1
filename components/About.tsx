"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading> About Me </SectionHeading>
      <p className="mb-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio fuga,
        aliquid pariatur dicta ex, aliquam sequi culpa minus sed laborum nostrum
        obcaecati impedit aut magni temporibus beatae mollitia necessitatibus
        blanditiis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Odio fuga, aliquid pariatur dicta ex, aliquam sequi culpa minus sed
        laborum nostrum obcaecati impedit aut magni temporibus beatae mollitia
        necessitatibus blanditiis.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio fuga,
        aliquid pariatur dicta ex, aliquam sequi culpa minus sed laborum nostrum
        obcaecati impedit aut magni temporibus beatae mollitia necessitatibus
        blanditiis.
      </p>
    </motion.section>
  );
}
