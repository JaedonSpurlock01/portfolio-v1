import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import routifyImg from "@/public/routify.png";
import webwizzardImg from "@/public/webwizzard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Project Contributor | Open Energy Dashboard",
    location: "Remote",
    description:
      "Engaged with Plotly.js, Docker, PostgreSQL, JavaScript, TypeScript, and React technologies to address critical issues and advance the functionality of the energy information platform",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Routify",
    description:
      "City Pathfinding Visualizer that works with any city listed in OpenStreetMap.",
    tags: ["JavaScript", "NextJS", "ReactJS", "ThreeJS", "API"],
    imageUrl: routifyImg,
  },
  {
    title: "WebWizzard",
    description:
      "AI chatbot chrome extension that provides chat prompting on websites and also uses web scraping to gather relevant data.",
    tags: ["JavaScript", "AI", "API", "ReactJS", "JSON"],
    imageUrl: webwizzardImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C++",
  "Python",
  "TKinter",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
] as const;
