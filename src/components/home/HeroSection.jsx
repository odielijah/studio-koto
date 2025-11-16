import "../../assets/styles/hero.css";

export default function HeroSection() {
  return (
    <section className="bg-black text-white h-[100vh] flex items-center justify-center flex-col relative">
      <div className="container text-left">
        <p className="custom-mid-text gt-lt text-[30px] md:text-[51px] font-[300] max-w-[1200px] mx-auto z-[99] tracking-[-.64px] leading-[1.2]">
          <span>Optimists building</span>{" "}
          <span className="underline-animate">brand</span> <span>and</span>{" "}
          <span className="underline-animate">digital</span>
          <span> for the most impactful</span>{" "}
          <span className="underline-animate">companies</span>{" "}
          <span>of today and the </span>
          <span className="underline-animate">founders</span>{" "}
          <span>defining tomorrow.</span>
        </p>

        <div className="absolute bottom-10">
          <div className="hero-navigation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffe800"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[14px] w-5 h-5"
            >
              <path d="M12 19V5M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
