import { motion } from "framer-motion";
export const motionHoverScale = (element, props) => (
  <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    {element}
  </motion.div>
);
export const motionHoverAndTap = (element, props) => (
  <motion.button
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    {element}
  </motion.button>
);

export const renderInput = (placeholder, type) => (
  <input
    type={type}
    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
    placeholder={placeholder}
  />
);

export const renderTextArea = (placeholder) => (
  <textarea
    placeholder={placeholder}
    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
    rows="4"
  ></textarea>
);
