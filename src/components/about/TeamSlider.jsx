import { AnimatePresence, motion } from "framer-motion";

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
        {member ? (
          <motion.img
            key={member.slideImage || member.name} // fallback in case slideImage is undefined
            src={member.slideImage}
            alt={member.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-auto object-cover"
          />
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full bg-black/40"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
