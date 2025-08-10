import React from "react";
import { GitHubURL, LinkedInURL } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id = "contact" className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue-100 rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
      >
        {/* Left Side - Contact Info */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-900">Let’s Connect</h2>
          <p className="text-gray-700 mt-2 max-w-lg mx-auto lg:mx-0">
            If you want to collaborate, hire me, or talk stocks — drop me a
            message or email.
          </p>
          <p className="text-lg font-semibold mt-3 text-blue-700">
            jainhimanshu@live.com
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a
              href={LinkedInURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={GitHubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Message sent! (Integrate EmailJS, Formspree, or your backend API here)"
            );
          }}
          className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
        >
          <input
            type="text"
            placeholder="Your message..."
            className="px-4 py-2 rounded-lg border border-gray-300 flex-1 sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-5 py-2 bg-blue-950 text-white rounded-lg shadow-md hover:bg-blue-800 transition-all"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
