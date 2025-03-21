import { education } from "./data/educationData";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const EducationSection = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="mt-20"
    >
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Education</h2>
        <p className="text-lg text-center text-gray-400">
          My academic journey and achievements.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.3 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <h4 className="text-2xl font-bold text-blue-400">{edu.degree}</h4>
            <p className="text-gray-400 mt-2">{edu.board || edu.university}</p>
            <p className="text-gray-400">{edu.year}</p>
            <p className="text-blue-300 mt-4 font-semibold">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationSection;