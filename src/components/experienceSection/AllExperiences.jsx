import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { highlights } from "./data/experienceData";

const AllExperiences = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
      {highlights.map((highlight, index) => (
        <motion.div
          variants={fadeIn("up", 0.2 * index)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            {highlight.title}
          </h3>
          <ul className="text-gray-300">
            {highlight.description.map((point, i) => (
              <li key={i} className="mb-2 flex items-center">
                <span className="mr-2">•</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default AllExperiences;