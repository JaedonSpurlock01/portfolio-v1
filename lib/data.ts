import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import routifyImg from "@/public/routify.gif";
import webwizzardImg from "@/public/webwizzard.png";
import resideImg from "@/public/reside.png";

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
      "Improved reliability of an open-source project by implementing a test case with JavaScript and Mocha. Led a team of 3 to verify conversions from kWh to BTU energy units, resulting in increased confidence in data integrity.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2023 - Nov 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Routify",
    description:
      "City pathfinding visualizer that displays a variety of search algorithms in a road-map visual.",
    tags: [
      "JavaScript",
      "NextJS",
      "ReactJS",
      "ThreeJS",
      "TailwindCSS",
      "Nominatim API",
      "Overpass API",
      "Amazon S3",
    ],
    imageUrl: routifyImg,
    link: "https://www.routify.cc",
  },
  {
    title: "WebWizzard",
    description:
      "AI chatbot chrome extension that provides chat prompting on websites and also uses web scraping to gather relevant data.",
    tags: [
      "JavaScript",
      "GEMINI AI API",
      "DOM API",
      "ReactJS",
      "JSON",
      "CHROME EXTENSION",
    ],
    imageUrl: webwizzardImg,
    link: "",
  },
  {
    title: "Reside",
    description:
      "Real estate website built for college students. It helps find students the best deals, roommates, and nearby facilities.",
    tags: [
      "JavaScript",
      "Java",
      "Python",
      "NextJS",
      "ReactJS",
      "MapBox",
      "TailwindCSS",
      "MongoDB",
    ],
    imageUrl: resideImg,
    link: "",
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
  "TailwindCSS",
  "Python",
  "Framer Motion",
  "Amazon S3",
  "SQL",
  "Agile",
  "Scrum",
] as const;
