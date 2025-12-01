import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { slides } from "../../data/heroSlider.js";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/styles/slider.css";

function updateSlideStyles(swiper) {
  const slides = swiper.slides;

  slides.forEach((slide, index) => {
    const offset = Math.abs(swiper.activeIndex - index);

    let opacity;
    if (offset === 0) {
      opacity = 1; // center
    } else if (offset === 1) {
      opacity = 0.7; // next to center
    } else if (offset === 2) {
      opacity = 0; // second away
    } else {
      opacity = 0;
    }

    // no scale or translate animation (optional)
    const scale = 1;
    const translateY = 0;

    slide.style.setProperty("--slide-opacity", opacity);
    slide.style.setProperty("--slide-scale", scale);
    slide.style.setProperty("--slide-translateY", `${translateY}px`);
  });
}

export default function Slider() {
  return (
    <div className="koto-slider md:!py-[120px]">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={1}
        grabCursor={true}
        spaceBetween={-27}
        autoHeight={true}
        className="koto-swiper relative"
        onSlideChangeTransitionStart={updateSlideStyles}
        onAfterInit={(swiper) => {
          // wait for buttons to exist
          setTimeout(() => {
            if (swiper.navigation.nextEl)
              swiper.navigation.nextEl.classList.add("cursor-arrow-right");
            if (swiper.navigation.prevEl)
              swiper.navigation.prevEl.classList.add("cursor-arrow-left");
          }, 0);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="koto-slide cursor-view">
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            >
              {slide.type === "video" ? (
                <video autoPlay loop muted playsInline className="slide-media">
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="slide-media"
                />
              )}
              <div className="slide-title">{slide.title}</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
