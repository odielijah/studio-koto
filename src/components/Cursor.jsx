import { useEffect, useState } from "react";
import "../assets/styles/cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [state, setState] = useState({
    hover: false,
    type: "", // "view" | "read" | "arrow-left" | "arrow-right" | ""
  });

  useEffect(() => {
    const handleMove = (e) => {
  setPosition({ x: e.clientX, y: e.clientY });

  const target = e.target;

  // Detect type without relying on .hoverable
  let type = "";
  if (target.closest(".cursor-view")) type = "view";
  else if (target.closest(".cursor-read")) type = "read";
  else if (target.closest(".cursor-arrow-left")) type = "arrow-left";
  else if (target.closest(".cursor-arrow-right")) type = "arrow-right";

  // Detect ONLY hover effect
  const isHover = Boolean(target.closest(".hoverable"));

  setState({ hover: isHover, type });
};

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className={`custom-cursor 
        ${state.hover ? "cursor-hover" : ""}
        ${state.type ? "cursor-" + state.type : ""}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {state.type === "view" && <span className="cursor-text">view</span>}
      {state.type === "read" && <span className="cursor-text">read</span>}
      {state.type === "arrow-left" && <span className="cursor-text">←</span>}
      {state.type === "arrow-right" && <span className="cursor-text">→</span>}
    </div>
  );
}
