"use client";
import { motion } from "framer-motion";
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center my-5"
      >
        <h1 className="font-bold text-4xl mb-2">Kaif</h1>
        <div className="flex items-center gap-2 bg-gray-200 px-10 py-2 rounded-full">
          <Image src={assets.mail_icon} className="w-5 h-4" alt="" />
          <p className="font-medium">kaif98747@gmail.com</p>
        </div>
      </motion.div>
      <div className="w-full flex items-center justify-between py-5 border-t border-black">
        <p className="md:text-lg text-sm">
          &#169; 2025 Kaif. All rights reserved
        </p>
        <div className="flex items-center md:gap-5 gap-2">
          <a
            href="https://github.com/code-kaif"
            className="hover:-translate-y-1 hover:scale-105 duration-200"
            target="_blank"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/kaif.jsx"
            className="hover:-translate-y-1 hover:scale-105 duration-200"
            target="_blank"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaif-93543a222/"
            className="hover:-translate-y-1 hover:scale-105 duration-200"
            target="_blank"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
