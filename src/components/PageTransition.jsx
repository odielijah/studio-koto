// components/PageTransition.jsx
import { motion } from "framer-motion";

const transitionVariants = {
  initial: { y: "100%", opacity: 1 },
  animate: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
  exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-[#ffe800] z-[100]"
    >
      {children}
    </motion.div>
  );
}
