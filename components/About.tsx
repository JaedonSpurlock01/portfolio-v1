"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 text-center scroll-mt-28 dark:text-white/80"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About Me </SectionHeading>
      <p className="mb-3">
        I am studying Software Engineering at California State University, San
        Marcos, aspiring to be a full-stack developer. Passionate about
        developing sustainable, impactful applications to tackle tech industry
        challenges. I am knowledgeable in Python, C++, JavaScript, CSS, and
        HTML. In addition, I work with popular technologies like React,
        TailwindCSS, Next.JS, and databases like Convex and Firebase. I am a
        quick learner with a strong technical aptitude, seeking opportunities to
        enhance professional and communication skills to deliver a significant
        impact on the world.
      </p>

      <p className="mb-3">
        In 2004, I was born with profound bilateral neurosensorial hearing loss,
        which rendered me completely deaf in both ears. Early on in my life, I
        underwent two cochlear implant surgeries in 2005 and 2007, performed in
        Hawaii and Colorado. Although both surgeries were successful, my right
        side gradually worsened growing up, pushing me to only wear my left ear
        cochlear implant to achieve bionic hearing.
      </p>

      <p>
        Beyond my professional pursuits, I find joy in various hobbies such as
        biking alongside the captivating Oceanside beach, hitting the local gym
        to maintain a healthy lifestyle, embarking on invigorating hikes in the
        mountains, and taking leisurely walks with my two beloved chihuahuas,
        Carmella and Luca. Additionally, in my occasional downtime, I also enjoy
        playing video games with close friends and working on personal
        programming projects.
      </p>
    </motion.section>
  );
}
