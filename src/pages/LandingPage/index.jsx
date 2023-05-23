import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

import avatarOne from "../../assets/avatar-1.png";
import avatarTwo from "../../assets/avatar-2.png";
import avatarThree from "../../assets/avatar-3.png";
import { MdLocationPin, MdOutlineEmail, MdPhonelinkRing } from "react-icons/md";
import Hero from "./Hero";
import HowItWork from "./HowItWork";

const testimonials = [
  {
    id: 1,
    name: "Jane Smith",
    img: avatarOne,
    comment:
      "I had a great experience with Crowd Fund Castle. They provided excellent support and helped me find the perfect real estate project for investment.",
  },
  {
    id: 2,
    name: "John Doe",
    img: avatarTwo,
    comment:
      "Crowd Fund Castle has been a game-changer for me. Their platform is user-friendly, and I love how they provide detailed project information. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    img: avatarThree,
    comment:
      "I've been using Crowd Fund Castle for my real estate investments, and I couldn't be happier. The team is professional, and their projects offer attractive returns. A trustworthy platform.",
  },
];

const LandingPage = () => {
  const [activeMenu, setActiveMenu] = useState("hero");

  const onScrollToPageSection = (menuItem) => {
    setActiveMenu(menuItem);
    document.getElementById(menuItem).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero
        activeMenu={activeMenu}
        onScrollToPageSection={onScrollToPageSection}
      />
      <HowItWork />

      <section
        id="testimonials"
        className=" bg-dark-backgroundColor flex flex-col items-center text-light-backgroundColor mt-24 py-28"
      >
        <div className="font-bold text-2xl sm:text-3xl p-4">
          What our client's say
        </div>
        <div className="flex flex-col sm:flex-row gap-24 sm:gap-4 pt-36 sm:py-36 mx-4">
          {testimonials &&
            testimonials.map((item) => (
              <div className="flex flex-col bg-light-cardBgColor text-dark-backgroundColor w-80 sm:w-96 rounded-lg shadow-custom mx-6">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={item.img}
                  className="w-40 relative place-self-center -top-20 "
                />
                <div className="px-4 relative -top-10">"{item.comment}"</div>
                <div className="p-4 font-bold">~ {item.name}</div>
              </div>
            ))}
        </div>
      </section>

      <section
        id="contact"
        className=" flex flex-col sm:flex-row justify-around p-4"
      >
        <div>
          <div className="font-bold text-2xl sm:text-3xl pt-6 sm:pt-36">
            Get in touch
          </div>
          <div className="py-8 ">
            Get in touch and let us know how we can help.
          </div>
          <div className="flex flex-col gap-2 py-4 ">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="flex border"
            >
              <div className="border-r-[1px] flex justify-center items-center p-4">
                <MdLocationPin size={60} />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-xl p-4">Address</div>
                <div className="px-4">4339 Blackwell StWaco, TX 76705, USA</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="flex border"
            >
              <div className="border-r-[1px] flex justify-center items-center p-4">
                <MdPhonelinkRing size={60} />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-xl p-4">Phone</div>
                <div className="px-4">+1(555)123-4567</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="flex border"
            >
              <div className="border-r-[1px] flex justify-center items-center p-4">
                <MdOutlineEmail size={60} />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-xl p-4">Email</div>
                <div className="px-4">johndoe1234@gmail.com</div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col py-4 gap-4">
            <div className="font-bold text-2xl sm:text-3xl pt-4 sm:pt-32 ">
              Contact Us
            </div>
            <div className="py-4 ">
              We love to talk about how we can work together.
            </div>
            <div className="flex flex-wrap py-4 gap-4">
              <input
                type="text"
                className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
                placeholder="Enter Full Name"
              />
              <input
                type="email"
                className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
                placeholder="Enter Your Email"
              />

              <textarea
                placeholder="Enter Your Message"
                className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
                rows="4"
              ></textarea>
            </div>

            <div className="flex justify-center items-center ">
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
      <Footer />
    </div>
  );
};

export default LandingPage;
