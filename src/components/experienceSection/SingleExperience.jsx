import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
    >
      <p className="text-2xl font-bold text-cyan-500">{experience.job}</p>
      <p className="text-orange-500">{experience.company}</p>
      <p className="text-gray-400">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-gray-300">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;