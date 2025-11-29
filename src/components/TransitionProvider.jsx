import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import PageTransition from "./PageTransition.jsx";
import { useNavigate } from "react-router-dom";

export default function TransitionProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const triggerTransition = (to) => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      navigate(to);
    }, 900); // matches entrance duration

    setTimeout(() => {
      setIsAnimating(false);
    }, 1800); // entrance + exit duration
  };

  return (
    <AnimatePresence mode="wait">
      {isAnimating && <PageTransition key="page-transition" />}
      {children(triggerTransition)}
    </AnimatePresence>
  );
}
