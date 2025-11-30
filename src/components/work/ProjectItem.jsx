import { motion, AnimatePresence } from "framer-motion";

export default function ProjectItem({ item, index, visible }) {
  const gridClass = `grid-space-${(index % 4) + 1}`;
  const isVideo = item.video;
  const isImage = item.image;

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          data-orientation={item.orientation}
          className={`project-item ${gridClass} group relative overflow-hidden bg-gray-700`}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.6, delay: index * 0.05 }}
        >
          {isVideo && (
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}

          {isImage && (
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </motion.a>
      )}
    </AnimatePresence>
  );
}
