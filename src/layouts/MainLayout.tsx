import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Chatbot from "../components/Chatbot";

export default function MainLayout() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <ScrollToTop />
      <Cursor />
      <Navbar scrollY={scrollY} />
      <main className="main-outlet">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
