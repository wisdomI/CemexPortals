import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Services.css";

const services = [
  {
    num: "01",
    title: "Architectural Design",
    desc: "From blueprints to finished spaces, we translate vision into safe, efficient layouts—where daylight, circulation, and proportion elevate how people live and work.",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Architecture.jpg",
    tags: ["Architecture", "Concept development", "Design documentation"],
  },
  {
    num: "02",
    title: "Structural Design",
    desc: "Structural systems engineered for performance and longevity—supporting ambitious architecture with clarity, compliance, and constructability in mind.",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Fagbem-Station-..jpg",
    tags: ["Structural design", "Engineering coordination", "Technical review"],
  },
  {
    num: "03",
    title: "Construction",
    desc: "Full-service construction development delivered with rigorous site leadership—coordinating trades, quality, and schedule so luxury residences and commercial spaces meet the brief.",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Delight-Res.-scaled.jpg",
    tags: ["Construction", "Site execution", "Project delivery"],
  },
  {
    num: "04",
    title: "Interior Decoration",
    desc: "Interior design and decoration layered with material palettes, bespoke fittings, and refined detail—tailored for discerning residential and commercial clients.",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Interior.jpg",
    tags: ["Interior design", "Decoration", "FF&E direction"],
  },
];

export default function Services() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-header">
        <div className="section-label reveal">Our Services</div>
        <h2 className="services-title reveal delay-1">
          Architecture,
          <br />
          <em>engineering &amp; interiors</em>
        </h2>
      </div>

      <div className="services-list">
        {services.map((s, i) => (
          <div
            key={i}
            className={`service-item reveal delay-${i % 3 + 1}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="service-num">{s.num}</div>
            <div className="service-body">
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div
              className={`service-image ${hovered === i ? "visible" : ""}`}
            >
              <img src={s.img} alt={s.title} />
            </div>
            <div className="service-arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
