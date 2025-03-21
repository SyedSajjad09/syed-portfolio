import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial 
        link="https://www.linkedin.com/in/01syedsajjadhussain/" 
        Icon={FaLinkedinIn} 
        ariaLabel="LinkedIn Profile"
      />
      <SingleContactSocial 
        link="https://github.com/SyedSajjad09/" 
        Icon={FiGithub} 
        ariaLabel="GitHub Profile"
      />
      <SingleContactSocial 
        link="#" 
        Icon={FaInstagram} 
        ariaLabel="Instagram Profile"
      />
    </div>
  );
};

export default ContactSocial;
