import { memo } from "react";
import { motion } from "framer-motion";
import avatarOne from "../../assets/avatar-1.png";
import avatarTwo from "../../assets/avatar-2.png";
import avatarThree from "../../assets/avatar-3.png";

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

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className=" bg-dark-backgroundColor flex flex-col items-center text-light-backgroundColor mt-24 py-28"
    >
      <div className="font-bold text-2xl sm:text-3xl p-4">
        What our client's say
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row gap-24 sm:gap-8 pt-36 sm:py-36 mx-4 justify-center">
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
  );
};

export default memo(Testimonials);
