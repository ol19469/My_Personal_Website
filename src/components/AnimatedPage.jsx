import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const transition = { duration: 0.6, ease: "easeInOut" };

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
