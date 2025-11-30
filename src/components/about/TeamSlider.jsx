import { useState, useEffect } from "react";

export default function TeamSlider({ slides, activeIndex }) {
  const [fadeIndex, setFadeIndex] = useState(activeIndex);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => {
      setFadeIndex(activeIndex);
      setFade(true);
    }, 350);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const member = slides[fadeIndex];

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
      {member?.slideImage ? (
        <img
          src={member.slideImage}
          alt={member.name}
          className={`w-full h-auto object-cover transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div
          className={`w-full h-full bg-black/40 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
