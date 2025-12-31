"use client";

import Image from "next/image";
import { TMainProjects } from "../constants/type";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const MainProjects = ({ project }: { project: TMainProjects }) => {
  return (
    <motion.div
      className="bg-white h-auto dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      viewport={{ once: true }}
    >
      {/* Project Image */}
      <motion.div
        className="relative h-48 w-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          placeholder="blur"
        />
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Project Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-gray-900 dark:text-white mb-2"
          whileHover={{ color: "#2563eb" }}
          transition={{ duration: 0.2 }}
        >
          {project.name}
        </motion.h3>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-4"
          whileHover={{ color: "#2F68B2" }}
          transition={{ duration: 0.2 }}
        >
          {project.description}
        </motion.p>

        {/* Tags */}
        <div className="flex justify-center items-center flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-xs font-medium px-2.5 py-0.5 rounded"
              style={{ backgroundColor: tag.color }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {tag.name}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-center space-x-6">
          {project.github_repo && (
            <motion.a
              href={project.github_repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="mr-2 text-lg" />
              <span className="font-medium">View Code</span>
            </motion.a>
          )}
          {project.remote_url && (
            <motion.a
              href={project.remote_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink className="mr-2 text-lg" />
              <span className="font-medium">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MainProjects;
