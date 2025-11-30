import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence mode="wait">
        {member?.slideImage ? (
          <motion.img
            key={activeIndex}
            src={member.slideImage}
            alt={member.name}
            className="w-full h-auto object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ) : (
          <motion.div
            key={`empty-${activeIndex}`}
            className="w-full h-full bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
