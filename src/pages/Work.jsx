import { useState, useEffect } from "react";
import "../assets/styles/work.css";

// Work data
const workData = [
  {
    id: 1,
    title: "Microsoft",
    subtitle: "Rebranding Microsoft’s creative identity",
    category: "Brand",
    video: "/assets/videos/microsoft.mp4",
    link: "/work/microsoft",
    orientation: "landscape",
  },
  {
    id: 2,
    title: "Spotify",
    subtitle: "Connecting sound and identity for millions",
    category: "Brand",
    video: "/assets/videos/spotify.mp4",
    link: "/work/spotify",
    orientation: "portrait",
  },
  {
    id: 3,
    title: "Nike",
    subtitle: "Empowering athletes through motion and design",
    category: "Brand",
    video: "/assets/videos/nike.mp4",
    link: "/work/nike",
    orientation: "portrait",
  },
  {
    id: 4,
    title: "Google",
    subtitle: "Defining modern visual experiences",
    category: "Brand",
    video: "/assets/videos/google.mp4",
    link: "/work/google",
    orientation: "landscape",
  },
  {
    id: 5,
    title: "Adidas",
    subtitle: "Elevating global sports branding",
    category: "Brand",
    video: "/assets/videos/adidas.mp4",
    link: "/work/adidas",
    orientation: "landscape",
  },
  {
    id: 6,
    title: "Meta",
    subtitle: "Shaping new realities for social connection",
    category: "Brand",
    video: "/assets/videos/meta.mp4",
    link: "/work/meta",
    orientation: "portrait",
  },
  {
    id: 7,
    title: "TripAdvisor",
    subtitle: "Designing experiences that inspire travelers worldwide",
    category: "Brand",
    video: "/assets/videos/tripadvisor.mp4",
    link: "/work/tripadvisor",
    orientation: "potrait",
  },
  {
    id: 8,
    title: "Airbnb",
    subtitle: "Crafting seamless digital hospitality experiences",
    category: "Brand",
    video: "/assets/videos/airbnb.mp4",
    link: "/work/airbnb",
    orientation: "landscape",
  },
  {
    id: 9,
    title: "Uber",
    subtitle: "Simplifying movement through innovative interfaces",
    category: "Digital",
    video: "/assets/videos/uber.mp4",
    link: "/work/uber",
    orientation: "landscape",
  },
  {
    id: 10,
    title: "Netflix",
    subtitle: "Reimagining entertainment through dynamic design",
    category: "Digital",
    video: "/assets/videos/netflix.mp4",
    link: "/work/netflix",
    orientation: "potrait",
  },
  {
    id: 11,
    title: "Pinterest",
    subtitle: "Building discovery-driven digital spaces",
    category: "Digital",
    video: "/assets/videos/pinterest.mp4",
    link: "/work/pinterest",
    orientation: "portrait",
  },
  {
    id: 12,
    title: "YouTube",
    subtitle: "Creating interfaces that bring stories to life",
    category: "Digital",
    video: "/assets/videos/youtube.mp4",
    link: "/work/youtube",
    orientation: "landscape",
  },
  {
    id: 13,
    title: "Amazon",
    subtitle: "Creating a global brand story for Amazon Prime Video",
    category: "Digital",
    video: "/assets/videos/amazon.mp4",
    link: "/work/amazon",
    orientation: "landscape",
  },
  {
    id: 14,
    title: "Coca-Cola",
    subtitle: "Refreshing a century-old legacy through visuals",
    category: "Digital",
    video: "/assets/videos/coca-cola.mp4",
    link: "/work/coca-cola",
    orientation: "portrait",
  },
  {
    id: 15,
    title: "Apple",
    subtitle: "Launching innovation through storytelling",
    category: "Digital",
    video: "/assets/videos/apple.mp4",
    link: "/work/apple",
    orientation: "portrait",
  },
  {
    id: 16,
    title: "Pepsi",
    subtitle: "Celebrating youth and culture with bold visuals",
    category: "Digital",
    video: "/assets/videos/pepsi.mp4",
    link: "/work/pepsi",
    orientation: "landscape",
  },
  {
    id: 17,
    title: "Samsung",
    subtitle: "Reimagining global connections through campaigns",
    category: "Campaign",
    video: "/assets/videos/samsung.mp4",
    link: "/work/samsung",
    orientation: "landscape",
  },
  {
    id: 18,
    title: "Toyota",
    subtitle: "Driving brand emotion through cinematic storytelling",
    category: "Campaign",
    video: "/assets/videos/toyota.mp4",
    link: "/work/toyota",
    orientation: "portrait",
  },
  {
    id: 19,
    title: "Polkadot",
    subtitle: "Decentralizing creativity through design",
    category: "Campaign",
    video: "/assets/videos/polkadot.mp4",
    link: "/work/polkadot",
    orientation: "portrait",
  },
  {
    id: 20,
    title: "Twitch",
    subtitle: "Building live communities through visuals",
    category: "Campaign",
    video: "/assets/videos/twitch.mp4",
    link: "/work/twitch",
    orientation: "landscape",
  },
  {
    id: 21,
    title: "Reebok",
    subtitle: "Redefining identity through movement",
    category: "Campaign",
    video: "/assets/videos/reebok.mp4",
    link: "/work/reebok",
    orientation: "landscape",
  },
  {
    id: 22,
    title: "Canon",
    subtitle: "Capturing global moments through campaign storytelling",
    category: "Campaign",
    video: "/assets/videos/canon.mp4",
    link: "/work/canon",
    orientation: "portrait",
  },
  {
    id: 23,
    title: "Tesla",
    subtitle: "Accelerating the future through bold design",
    category: "Campaign",
    video: "/assets/videos/tesla.mp4",
    link: "/work/tesla",
    orientation: "portrait",
  },
  {
    id: 24,
    title: "Gucci",
    subtitle: "Luxury storytelling in the digital age",
    category: "Campaign",
    video: "/assets/videos/gucci.mp4",
    link: "/work/gucci",
    orientation: "landscape",
  },
];

