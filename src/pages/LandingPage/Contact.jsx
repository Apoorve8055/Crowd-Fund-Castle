import { motion } from "framer-motion";
import { MdLocationPin, MdOutlineEmail, MdPhonelinkRing } from "react-icons/md";
import {
  motionHoverScale,
  renderInput,
  renderTextArea,
} from "../../utils/helperFunctions/helperFunctions";

const Contact = () => {
  return (
    <section
      id="contact"
      className="lg:h-screen flex flex-col md:flex-row justify-around p-4 lg:pt-16 bg-light-backgroundColor text-dark-cardBgColor"
    >
      <div className="sm:mr-8">
        <div className="font-bold text-2xl sm:text-3xl pt-6 sm:pt-16 text-center">
          Get in touch
        </div>
        <div className="py-8 text-center">
          Get in touch and let us know how we can help.
        </div>
        <div className="flex flex-col gap-4 py-4">
          {renderContactItem(
            MdLocationPin,
            "Address",
            "4339 Blackwell StWaco, TX 76705, USA"
          )}
          {renderContactItem(MdPhonelinkRing, "Phone", "+1(555)123-4567")}
          {renderContactItem(MdOutlineEmail, "Email", "johndoe1234@gmail.com")}
        </div>
      </div>
      <div className="flex flex-col py-4 gap-4">
        <div className="font-bold text-2xl sm:text-3xl pt-4 sm:pt-10 text-center">
          Contact Us
        </div>
        <div className="py-4 text-center">
          We love to talk about how we can work together.
        </div>
        <div className="flex flex-wrap py-4 gap-4">
          {renderInput("Enter Full Name", "text")}
          {renderInput("Enter Your Email", "email")}
          {renderTextArea("Enter Your Message")}
        </div>
        <div className="flex justify-center">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-full py-2 font-bold text-dark-primaryTextColor bg-dark-cardBgColor border border-y-dark-secondaryTextColor rounded-lg cursor-pointer hover:bg-light-backgroundColor hover:text-dark-backgroundColor transition duration-300 ease-in-out"
          >
            Submit
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const renderContactItem = (Icon, label, text) =>
  motionHoverScale(
    <div className="flex border">
      <div className="border-r-[1px] flex justify-center items-center p-4">
        <Icon size={60} />
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-xl p-4">{label}</div>
        <div className="px-4">{text}</div>
      </div>
    </div>
  );

export default Contact;
