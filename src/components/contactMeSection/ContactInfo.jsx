import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="text-center space-y-3">
        <SingleInfo text="syedsajjadhussain014@gmail.com" Image={HiOutlineMail} />
        <SingleInfo text="+91 7699507589" Image={FiPhone} />
        <SingleInfo text="Asansol, West Bengal, India" Image={IoLocationOutline} />
      </div>
    </div>
  );
};

export default ContactInfo;
