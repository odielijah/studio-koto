import { motion } from "framer-motion";
import { useState } from "react";
import { careerSections } from "../data/careerSections.js";
import { jobOpenings } from "../data/jobOpenings.js";
import { benefitsData } from "../data/baseBenefits.js";
import JobFilter from "../components/careers/JobFilter.jsx";
import JobList from "../components/careers/JobList.jsx";
import BenefitsAccordion from "../components/careers/BenefitsAccordion.jsx";
import LocationSwiper from "../components/careers/LocationSwiper.jsx";

export default function Careers() {
  // Filters for openings
  const [openingsFilter, setOpeningsFilter] = useState("all");
  const [openingsLocation, setOpeningsLocation] = useState("all");
  const [openingsDepartment, setOpeningsDepartment] = useState("all");
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Benefits section
  const [benefitsFilter, setBenefitsFilter] = useState("london");
  const [openAccordion, setOpenAccordion] = useState(null);

  const openingLocations = Array.from(
    new Set(jobOpenings.map((job) => job.location))
  );
  const openingDepartments = Array.from(
    new Set(jobOpenings.map((job) => job.department))
  );

  const filteredJobs = jobOpenings.filter((job) => {
    if (openingsFilter === "all") return true;
    if (openingsFilter === "location")
      return openingsLocation === "all"
        ? true
        : job.location === openingsLocation;
    if (openingsFilter === "department")
      return openingsDepartment === "all"
        ? true
        : job.department === openingsDepartment;
    return true;
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Hero Section */}
        <section className="careers-section section-one" id="join-us">
          <div className="container pt-20 max-md:pt-0">
            <h1 className="text-white gt-th text-[clamp(36px,26px+2.4436vw,62px)] tracking-[-.04em] max-md:leading-[1.2] leading-[1.1] max-w-[1077px]  max-md:mt-[40px] mt-[60px]">
              We’re rational optimists making the work of our lives together.
              Sound like your thing? Join our team.
            </h1>
            <button
              className="inline-flex text-white space-mono uppercase text-[12px] items-center gap-[1em] border-[1px] p-[20px] rounded-[9999em] transition-all duration-500 cursor-pointer hover:bg-white hover:text-black mt-[60px]"
              onClick={() =>
                document
                  .getElementById("current-openings")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
              </svg>
              <span>Open Positions</span>
            </button>
            <div className="mt-[60px] relative w-full max-w-[1360px] aspect-video mx-auto">
              <iframe
                src="https://player.vimeo.com/video/984233488?h=c64fe458fc&title=0&muted=1&autopause=0&loop=1&background=1&quality=720p&app_id=122963"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: "none" }}
                allow="autoplay 'self'; fullscreen 'self';"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Dynamic Career Sections */}
        {careerSections.map((section, i) => (
          <section
            key={i}
            className={`careers-section ${section.type}`}
            id={section.id}
          >
            <div className="container">
              {/* Divider */}
              <span className="block mt-[80px] pt-[80px] border-t-[1px] border-[rgba(255,255,255,0.2)]"></span>

              {/* Subtitle & Column Text */}
              {section.id === "open-to-all" ? (
                <div className="flex flex-col pb-[60px] flex-wrap gap-[20px] md:flex-row md:items-start md:gap-[30rem]">
                  {section.subtitle && (
                    <h4 className="text-white space-mono uppercase text-[12px] leading-[1.2] pb-[25px]">
                      <span className="text-[rgba(255,255,255,0.5)]">
                        {String(i + 1).padStart(2, "0")}:{" "}
                      </span>
                      {section.subtitle}
                    </h4>
                  )}

                  {section.columnText && (
                    <p className="text-white space-mono uppercase text-[12px] leading-[15.6px] max-w-[545px] mt-[0px]">
                      {section.columnText}
                    </p>
                  )}
                </div>
              ) : (
                <>
                  {section.subtitle && (
                    <h4 className="text-white block space-mono uppercase text-[12px] leading-[1.2] pb-[25px]">
                      <span className="text-[rgba(255,255,255,0.5)]">
                        {String(i + 1).padStart(2, "0")}:{" "}
                      </span>
                      {section.subtitle}
                    </h4>
                  )}
                  {section.columnText && (
                    <p className="text-white space-mono uppercase text-[12px] leading-[15.6px] max-w-[800px] mt-[30px]">
                      {section.columnText}
                    </p>
                  )}
                </>
              )}

              {/* Section Title */}
              {section.title && (
                <h2 className="text-white gt-th text-[clamp(25px,18px+1.8vw,36px)] max-md:leading-[1.2] tracking-[-.02em] leading-[1.1] max-w-[800px] w-full mb-[18px]">
                  {section.title}
                </h2>
              )}

              {/* Locations */}
              {section.id === "locations" && (
                <LocationSwiper locations={section.locationSlides} />
              )}

              {/* Filters */}
              {section.filters?.length > 0 && section.id !== "benefits" && (
                <JobFilter
                  sectionId={section.id}
                  filters={section.filters}
                  openingsFilter={openingsFilter}
                  setOpeningsFilter={setOpeningsFilter}
                  openingsLocation={openingsLocation}
                  setOpeningsLocation={setOpeningsLocation}
                  openingsDepartment={openingsDepartment}
                  setOpeningsDepartment={setOpeningsDepartment}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                  openingLocations={openingLocations}
                  openingDepartments={openingDepartments}
                />
              )}

              {/* Current Openings */}
              {section.id === "current-openings" && (
                <JobList jobs={filteredJobs} />
              )}

              {/* Benefits Section */}
              {section.id === "benefits" && (
                <>
                  {/* Benefits filter buttons */}
                  <div className="flex gap-[4px] pb-[24px] flex-wrap">
                    {Object.keys(benefitsData).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setBenefitsFilter(filter);
                          setOpenAccordion(null); // reset accordion when switching filter
                        }}
                        className={`px-[16px] py-[5px] border space-mono cursor-pointer uppercase text-[11px] rounded-[9999em] transition-all duration-300 ${
                          benefitsFilter === filter
                            ? "bg-white text-black border-white"
                            : "bg-black/30 text-white border border-white/20 hover:bg-white hover:text-black"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  {/* Benefits accordion */}
                  <BenefitsAccordion
                    benefits={benefitsData[benefitsFilter]}
                    openAccordion={openAccordion}
                    setOpenAccordion={setOpenAccordion}
                  />
                </>
              )}
            </div>
          </section>
        ))}
      </motion.div>
    </>
  );
}
