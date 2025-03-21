import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange-500 font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
          -
        </p>
        <ExperienceInfo number="15+" text="Projects" />
      </div>
      <p className="text-gray-400 text-center">
      I’ve spent the past three years learning and building in web development, gaining hands-on experience with React.js, Next.js, Tailwind CSS, TypeScript, and backend technologies. Passionate about creating efficient, scalable applications, I continuously explore new technologies and improve my skills.
      </p>
      {/* <ExperienceInfo number="" text="Earnings" /> */}
    </div>
  );
};

export default ExperienceTopLeft;