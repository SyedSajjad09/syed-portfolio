const NavbarLogo = () => {
  return (
    <div className="flex flex-col items-center">
  
      <h1 className="text-white text-xl sm:hidden md:block">
        Syed Sajjad Hussain
      </h1>

  
      <h1 className="text-white font-special font-extrabold text-xl sm:text-2xl md:hidden sm:block">
  SSH 
</h1>
<a
    href="public\images\syed-resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="relative px-4 py-2 text-white font-semibold text-sm uppercase tracking-wide 
      bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
      shadow-[0_2px_6px_rgba(0,0,0,0.2),0_6px_20px_rgba(0,0,255,0.4)] 
      transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3),0_10px_30px_rgba(0,0,255,0.6)] 
      before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:opacity-15 before:blur-xl 
      after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
  >
    📄 Resume
  </a>

    </div>
  );
};

export default NavbarLogo;
