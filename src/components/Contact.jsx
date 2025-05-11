import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could send this to a backend or use EmailJS here
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="rounded-xl p-[1px] sm:p-1 bg-gradient-border animate-float my-8">
      <div className="bg-secondary p-6 rounded-xl shadow-glass text-textLight">
        <h2 className="text-2xl font-bold mb-2 text-gradient">Let’s Connect</h2>
        <p className="mb-6 text-textLight text-sm">
          Have questions or want to collaborate? I’d love to hear from you—just
          drop a message below!
        </p>

        {submitted ? (
          <p className="text-green-400 font-medium">
            ✅ Thanks for your message! I’ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-primary text-textLight border border-accent focus:outline-none focus:ring focus:ring-accent"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-primary text-textLight border border-accent focus:outline-none focus:ring focus:ring-accent"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-primary text-textLight border border-accent focus:outline-none focus:ring focus:ring-accent"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-accentStart to-accentEnd text-white py-2 rounded-md hover:opacity-90 transition-all shadow-md"
            >
              Send Message
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-textLight text-center">
          Prefer email type{" "}
          <a
            // href="mailto:youremail@example.com"
            className="text-accent underline hover:text-accentEnd"
          >
            Portfolio@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
