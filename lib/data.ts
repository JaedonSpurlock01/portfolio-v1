import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import appmasterImg from "@/public/AppMaster.png";

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
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AppMaster",
    description:
      "Full-stack app-hosting service to allow developers to manage their python mini-projects.",
    tags: ["Python", "TKinter", "Firebase", "Pyrebase"],
    imageUrl: appmasterImg,
  },
  {
    title: "Example #2",
    description:
      "The stars danced in the velvet sky, casting a celestial glow upon the tranquil night.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C++",
  "Python",
  "TKinter",
  "Firebase",
  "Pyrebase",
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