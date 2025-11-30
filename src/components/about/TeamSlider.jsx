import { motion, AnimatePresence } from "framer-motion";

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function TeamSlider({ slides, activeIndex }) {
  const member = slides[activeIndex];

  return (
    <div
      className="
        w-full 
        max-w-[404px] 
        h-auto
        max-[574px]:max-w-full 
        bg-white/10 
        overflow-hidden 
        flex items-center justify-center 
        relative
      "
    >
      <AnimatePresence mode="sync">
        {member?.slideImage ? (
          <motion.img
            key={member.slideImage}
            src={member.slideImage}
            loading="lazy"
            alt={member.name}
            className="w-full h-auto object-cover absolute inset-0"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        ) : (
          <motion.div
            key="empty"
            className="w-full h-full bg-black/40 absolute inset-0"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
