import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect, useRef } from "react";

export default function TeamList({ slides, activeIndex, setActiveIndex }) {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(7);
  const [centeredSlides, setCenteredSlides] = useState(true);

  // Update slidesPerView and centeredSlides on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(7);
        setCenteredSlides(true);
      } else {
        setSlidesPerView(4);
        setCenteredSlides(false);
      }

      // Ensure swiper updates properly after resize
      setTimeout(() => {
        swiperRef.current?.swiper.update();
        swiperRef.current?.swiper.autoplay.start();
      }, 50);
    };

    handleResize(); // initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[404px] w-full relative">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        spaceBetween={16}
        modules={[Autoplay]}
        autoHeight={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="name-list relative overflow-hidden pointer-events-none"
        style={{ height: `${slidesPerView * 76}px` }}
      >
        {slides.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-[72px] flex flex-col justify-center w-full px-2">
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
