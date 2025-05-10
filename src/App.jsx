import React, {useEffect} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
function App() {
  useEffect(() => {
    // Prevent browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Optional: Custom scroll if there's a hash in URL
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); // Give time for layout/animations to settle
    }
  }, []);
  

  return (
    <>
      <div className="relative min-h-screen text-textLight overflow-x-hidden">
        {/* Moving stars background */}
        <div
          className="fixed w-full h-[2000px] bg-cover bg-repeat opacity-50 brightness-200 animate-moveStars"
          style={{
            backgroundImage: "url(/stars.jpg)",
          }}
        ></div>

        <div className="bg-black/95 text-textLight min-h-screen px-4 sm:px-6 md:px-8 lg:px-20 py-6  ">
          <div className="max-w-6xl mx-auto">
            <Navbar />
            <section
              id="hero"
              className="my-8 p-4 rounded-xl backdrop-blur-md bg-glass shadow-glass transition-all duration-500 animate-fade scroll-mt-24 delay-200 animate-bounceIn"
            >
              <Home />
            </section>
            <section className="my-8 p-4 rounded-xl backdrop-blur-md bg-glass shadow-glass transition-all duration-500 animate-fade scroll-mt-24 delay-200 animate-bounceIn">
              <About />
            </section>
            <section
              
              className="my-8 p-4 rounded-xl backdrop-blur-md bg-glass scroll-mt-24  shadow-glass transition-all duration-500 animate-fade delay-200 animate-bounceIn"
            >
              <Projects />
            </section>
            <section className="my-8 p-4 rounded-xl backdrop-blur-md bg-glass shadow-glass transition-all duration-500 animate-fade scroll-mt-24 delay-200 animate-bounceIn">
              <Skills />
            </section>
            <section className="my-8 p-4 rounded-xl backdrop-blur-md bg-glass shadow-glass transition-all duration-500 animate-fade scroll-mt-24 delay-200 animate-bounceIn">
              <Contact />
            </section>
            <Footer />
            <ScrollButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
