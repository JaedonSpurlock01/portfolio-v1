import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import graphImg from "@/public/graph.png";
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
    icon: React.createElement(LuGraduationCap),
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
    title: "Shortest Route Finder",
    description:
      "Integrated Dijkstra's Algorithm using a network of cities and routes",
    tags: ["C++"],
    imageUrl: graphImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C++",
  "Python",
  "TKinter",
  "Convex",
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
