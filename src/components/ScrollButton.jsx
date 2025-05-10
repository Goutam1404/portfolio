import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollStepUp = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
    // window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      setShowButton(window.scrollY > heroBottom - 100); // Adjust trigger buffer
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <button
      onClick={scrollStepUp}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-accentStart to-accentEnd text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300 animate-fadeIn"
      title="Scroll up"
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollButton;

// import React, { useState, useEffect } from "react";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";

// const ScrollButton = () => {
//   const [atBottom, setAtBottom] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const nearBottom =
//         window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
//       setAtBottom(nearBottom);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = () => {
//     if (atBottom) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//     }
//   };

//   return (
//     <button
//       onClick={scrollTo}
//       className="fixed bottom-5 right-5 z-50 rounded-full p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 shadow-lg hover:scale-105 transition-all duration-300 text-white"
//     >
//       {atBottom ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
//     </button>
//   );
// };

// export default ScrollButton;
