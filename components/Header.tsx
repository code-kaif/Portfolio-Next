"use client";
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      id="home"
      className="pt-16 w-full min-h-screen flex items-center justify-center flex-col relative overflow-hidden"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.me} alt="" className="w-28 h-28 rounded-full z-10" />
      </motion.div>

      {/* Title and Description */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="my-5 md:text-2xl text-xl z-10"
      >
        Hi, I am Kaif 👋
      </motion.h2>
      <div className="flex flex-col items-center space-y-1 z-10">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:text-4xl text-2xl text-center"
        >
          Full Stack Web and App Developer
        </motion.h1>
      </div>
      <div className="flex flex-col items-center text-md md:text-xl my-5 md:max-w-[70vw] max-w-[80vw] space-y-2 mb-10 z-10">
        <motion.p
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="md:text-center text-start"
        >
          I am a Full Stack Developer with a strong focus on building scalable,
          user-friendly web and mobile applications. With expertise in front-end
          and back-end technologies, I thrive on solving complex problems and
          turning ideas into functional, elegant solutions.
        </motion.p>
      </div>

      {/* Buttons */}
      <div className="flex md:flex-row flex-col gap-5 z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-2 cursor-pointer bg-black px-6 py-2 rounded-full duration-300 hover:transition-all hover:-translate-y-1"
        >
          <a href="#contact" className="text-[15px] font-medium text-white">
            Contact Me
          </a>
          <Image src={assets.right_arrow_white} alt="" className="w-3 h-3" />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-2 cursor-pointer border border-gray-400 px-6 py-2 rounded-full duration-300 hover:transition-all hover:-translate-y-1"
        >
          <a href="./kaif.pdf" download className="text-[15px] font-medium">
            My Resume
          </a>
          <Image src={assets.download_icon} alt="" className="w-3 h-3" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
