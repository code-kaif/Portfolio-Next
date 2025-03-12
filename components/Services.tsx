"use client";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
// Define the type for a service box
interface ServiceBoxProps {
  icon: ReactElement;
  title: string;
  description: string;
}

// ServiceBox component
const ServiceBox = ({ icon, title, description }: ServiceBoxProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="mb-4 text-4xl text-gray-500">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-start md:text-center text-gray-600">
        {description}
      </p>
    </div>
  );
};

// Services page
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="min-h-screen md:py-20 py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
    >
      <div className="md:max-w-[80vw] md:min-w-[50vw] min-w-[90vw] mx-auto">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl font-bold text-center text-gray-800 my-3"
        >
          My Services
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[16px] font-medium text-center text-gray-800 my-5"
        >
          Need a stunning website, a powerful web app, or a seamless user
          experience? I specialize in creating modern, responsive, and
          high-performance solutions tailored to your needs.
        </motion.p>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ServiceBox
            icon={<FontAwesomeIcon icon={faCode} />}
            title="MERN Stack Development"
            description="Full-stack development using MongoDB, Express.js, React, and Node.js."
          />
          <ServiceBox
            icon={<FontAwesomeIcon icon={faMobileAlt} />}
            title="Mobile App Development"
            description="Building cross-platform mobile applications with React Native."
          />
          <ServiceBox
            icon={<FontAwesomeIcon icon={faGlobe} />}
            title="Advanced Web Development"
            description="Modern web development using Next.js and TypeScript."
          />
          <ServiceBox
            icon={<FontAwesomeIcon icon={faWordpress} />}
            title="WordPress Development"
            description="Custom WordPress themes and plugins for your business."
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
