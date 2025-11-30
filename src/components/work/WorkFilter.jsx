import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WorkFilter({
  categories,
  filter,
  setFilter,
  visibleCount,
}) {
  const [mobileActive, setMobileActive] = useState(false);

  // Sync mobile overlay with filter changes
  useEffect(() => {
    const filterEl = document.querySelector(".work-filter");
    if (mobileActive) {
      filterEl.classList.add("active");
    } else {
      filterEl.classList.remove("active");
    }
  }, [mobileActive]);

  const handleCategoryClick = (cat) => {
    setFilter(cat);
    setMobileActive(false); // immediately close overlay on click
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="work-module">
        {/* Mobile Filter */}
        <p
          className="mwf"
          id="mobile_work_filter"
          onClick={() => setMobileActive(!mobileActive)}
        >
          <span className="mwf_item mwf_activeFilter gt-th">{filter}</span>
          <span className="mwf_item mwf_projects gt-th">
            Projects <sup>{visibleCount}</sup>
          </span>
        </p>

        {/* Desktop/Main Filter */}
        <p className="work-filter hoverable-content flex flex-wrap gap-6 text-[18px] gt-th mt-[4px]">
          {categories.map((cat) => (
            <a
              key={cat}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick(cat);
              }}
              className={`work-filter-item ${
                filter === cat
                  ? "active"
                  : "text-gray-400 hover:text-white max-[1200px]:text-white"
              }`}
            >
              {cat}
            </a>
          ))}

          <span className="work-filter-item work-filter-item--projects z-[9] text-white">
            Projects <sup>{visibleCount}</sup>
          </span>
        </p>
      </div>
    </motion.div>
  );
}
