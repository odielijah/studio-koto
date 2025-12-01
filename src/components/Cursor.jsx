import { useEffect, useState } from "react";
import "../assets/styles/cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [state, setState] = useState({
    hover: false,
    type: "",
    title: "",
    subtitle: "",
  });
  const [showCursor, setShowCursor] = useState(false);

  // Detect if device has a fine pointer (mouse)
  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    setShowCursor(mql.matches);

    const handleChange = (e) => setShowCursor(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const detectHover = (x, y) => {
      const element = document.elementFromPoint(x, y);
      if (!element) return;

      // PROJECT ITEM DETECTION
      const project = element.closest(".project-item");
      if (project) {
        setState({
          hover: true,
          type: "project",
          title: project.getAttribute("data-title"),
          subtitle: project.getAttribute("data-subtitle"),
        });
        return;
      }

      // OTHER CURSOR TYPES
      let type = "";
      if (element.closest(".cursor-view")) type = "view";
      else if (element.closest(".cursor-read")) type = "read";
      else if (element.closest(".cursor-arrow-left")) type = "arrow-left";
      else if (element.closest(".cursor-arrow-right")) type = "arrow-right";

      const isHover = Boolean(element.closest(".hoverable"));
      setState({
        hover: isHover,
        type,
        title: "",
        subtitle: "",
      });
    };

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      detectHover(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      detectHover(position.x, position.y); // update hover at current cursor
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll, true); // capture scroll
    window.addEventListener("resize", handleScroll); // update hover on resize

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [showCursor, position]);

  if (!showCursor) return null; // don't render cursor on touch devices

  return (
    <div
      className={`custom-cursor 
        ${state.hover ? "cursor-hover" : ""}
        ${state.type ? "cursor-" + state.type : ""}
        ${state.type === "project" ? "cursor-project" : ""}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Standard cursor types */}
      {state.type === "view" && <span className="cursor-text">view</span>}
      {state.type === "read" && <span className="cursor-text">read</span>}
      {state.type === "arrow-left" && (
        <span className="cursor-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
        </span>
      )}
      {state.type === "arrow-right" && (
        <span className="cursor-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </span>
      )}

      {/* Project tooltip */}
      {state.type === "project" && (
        <div className="cursor-project-wrapper">
          <span className="cursor-tooltip">
            {state.title}: {state.subtitle}
          </span>
        </div>
      )}
    </div>
  );
}
