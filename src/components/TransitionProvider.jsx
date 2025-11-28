import { useState } from "react";
import PageTransition from "./PageTransition.jsx";
import { useNavigate } from "react-router-dom";

export default function TransitionProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);
  const navigate = useNavigate();

  const triggerTransition = (to) => {
    if (isAnimating) return; // prevent double-click
    setIsAnimating(true);
    setNextRoute(to);

    setTimeout(() => {
      navigate(to);        // Change the page while the yellow screen is up
    }, 500);

    setTimeout(() => {
      setIsAnimating(false);
      setNextRoute(null);
    }, 1000);
  };

  return (
    <>
      {isAnimating && <PageTransition />}
      {children(triggerTransition)}
    </>
  );
}
