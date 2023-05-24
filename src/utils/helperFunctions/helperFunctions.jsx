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
  <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    {element}
  </motion.div>
);
