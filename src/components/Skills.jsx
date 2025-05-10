import React from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiC,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <SiC /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
];
{/*Next task would be adding carousel like system */}
const Skills = () => {
  return (
    <div className="rounded-xl p-1 bg-gradient-border animate-float my-8">
      <div className="bg-secondary p-6 rounded-xl shadow-glass text-textLight">
        <section id="skills" className="py-20 px-6 text-center scroll-mt-28">
          <h3 className="text-3xl font-bold text-gradient mb-8">
            Technical skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map(({ name, icon }) => (
              <span
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-m font-medium bg-glass text-textLight hover:scale-105 hover:-translate-y-1 transition-all duration-150 shadow-md "
              >
                <span className="text-lg">{icon}</span>
                {name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
