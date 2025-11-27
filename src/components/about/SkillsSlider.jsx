import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SkillsSlider({ skills }) {
  return (
    <div>
      {skills.map((skill, i) => {
        const prevClass = `swiper-prev-${i}`;
        const nextClass = `swiper-next-${i}`;

        return (
          <div key={i} className="pt-[80px] pb-[54px] max-md:pb-0">
            <div className="container">
              <div className="gt-th text-[20px] max-md:text-[18px] max-w-[551px]">
                <h2 className="text-[28px] max-md:text-[22px] max-md:leading-[1.2] max-md:mb-[8px] mb-[0.5em]">{skill.heading}</h2>
                <p className="max-md:leading-[1.2]">{skill.description}</p>
              </div>
            </div>

            <div className="module-slider">
              <div className="relative w-full mt-10">
                {/* UNIQUE BUTTONS PER INDEX */}
                <button
                  className={`${prevClass} absolute left-0 top-0 h-full w-[30%] z-30 cursor-pointer`}
                ></button>

                <button
                  className={`${nextClass} absolute right-0 top-0 h-full w-[70%] z-30 cursor-pointer`}
                ></button>

                <div className="container">
                  <div className="module-slider max-w-[1130px] relative z-10">
                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        prevEl: `.${prevClass}`,
                        nextEl: `.${nextClass}`,
                      }}
                      spaceBetween={12}
                      slidesPerView={2}
                      breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                      }}
                      className="slider-about !overflow-visible"
                    >
                      {skill.slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="module-slider-img flex flex-col gap-2 w-full max-w-[560px]">
                            {slide.slideImage ? (
                              <img
                                src={slide.slideImage}
                                className="w-full max-w-[560px] h-auto object-cover"
                              />
                            ) : (
                              <div className="w-full max-w-[560px] h-auto bg-white/10"></div>
                            )}
                            <div className="text-[20px] gt-th max-md:text-[18px]">
                              {slide.slideTitle}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
