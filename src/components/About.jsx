import React from "react";

const About = () => {
  return (
    <div className="rounded-xl p-1 bg-gradient-border animate-float">
      <div className="bg-secondary p-6 rounded-xl shadow-glass">
        <section
          id="about"
          className="py-20 px-6p-6 rounded-xl bg-glass shadow-glass backdrop-blur-md text-textLight animate-fade text-center scroll-mt-28"
        >
          <h3 className="text-3xl font-bold text-gradient mb-4">About Me</h3>
          <p className="max-w-2xl text-xl mx-auto text-gray-400">
            I'm a tech enthusiast and aspiring full-stack developer currently
            studying engineering. I enjoy building responsive web apps and
            continuously learning new technologies to improve my skills.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
