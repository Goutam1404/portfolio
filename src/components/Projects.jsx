import React from "react";
// import TodoImage from "./Todo.jpg";
const Projects = () => {
  return (
    <div className="rounded-xl p-[1px] sm:p-1 bg-gradient-border animate-float mt-2 sm:mt-4">
      <div className="bg-secondary p-6 rounded-xl shadow-glass">
        <section
          id="projects"
          className="py-20 px-6 bg-primary text-center animate-fade scroll-mt-28"
        >
          <h3 className="text-3xl font-bold mb-8">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                img: "/Todo.JPG",
                title: "Todo App",
                desc: "A full-stack todo app using React, Spring Boot, and MySQL.",
              },
              {
                img: "/notes.jpg",
                title: "Productivity Tools",
                desc: "A notes app with React, Express, and MongoDB stack.",
              },
              {
                img: "/Todo.JPG",
                title: "Todo App",
                desc: "A full-stack todo app using React, Spring Boot, and MySQL.",
              },
              {
                img: "/notes.jpg",
                title: "Productivity Tools",
                desc: "A notes app with React, Express, and MongoDB stack.",
              },
              {
                img: "/Todo.JPG",
                title: "Todo App",
                desc: "A full-stack todo app using React, Spring Boot, and MySQL.",
              },
              {
                img: "/notes.jpg",
                title: "Productivity Tools",
                desc: "A notes app with React, Express, and MongoDB stack.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="bg-secondary shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Projects;
