import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const slides = [
  {
    title: "Interior Decoration",
    subtitle: "Delight Residence",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Delight-Res.-scaled.jpg",
  },
  {
    title: "Construction",
    subtitle: "Fagbem Station",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Fagbem-Station-..jpg",
  },
  {
    title: "Architectural Design",
    subtitle: "Form & function",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Architecture.jpg",
  },
  {
    title: "Interior Design",
    subtitle: "Refined living spaces",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Interior.jpg",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<number>();

  const goTo = (index: number) => {
    if (transitioning || index === active) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setTransitioning(false);
    }, 600);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setTransitioning(false);
      }, 600);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === active ? "active" : ""} ${transitioning && i === active ? "exiting" : ""}`}
        >
          <img src={slide.img} alt={slide.title} className="hero-bg" />
          <div className="hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="hero-content">
        <div className="hero-label reveal visible">
          <span>Cemex Portals</span>
          <span className="dot">·</span>
          <span>Lagos, Nigeria</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">
            <em className="hero-title-em">Premium</em>
            <span className="hero-title-continuation"> Construction</span>
          </span>
          
          <span className="title-line title-line--accent">
            &amp; Design Experts
          </span>
        </h1>

        <p className="hero-desc">
          Cemex Portals is a full-service Construction firm that deals in Architectural Design,
          Structural Design, Interior Design, and Project Management.
        </p>

        <div className="hero-actions">
          <a
            href="https://cemexportals.com/wp-content/uploads/2022/01/Cemex-brochure-5.pdf"
            className="btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Brochure</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <Link to="/#projects" className="hero-link">
            <span>Latest Projects</span>
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="hero-indicators">
        {slides.map((slide, i) => (
          <button
            key={i}
            className={`indicator ${i === active ? "active" : ""}`}
            onClick={() => goTo(i)}
          >
            <span className="indicator-num">0{i + 1}</span>
            <span className="indicator-label">{slide.title}</span>
            <div className="indicator-bar">
              <div className={`indicator-fill ${i === active ? "animating" : ""}`} />
            </div>
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
