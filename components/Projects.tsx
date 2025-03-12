"use client";
import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Futurix Coaching App",
      description:
        "AI-Powered Coaching Mobile App there student just write a subject name and ai will create a course.",
      image:
        "data:image/jpeg;base64,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",
      previewLink: "https://futurixcoaching.vercel.app/",
      sourceCodeLink: "https://github.com/code-kaif/AI-LMS.git",
    },
    {
      id: 2,
      title: "Food Delivery Web App",
      description:
        "A food delivery app with Stripe payment gateway and an admin dashboard for managing orders and menus.",
      image:
        "https://www.gloriafood.com/wp-content/uploads/2021/03/How_to_Improve_Your_Food_Delivery_Service_in_2022_-_fb.png",
      previewLink: "https://parmal-frontned.onrender.com/",
      sourceCodeLink: "https://github.com/code-kaif/Food.git",
    },
    {
      id: 3,
      title: "AI Image Generator",
      description:
        "An AI-powered text-to-image generator with beautiful animations and a user-friendly interface.",
      image:
        "https://cdn.mos.cms.futurecdn.net/cVEwYismnFpRHpPkEavyMG-1020-80.png",
      previewLink: "https://texttoimagegen.onrender.com/",
      sourceCodeLink: "https://github.com/code-kaif/AiTextToImageGenerator.git",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
    >
      <div className="md:min-w-[60vw] md:max-w-[80vw] min-w-[90vw] w-full mx-auto">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl font-bold text-center text-gray-900 mb-8"
        >
          My Projects
        </motion.h1>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Preview
                  </a>
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
