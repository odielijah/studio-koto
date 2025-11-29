import { useState, useEffect } from "react";
import PageTransition from "./PageTransition.jsx";
import { AnimatePresence } from "framer-motion";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <PageTransition key="refresh-loader" />}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}
