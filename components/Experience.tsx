"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    position: "Web Developer",
    company: "Zoom Enterprises",
    duration: "Sep 2024 - Nov 2024",
    description:
      "Worked on developing and maintaining web applications using the MERN stack. Implemented scalable features and optimized performance for better user experience.",
  },
  {
    id: 2,
    position: "App Developer",
    company: "Zoom Enterprises",
    duration: "Dec 2024 - Feb 2025",
    description:
      "Developed and optimized mobile applications using React Native and TypeScript, ensuring a seamless user experience and robust performance.",
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center md:py-24 py-28 px-4 sm:px-6 lg:px-8"
    >
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        Experience
      </motion.h1>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg text-gray-700 md:max-w-[80vw] md:min-w-[50vw] min-w-[90vw] text-center mb-12"
      >
        During my 6-month internship at Zoom Enterprises (Sep 2024 – Feb 2025),
        I worked as a Full-Stack Developer, focusing on MERN stack web
        development and React Native app development with TypeScript. I
        contributed to building dynamic web applications, developing RESTful
        APIs, and optimizing user experiences. On the mobile side, I helped
        create cross-platform applications, ensuring smooth performance and
        responsiveness.
      </motion.p>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-[80vw] md:min-w-[50vw] min-w-[90vw]"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBriefcase className="text-gray-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-900">
                {exp.position}
              </h2>
            </div>
            <p className="text-gray-700 font-medium text-lg mb-1">
              {exp.company}
            </p>
            <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
