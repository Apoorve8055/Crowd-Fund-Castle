import { motion } from "framer-motion";
import { MdLocationPin, MdOutlineEmail, MdPhonelinkRing } from "react-icons/md";
import { motionHoverScale } from "../../utils/helperFunctions/helperFunctions";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col sm:flex-row justify-around p-4"
    >
      <div>
        <div className="font-bold text-2xl sm:text-3xl pt-6 sm:pt-36">
          Get in touch
        </div>
        <div className="py-8">
          Get in touch and let us know how we can help.
        </div>
        <div className="flex flex-col gap-2 py-4">
          {renderContactItem(
            MdLocationPin,
            "Address",
            "4339 Blackwell StWaco, TX 76705, USA"
          )}
          {renderContactItem(MdPhonelinkRing, "Phone", "+1(555)123-4567")}
          {renderContactItem(MdOutlineEmail, "Email", "johndoe1234@gmail.com")}
        </div>
      </div>
      <div className="">
        <div className="flex flex-col py-4 gap-4">
          <div className="font-bold text-2xl sm:text-3xl pt-4 sm:pt-32">
            Contact Us
          </div>
          <div className="py-4">
            We love to talk about how we can work together.
          </div>
          <div className="flex flex-wrap py-4 gap-4">
            {renderInput("Enter Full Name", "text")}
            {renderInput("Enter Your Email", "email")}
            {renderTextArea("Enter Your Message")}
          </div>
          <div className="flex justify-center items-center">
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

const renderInput = (placeholder, type) => (
  <input
    type={type}
    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
    placeholder={placeholder}
  />
);

const renderTextArea = (placeholder) => (
  <textarea
    placeholder={placeholder}
    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
    rows="4"
  ></textarea>
);

export default Contact;
