import React from "react";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Home = () => {
  function openGmailCompose() {
    const to = "goutamkumar9093@gmail.com"; // change this to your default email

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}`;
    window.open(gmailUrl, "_blank");
  }

  return (
    <>
      <div className="rounded-xl p-[1px] sm:p-1 bg-gradient-border animate-float mt-2 sm:mt-4">
        <section
          id="home"
          className="bg-secondary p-6 rounded-xl shadow-glass  scroll-mt-28"
        >
          <div className="p-6 bg-glass shadow-soft backdrop-blur-md text-textLight rounded-xl animate-fadeInUp flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0 mr-4">
              <img
                src="/profileImage.jpg"
                alt="Profile"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-accent shadow-lg hover:scale-105 transition-transform duration-300"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/150")
                }
              />
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-accent">
                Hi, I'm Goutam Kumar
              </h1>
              <p className="mt-2 text-lg">
                I build modern, responsive web apps using modern day
                technologies.
              </p>

              {/* Social profiles */}
              <div className="flex justify-start gap-6 mt-8 mb-6 text-2xl">
                <a
                  href="https://www.linkedin.com/in/goutam-kumar-aa23a8257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accentEnd transition-transform duration-200 transform hover:-translate-y-1 hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Goutam1404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accentEnd transition-transform duration-200 transform hover:-translate-y-1 hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/gauthama_gk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accentEnd transition-transform duration-200 transform hover:-translate-y-1 hover:scale-110"
                >
                  <FaInstagram />
                </a>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <a
                  href="https://drive.google.com/file/d/1B9o7nQ4FW-QMrhXifPfu7xpOJe0jj7R0/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-accentStart to-accentEnd text-white px-4 py-2 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-[0_0_12px_#3b82f6] hover:scale-105"
                >
                  View Resume
                </a>
                <button
                  className="px-4 py-2 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-transparent transition-all duration-300 hover:bg-clip-text hover:bg-gradient-to-r hover:from-accentStart hover:to-accentEnd"
                  onClick={openGmailCompose}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
// {/* <div className="rounded-xl p-1 bg-gradient-border animate-float">
//   <div className="bg-secondary p-6 rounded-xl shadow-glass">
//     <div className="p-6 bg-glass shadow-soft backdrop-blur-md text-textLight rounded-xl animate-fadeInUp">
//       {/* Profile Image */}
//       <img
//         src="/profileImage.jpg" // Place profile.jpg in your public folder
//         alt="Profile"
//         className="w-40 h-40 rounded-full object-cover border-4 border-accent shadow-lg hover:scale-105 transition-transform duration-300"
//         onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
//       />

//       {/* Text Content */}
//       <div>
//         <h1 className="text-4xl font-bold text-accent">
//           Hi, I'm Goutam Kumar
//         </h1>
//         <p className="mt-2 text-lg">
//           I build modern, responsive web apps using React and Tailwind CSS.
//         </p>

//         {/* Social profiles */}
//         <div className="flex justify-start gap-6 mt-6 mb-4 text-2xl">
//           <a
//             href="https://www.linkedin.com/in/goutam-kumar-aa23a8257/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-accent hover:text-accentEnd transition"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://github.com/Goutam1404"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-accent hover:text-accentEnd transition"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.instagram.com/gauthama_gk/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-accent hover:text-accentEnd transition"
//           >
//             <FaInstagram />
//           </a>
//         </div>

//         {/*Buttons */}
//         <div className="mt-4 flex gap-4">
//           <a
//             href="https://drive.google.com/file/d/10gkLW0kUoIRCxaYgX4HYyWvYN9Yw_vKQ/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gradient-to-r from-accentStart to-accentEnd text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all shadow-md"
//           >
//             View Resume
//           </a>
//           <button
//             className="px-4 py-2 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
//             onClick={openGmailCompose}
//           >
//             Contact Me
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
