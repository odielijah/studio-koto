import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect, useRef } from "react";

export default function TeamList({ slides, activeIndex, setActiveIndex }) {
  const [slidesPerView, setSlidesPerView] = useState(7);
  const [pinTop, setPinTop] = useState(false);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(7);
        setPinTop(false); // center mode
      } else {
        setSlidesPerView(4);
        setPinTop(true); // top-pin on smaller screens
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <div className="max-w-[404px] h-auto w-full relative">
      <Swiper
        direction="vertical"
        slidesPerView={slidesPerView}
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="name-list relative overflow-hidden pointer-events-none"
        spaceBetween={16}    
        autoHeight={true}    
        centeredSlides={!pinTop}
        // optional: keeps Swiper height sized to slidesPerView * slideHeight
        style={{ height: `${slidesPerView * 76}px` }} 
      >
        {slides.map((member, idx) => (
          <SwiperSlide key={idx}>
            {/* Give each slide a fixed height so spaceBetween is visible */}
            <div
              className="h-[72px] flex flex-col justify-center w-full px-2"
            >
              <span className="gt-th text-[36px] max-md:text-[24px] block leading-none">
                {member.name}
              </span>
              <span className="uppercase space-mono text-[12px] max-md:text-[12px] block mt-1">
                {member.role}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
