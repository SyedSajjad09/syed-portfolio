import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import EducationSection from "./EducationSection";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 py-20">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 mt-8 bg-gradient-to-r from-orange-500 to-cyan-500 lg:block sm:hidden"></div>
      <AllExperiences />
      <EducationSection />
    </div>
  );
};

export default ExperienceMain;