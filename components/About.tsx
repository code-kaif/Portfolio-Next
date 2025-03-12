"use client";
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import { LuBrain } from "react-icons/lu";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="min-h-screen flex flex-col items-center justify-center md:py-12 py-28 px-4 sm:px-6 lg:px-8"
    >
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg text-gray-700 md:max-w-[80vw] md:min-w-[50vw] min-w-[90vw] text-center mb-12"
      >
        I am a passionate Full Stack Web and App Developer with expertise in
        building modern, scalable, and user-friendly applications. My skill set
        spans across the MERN stack (MongoDB, Express.js, React, Node.js),
        Next.js for server-rendered React applications, React Native for
        cross-platform mobile app development, and TypeScript for robust and
        type-safe code.
      </motion.p>

      {/* Boxes Container */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:max-w-[80vw] md:min-w-[50vw] min-w-[90vw]"
      >
        {/* Education Box - Comes from the left */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <Image src={assets.edu_icon} className="w-6 h-6 my-2" alt="" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Education
          </h2>
          <p className="text-gray-700">
            I am currently in my 3rd year of Bachelor of Computer Applications
            (BCA).
          </p>
        </div>

        {/* Programming Languages Box - Comes from the top */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <Image src={assets.code_icon} className="w-6 h-6 my-2" alt="" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Languages
          </h2>
          <p className="text-gray-700">
            Javascript, ReactJs, Typescript, NodeJs, NextJs, React-Native, Php,
            Sql.
          </p>
        </div>

        {/* Logic Box - Comes from the right */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <LuBrain className="w-6 h-6 my-2 opacity-50" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Logic</h2>
          <p className="text-gray-700">
            Completed 160+ leetcode problems with all important topics like
            Array, String, LinkedList, Stack, Queue, Tree.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
