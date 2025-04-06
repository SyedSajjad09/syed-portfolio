import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="relative group w-[320px] h-[320px] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/5 border-t border-t-white/10 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105"
      >
      
        <img
          src="/images/email-image.png"
          alt="email illustration"
          className="relative z-10 object-contain w-full h-full p-2"
        />

    
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-400 via-pink-400 to-yellow-300 opacity-5 blur-md group-hover:opacity-15 transition duration-700 z-0" />


        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-white opacity-5 rounded-full blur-xl animate-ping z-0" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full"
      >
        <ContactInfo />
        <ContactSocial />
      </motion.div>
    </motion.div>
  );
};

export default ContactMeRight;