const categories = ["Featured", "Brand", "Digital", "Campaign"];

// Single project item
function ProjectItem({ item, index }) {
  const gridClass = `grid-space-${(index % 4) + 1}`;

  return (
    <a
      href={item.link}
      data-orientation={item.orientation}
      className={`project-item ${gridClass} group relative overflow-hidden bg-gray-700`}
    >
      <video
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 transition-all duration-500"></div>
    </a>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("Featured");
  const [visibleItems, setVisibleItems] = useState(workData);

  useEffect(() => {
    const filtered =
      filter === "Featured"
        ? workData
        : workData.filter((item) => item.category === filter);

    // Small delay for smooth transition
    setVisibleItems([]);
    const timeout = setTimeout(() => setVisibleItems(filtered), 100);

    return () => clearTimeout(timeout);
  }, [filter]);

  return (
    <section className="work bg-black text-white py-20 px-5 min-h-screen">
      <div className="container">
        <div className="work-module">
          
          {/* Mobile Filter (you can make this visible on small screens only) */}
          <p class="mwf" id="mobile_work_filter">
            <span class="mwf_item mwf_activeFilter gt-th">Featured</span>
            <span class="mwf_item mwf_projects gt-th">
              Projects <sup>{visibleItems.length}</sup>
            </span>
          </p>

          {/* Main Filter List */}
          <p className="work-filter hoverable-content flex flex-wrap gap-6 text-[18px] gt-th mt-[4px]">
            {categories.map((cat) => (
              <a
                key={cat}
                href="#"
                data-filter={cat.toLowerCase()}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter(cat);
                }}
                className={`work-filter-item ${
                  filter === cat ? "active" : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </a>
            ))}

            {/* “Projects” span with dynamic superscript count */}
            <span className="work-filter-item work-filter-item--projects text-white">
              Projects
              <sup>{visibleItems.length}</sup>
            </span>
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container">
        <div
          className="work-projects-container work-v2 active grid gap-4"
          data-filterslug={filter.toLowerCase()}
          data-count={visibleItems.length}
          id={`${filter.toLowerCase()}Posts`}
        >
          {visibleItems.map((item, i) => (
            <ProjectItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="work-archive-link row">
          <div className="col-md-5 col-4">
            <h2 class="workArchiveLink__Title">
              <span>2015</span> - Present
            </h2>
          </div>
          <div className="col-md-5 col-8">
            <div class="workArchiveLink__Description">
              <p>
                Over the last nine years, we have partnered with businesses of
                different sizes and sectors. For a full list, visit our{" "}
                <a class="hoverable" href="/work-archive">
                  Archive
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
