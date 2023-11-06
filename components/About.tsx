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
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 text-center scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About Me </SectionHeading>
      <p className="mb-3">
        I am currently studying my Bachelor&apos;s of Software Engineering at
        California State University at San Marcos with the goal to become a
        full-stack engineer. My aim is to contribute to the development of
        sustainable, powerful applications that addresses the challenges faced
        in the tech industry. Thriving on challenges and relentlessly seeking
        opportunities to improve my professional and communication skills, I am
        a passionate and quick learner with a strong aptitude for technical
        subjects to help make a significant impact on the world.
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
