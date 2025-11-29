// components/PageTransition.jsx
import { motion } from "framer-motion";
import kotoLogo from "../assets/images/koto-black.png";

const bgVariants = {
  initial: { y: "100%" },
  animate: {
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.49, 0.23, 0, 1],
    },
  },
  exit: {
    y: "-100%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.49, 0.23, 0, 1],
    },
  },
};

const logoVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.9,
      duration: 0.8,
      ease: [0.49, 0.23, 0, 1],
    },
  },
  exit: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: [0.49, 0.23, 0, 1],
    },
  },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={bgVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-[#ffe800] z-[100] flex items-center justify-center"
    >
      {/* Logo appears after bg animation */}
      <motion.img
        src={kotoLogo}
        alt="Logo"
        className="w-[100px] h-[50px]"
        variants={logoVariants}
        initial="initial"
        animate="animate"
      />
    </motion.div>
  );
}
