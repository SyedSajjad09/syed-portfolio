import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Syed Sajjad is a highly skilled and ambitious developer with expertise in DSA, web development, system design, and advanced AI integrations. He excels in Next.js, React, Node.js, Prisma, PostgreSQL, and Redux, building world-class, scalable applications. His deep understanding of OS, DBMS, CN, and OOPs makes him a strong problem-solver. Syed is passionate about creating industry-level projects with high performance, clean architecture, and cutting-edge technologies, ensuring error-free, optimized, and innovative solutions aligned with 2025 tech trends.
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
