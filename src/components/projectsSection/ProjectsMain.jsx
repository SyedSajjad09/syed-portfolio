import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Know-Weather",
    year: "2024",
    align: "right",
    image: "/images/p1.png",
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
  {
    name: "Syed's Portfolio",
    year: "2025",
    align: "right", 
    image: "/images/ssh-portfolio.png", 
    link: "https://syed-sh-portfolio.vercel.app/",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      {/* Section heading animation */}
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <ProjectsText />
      </motion.div>

      {/* Projects list with animated entries */}
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <SingleProject
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
