import { useRef, useCallback } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import PageOne from "./pages/content-pages/PageOne";
import PageTwo from "./pages/content-pages/PageTwo";
import PageThree from "./pages/content-pages/PageThree";
import PageFour from "./pages/content-pages/PageFour";
import PageFive from "./pages/content-pages/PageFive";
import NotFound from "./pages/not-found/NotFound";
import AnimatedCounters from "./pages/content-pages/AnimatedCounters";
import WaveSectionDivider from "./pages/content-pages/wave-section-divider/WaveSectionDivider";
import ShapesExamples from "./pages/content-pages/ShapesExamples";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

const Layout = (): React.JSX.Element => {
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToContact = useCallback(() => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const firstInput = document.getElementById("name");
    firstInput?.focus();
  }, []);

  return (
    <>
      <Navbar onContactClick={scrollToContact} />
      <main>
        <Outlet />
      </main>
      <Footer contactRef={contactRef} onContactClick={scrollToContact} />
    </>
  );
};

const App = (): React.JSX.Element => (
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Alternative Homepages */}
        <Route path="home-one" element={<Home />} />
        <Route path="home-two" element={<Home />} />
        <Route path="home-three" element={<Home />} />
        {/* Other pages */}
        <Route path="page-one-01" element={<PageOne />} />
        <Route path="page-two-01" element={<PageTwo />} />
        <Route path="page-three-01" element={<PageThree />} />
        <Route path="page-four-01" element={<PageFour />} />
        <Route path="page-five-01" element={<PageFive />} />
        <Route path="animated-counters" element={<AnimatedCounters />} />
        <Route path="wave-section-divider" element={<WaveSectionDivider />} />
        <Route path="shapes-examples" element={<ShapesExamples />} />
        {/* 404 route */}
        <Route path="404" element={<NotFound />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  </ErrorBoundary>
);

export default App;
