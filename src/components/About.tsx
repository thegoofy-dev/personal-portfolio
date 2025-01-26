import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import React from "react";

// Functional component with TypeScript
const About: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-thin"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>

      <div className="flex flex-wrap">
        {/* Image section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <img 
              src={aboutImg} 
              alt="about" 
              className="rounded-2xl" 
            />
          </motion.div>
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center px-4 lg:px-0 lg:justify-start"
          >
            <p className="text-gray-400 my-2 max-w-xl py-16 font-tight tracking-tighter text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
