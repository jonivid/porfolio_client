// components/AboutMe.js
"use client"; // This makes the component a client-side component

import { motion } from "framer-motion";

export default function About() {
  return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl mx-auto p-8 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          I am Yehonatan Vidal, a dedicated Full Stack Web Developer with a
          passion for building efficient, scalable web applications that solve
          real-world problems. With expertise in both frontend and backend
          technologies, I enjoy crafting intuitive user interfaces while
          ensuring robust, secure backend systems. I thrive on solving complex
          challenges and translating product ideas into seamless digital
          solutions.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Over the past 3 years, I have honed my skills across a range of
          technologies including React, Node.js, Express, and Python, along with
          cloud services like AWS. My approach to development is rooted in a
          strong understanding of performance optimization, responsive design,
          and user-centric features. I believe in using technology to create
          meaningful, scalable platforms that enhance business operations and
          improve user experiences.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          In my current role at Makor Group, I played a key part in developing a
          comprehensive trading platform that transformed broker operations,
          improving trade management efficiency by 30-40%. Through seamless
          integration of APIs like Bloomberg and Markit, and optimizing UI
          performance, I was able to deliver a product that significantly
          reduced reliance on external services and increased operational
          accuracy.
        </p>
        <p className="text-lg text-gray-700">
          Whether working independently or as part of a team, I’m committed to
          staying at the cutting edge of technology and continuously evolving my
          skills to meet the ever-changing demands of the industry.
        </p>
      </motion.div>
  );
}
