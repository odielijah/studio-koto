import { useEffect, useRef, useState } from "react";
import { packs } from "../../data/packs.js";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export default function HeroImages({ activePack }) {
  const { category, segment } = activePack || {};
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const baseVelocity = useRef(-50); // Pixels per second

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const constraintRef = useRef(null);

  // Auto-scroll with loop
  useAnimationFrame((t, delta) => {
    if (!isMobile || !category || isDragging) return;

    const activePack = packs.find((p) => p.id === category);
    if (!activePack) return;

    const wrapper = constraintRef.current?.querySelector(
      ".home-images-pack-wrapper"
    );
    if (!wrapper) return;

    // Get the actual width of one full set of segments
    const segments = wrapper.querySelectorAll(".home-images-segment");
    const segmentCount = activePack.segments.length;

    let totalWidth = 0;
    for (let i = 0; i < segmentCount; i++) {
      if (segments[i]) {
        totalWidth += segments[i].offsetWidth;
      }
    }

    const loopPoint = -totalWidth;

    // Move left
    let currentX = x.get();
    currentX += (baseVelocity.current * delta) / 5000;

    // Loop back when we reach the end of first set
    if (currentX <= loopPoint) {
      currentX = 0;
    }

    x.set(currentX);
  });

  const handleDragEnd = (event, info) => {
    setIsDragging(false);

    const activePack = packs.find((p) => p.id === category);
    if (!activePack) return;

    const wrapper = constraintRef.current?.querySelector(
      ".home-images-pack-wrapper"
    );
    if (!wrapper) return;

    // Get the actual width of one full set of segments
    const segments = wrapper.querySelectorAll(".home-images-segment");
    const segmentCount = activePack.segments.length;

    let totalWidth = 0;
    for (let i = 0; i < segmentCount; i++) {
      if (segments[i]) {
        totalWidth += segments[i].offsetWidth;
      }
    }

    const loopPoint = -totalWidth;

    let currentX = x.get();

    // Wrap around if dragged past boundaries
    if (currentX <= loopPoint) {
      x.set(0);
    } else if (currentX > 0) {
      x.set(loopPoint);
    }
  };

  if (!isMobile) {
    // DESKTOP VIEW
    return (
      <div
        className={`hero-images-wrapper container ${
          activePack?.category ? "dim-wrapper" : ""
        }`}
      >
        <div className="hero-images-layer">
          {packs.map((pack) =>
            pack.segments.map((seg) =>
              seg.images.map((img) => {
                const visible = category === pack.id && segment === seg.id;

                return (
                  <div key={img.id}>
                    {img.type === "video" ? (
                      <video
                        src={img.src}
                        className={`floating-img ${
                          visible ? "active" : "dimmed"
                        } ${img.desktopOrientation}`}
                        style={img.style}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={img.src}
                        className={`floating-img ${
                          visible ? "active" : "dimmed"
                        } ${img.desktopOrientation}`}
                        style={img.style}
                        alt={img.title || ""}
                      />
                    )}
                  </div>
                );
              })
            )
          )}
        </div>
      </div>
    );
  }

  // MOBILE VIEW
  return (
    <div className="hero-images-component">
      <div className="container">
        <div className="hero-images-component-inner" ref={constraintRef}>
          {packs.map((pack) => {
            const isActive = pack.id === category;

            return (
              <motion.div
                key={pack.id}
                className={`home-images-pack ${isActive ? "active-pack" : ""}`}
                data-pack-type="mobile"
              >
                <motion.div
                  className="home-images-pack-wrapper"
                  drag={isActive ? "x" : false}
                  dragElastic={0.05}
                  dragMomentum={false}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  style={{
                    display: "flex",
                    x: isActive ? x : 0,
                  }}
                >
                  {/* Render segments twice for seamless looping */}
                  {[...pack.segments, ...pack.segments, ...pack.segments].map(
                    (seg, idx) => (
                      <div
                        key={`${seg.id}-${idx}`}
                        className="home-images-segment"
                      >
                        {seg.images.map((img) => (
                          <div
                            key={`${img.id}-${idx}`}
                            className={`img-box ${img.orientation} ${
                              img.odd ? "odd" : ""
                            }`}
                          >
                            <div className="img-box-inner">
                              {img.type === "video" ? (
                                <video
                                  src={img.src}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    ...img.style,
                                  }}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                />
                              ) : (
                                <img
                                  src={img.src}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    ...img.style,
                                  }}
                                  alt={img.title || ""}
                                />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
