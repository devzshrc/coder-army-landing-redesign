import { ArrowUpRight } from "lucide-react";
import rohit from "../assets/rohit-negi.jpg";
import aditya from "../assets/aditya-tandon.jpg";
import "./instructors.css";

const instructors = [
  {
    name: "Rohit Negi",
    first: "Rohit",
    role: "Founder & lead instructor",
    background: "Ex-Uber · IIT Guwahati · GATE CSE AIR 202",
    photo: rohit,
    desc: "Rohit founded Coder Army and used to be an engineer at Uber. He teaches data structures, algorithms, and full stack development.",
    courseId: "dsa",
  },
  {
    name: "Aditya Tandon",
    first: "Aditya",
    role: "Co-founder & senior instructor",
    background: "Ex-Ola · Oxyzo · IIT Guwahati",
    photo: aditya,
    desc: "Aditya builds systems that serve lots of people at once. He teaches system design, Java, and DevOps.",
    courseId: "lld",
  },
];

export function Instructors({ onSelect }: { onSelect: (courseId: string) => void }) {
  return (
    <div className="mentors-pair">
      {instructors.map((m) => (
        <article key={m.name} className="mentor-profile reveal">
          <img className="mentor-photo-img" src={m.photo} alt={m.name} loading="lazy" />
          <div className="mentor-body">
            <h3>{m.name}</h3>
            <p className="mentor-role">{m.role}</p>
            <p className="mentor-desc">{m.desc}</p>
            <p className="mentor-background">{m.background}</p>
            <button className="mentor-link" onClick={() => onSelect(m.courseId)}>
              Learn with {m.first} <ArrowUpRight size={15} />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
