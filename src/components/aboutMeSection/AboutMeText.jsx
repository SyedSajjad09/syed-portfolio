import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
  Syed Sajjad is a passionate and forward-thinking developer with deep expertise in Data Structures & Algorithms, full-stack web development, and modern system design. Proficient in Next.js, React, Node.js, Prisma, PostgreSQL, and Redux, he crafts scalable, high-performance applications with clean architecture and seamless user experiences. His solid foundation in core CS subjects like Operating Systems, DBMS, Computer Networks, and OOP empowers him to solve complex problems efficiently. With a strong focus on innovation and quality, Syed builds production-ready, AI-integrated solutions that align with the evolving tech landscape of 2025.
</p>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
