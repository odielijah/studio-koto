import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import TransitionProvider from "./components/TransitionProvider.jsx";
import PageLoader from "./components/PageLoader.jsx";

function App() {
  return (
    <PageLoader>
      <TransitionProvider>
        {(trigger) => (
          <>
            <Header trigger={trigger} />

            <main id="main" className="bg-black">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            <div className="bg-black">
              <Footer />
            </div>
          </>
        )}
      </TransitionProvider>
    </PageLoader>
  );
}

export default App;
