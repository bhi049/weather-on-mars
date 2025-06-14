import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 50,
  once = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration, delay }}
      viewport={{ once, amount: 0.2}}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;