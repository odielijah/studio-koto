import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Collaborations({ filters, categories }) {
  const [active, setActive] = useState("Partners");

  const currentList = categories[active] || [];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05, // staggered rows/elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.25 } },
  };

  return (
    <div className="container">
      {/* filters */}
      <div className="logos-filter text-[11px] space-mono">
        <ul className="flex flex-wrap gap-[4px] mt-[24px]">
          {filters.map((filter) => (
            <li key={filter}>
              <button
                onClick={() => setActive(filter)}
                className={`border py-[5px] uppercase transition-all duration-300 px-[16px] rounded-[9999px] ${
                  active === filter
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* animated grid */}
      <div className="mt-8 pt-[54px] pb-[102px] flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active} // important for exit/enter
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-evenly items-center flex-wrap w-full max-md:grid max-md:grid-cols-2 max-md:gap-[20px] gap-0 max-w-[1130px]"
          >
            {currentList.length > 0 ? (
              currentList.map((partner) => (
                <motion.img
                  key={partner.name}
                  src={partner.image}
                  className="w-full max-w-[240px] mx-auto"
                  variants={itemVariants}
                />
              ))
            ) : (
              <motion.p
                variants={itemVariants}
                className="text-[20px] opacity-70 text-center w-full gt-th"
              >
                No partners here yet. Check back soon.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
