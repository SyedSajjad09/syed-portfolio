import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Know-Weather",
    year: "2024",
    align: "right",
    image: "/images/p1.png", // ✅ Corrected Image Path
    link: "https://syeds-know-weather.netlify.app/",
  },
  {
    name: "See-My-Expenses",
    year: "2024",
    align: "left",
    image: "/images/p2.png",
    link: "https://see-my-expenses.netlify.app/",
  },
  {
    name: "Syed-s-To-Do-List",
    year: "2024",
    align: "right",
    image: "/images/p3.png",
    link: "https://syeds-to-do.netlify.app/",
  },
  {
    name: "Recipe-Finder",
    year: "2025",
    align: "left",
    image: "/images/p4.png",
    link: "https://recipe-finder-mu-sable.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // ✅ Fixed: Now passing link
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
