"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { TRealWorldExperience } from "../constants/type";

interface ExperienceCardProps {
  experience: TRealWorldExperience;
  index: number;
}

const RealWorldExperienceCard = ({
  experience,
  index,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row items-center ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content */}
      <div
        className={`md:w-1/2 p-6 rounded-lg bg-gray-800 shadow-sm border border-gray-700 ${
          index % 2 === 0 ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 text-blue-300">
            <FiBriefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {experience.role}
            </h3>
            <p className="text-blue-400">{experience.company}</p>
          </div>
        </div>

        {experience.location && (
          <div className="flex items-center text-gray-400 text-sm mb-3">
            <FiMapPin className="mr-1" />
            {experience.location}
          </div>
        )}

        <ul className="space-y-2 mt-4">
          {experience.responsibilities.map((responsibility, i) => (
            <li key={i} className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              <span className="text-gray-300">{responsibility}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <span className="inline-block bg-gray-700 text-gray-200 text-xs px-2.5 py-1 rounded-full">
            {experience.type}
          </span>
        </div>
      </div>

      {/* Timeline dot (Desktop) */}
      <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white items-center justify-center font-bold mx-6 relative z-10">
        {index + 1}
      </div>

      {/* Empty div for alignment */}
      <div className="md:w-1/2"></div>
    </motion.div>
  );
};

export default RealWorldExperienceCard;
