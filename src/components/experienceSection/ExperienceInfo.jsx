const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
        {number}
      </p>
      <p className="font-bold text-xl text-gray-400 uppercase -mt-4">{text}</p>
    </div>
  );
};

export default ExperienceInfo;