import dsaImage from "../assets/courses-16x9/thumb-dsa-mastermind.jpg";
import thunderImage from "../assets/courses-16x9/thumb-thunder.jpg";
import lldImage from "../assets/courses-16x9/thumb-lld.jpg";
import comboImage from "../assets/courses-16x9/thumb-dsa-ai.jpg";
import devopsImage from "../assets/courses-16x9/thumb-devops.jpg";
import dpImage from "../assets/courses-16x9/thumb-dynamic-programming.jpg";
import javaImage from "../assets/courses-16x9/thumb-java.jpg";
import webImage from "../assets/courses-16x9/thumb-web-development.jpg";
import genAIImage from "../assets/courses-16x9/thumb-gen-ai.jpg";
import systemImage from "../assets/courses-16x9/thumb-system-design.jpg";
import cppImage from "../assets/courses-16x9/thumb-dsa-cpp.jpg";
import {
  GitBranch,
  Code2,
  Layers,
  Sparkles,
  Terminal,
  Braces,
} from "lucide-react";
export const courses = [
  {
    id: "dsa",
    image: dsaImage,
    category: "DSA",
    title: "DSA Mastermind: Zero to Hero",
    subtitle:
      "Master DSA through problem solving and product-based company interview preparation.",
    instructor: "Rohit Negi",
    type: "Live + recordings",
    label: "ZERO TO HERO",
    art: "tree",
    icon: GitBranch,
    url: "https://strikes.in/course/689ecf2b6793e719cdee9efc",
    topics: [
      "Programming fundamentals & complexity",
      "Arrays, strings, linked lists & trees",
      "Dynamic programming, greedy & graphs",
      "450+ curated problems & interview strategy",
    ],
    tags: ["C++", "Problem solving", "Interviews"],
  },
  {
    id: "web",
    image: thunderImage,
    category: "Development",
    title: "Thunder: 100 Days of Code",
    subtitle:
      "A live course covering web development, system design, React, and DevOps.",
    instructor: "Rohit Negi",
    type: "Live + recordings",
    label: "BUILD & SHIP",
    art: "web",
    icon: Code2,
    url: "https://strikes.in/course/thunder",
    topics: [
      "JavaScript fundamentals & the browser",
      "React, TypeScript & Tailwind CSS",
      "Node.js, Express & MongoDB",
      "System design, DevOps & capstone projects",
    ],
    tags: ["Full stack", "React", "Projects"],
  },
  {
    id: "lld",
    image: lldImage,
    category: "System design",
    title: "Low-Level Design",
    subtitle:
      "Learn LLD, design patterns, and machine coding in Java through real-world problems.",
    instructor: "Aditya Tandon",
    type: "Live + recordings",
    label: "THINK IN SYSTEMS",
    art: "system",
    icon: Layers,
    url: "https://strikes.in/course/lld-java",
    topics: [
      "Object-oriented programming & SOLID",
      "UML diagrams & requirement analysis",
      "Design patterns in Java",
      "Real-world machine coding problems",
    ],
    tags: ["Java", "Architecture", "Design patterns"],
  },
  {
    id: "ai",
    image: comboImage,
    category: "AI & DevOps",
    title: "Data Structures & Algorithms (DSA) + Generative AI",
    subtitle:
      "Learn DSA and generative AI in live classes with industry-grade projects.",
    instructor: "Rohit Negi",
    type: "Live + recordings",
    label: "BUILD WHAT’S NEXT",
    art: "ai",
    icon: Sparkles,
    url: "https://strikes.in/course/combo",
    topics: [
      "Data structures & algorithms",
      "Generative AI & large language models",
      "Building AI applications",
      "Industry projects & interview preparation",
    ],
    tags: ["DSA", "Gen AI", "LLMs"],
  },
  {
    id: "devops",
    image: devopsImage,
    category: "AI & DevOps",
    title: "DevOps Full Course",
    subtitle:
      "Learn CI/CD, containerization, cloud infrastructure, monitoring, and logging.",
    instructor: "Aditya Tandon",
    type: "Live + recordings",
    label: "SHIP WITH CONFIDENCE",
    art: "devops",
    icon: Terminal,
    url: "https://strikes.in/course/devops",
    topics: [
      "CI/CD pipelines",
      "Docker & Kubernetes",
      "Cloud infrastructure on AWS / GCP",
      "Monitoring & logging",
    ],
    tags: ["Docker", "Cloud", "CI/CD"],
  },
  {
    id: "dp",
    image: dpImage,
    category: "DSA",
    title: "Dynamic Programming Full Course",
    subtitle: "Study dynamic programming through 50+ problem-solving sessions.",
    instructor: "Rohit Negi",
    type: "20 lectures",
    label: "GO A LEVEL DEEPER",
    art: "dp",
    icon: Braces,
    url: "https://rohittnegi.akamai.net.in/new-courses/19",
    topics: [
      "Dynamic programming foundations",
      "Recognizing states & transitions",
      "50+ problem-solving sessions",
      "Optimizing time & space complexity",
    ],
    tags: ["Algorithms", "50+ problems", "Practice"],
  },
];
export type Course = (typeof courses)[number];

export const sourceCourseOrder = ["lld", "web", "ai", "devops", "dp", "dsa"];
export const freeCourses = [
  {
    id: "free-java",
    title: "Java Full Course",
    subtitle: "From Core Java to backend systems built to scale.",
    instructor: "Aditya Tandon",
    image: javaImage,
    level: "Beginner",
    lectures: 57,
    category: "Development",
    tags: ["Java", "Spring Boot", "Backend"],
    url: "https://coderarmy.in/course/699b1d33c88eb88956298655",
  },
  {
    id: "free-web",
    title: "Web Development Full Course",
    subtitle: "Learn the MERN stack in an all-in-one web development course.",
    instructor: "Rohit Negi",
    image: webImage,
    level: "Beginner",
    lectures: 47,
    category: "Development",
    tags: ["Web development", "MERN stack"],
    url: "https://coderarmy.in/course/68bd8307d672b879b8ee8842",
  },
  {
    id: "free-ai",
    title: "GenAI Course",
    subtitle: "Understand generative AI and turn the concepts into code.",
    instructor: "Rohit Negi",
    image: genAIImage,
    level: "Intermediate",
    lectures: 8,
    category: "AI & DevOps",
    tags: ["Generative AI", "Concepts to code"],
    url: "https://coderarmy.in/course/68bd80e9baff6fcb587d7575",
  },
  {
    id: "free-system",
    title: "System Design Course",
    subtitle: "Learn low-level design and system design from the fundamentals.",
    instructor: "Aditya Tandon",
    image: systemImage,
    level: "Beginner",
    lectures: 40,
    category: "System design",
    tags: ["System design", "Low-level design"],
    url: "https://coderarmy.in/course/68bd6e11b2f4758de0e0e2cd",
  },
  {
    id: "free-cpp",
    title: "DSA Course in C++",
    subtitle: "Learn data structures and algorithms with C++.",
    instructor: "Rohit Negi",
    image: cppImage,
    level: "Beginner",
    lectures: 163,
    category: "DSA",
    tags: ["C++", "Data structures", "Algorithms"],
    url: "https://coderarmy.in/course/68bd6dbfb2f4758de0e0e2cc",
  },
];
export type FreeCourse = (typeof freeCourses)[number];
