import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-grid">
        <div className="about-image-col">
          <div className="about-image-wrap reveal-left">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
              alt="Cemex Portals luxury interior"
              className="about-img"
            />
            <div className="about-badge reveal delay-2">
              <span className="badge-num">·</span>
              <span className="badge-label">Lagos, Nigeria — Full-service construction</span>
            </div>
          </div>
          <div className="about-img-secondary reveal delay-1">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
              alt="Architecture detail"
            />
          </div>
        </div>

        <div className="about-content">
          <div className="section-label reveal">
            Cemex Portals
          </div>

          <h2 className="about-title reveal delay-1">
            Premier construction
            <br />
            in <em>Lagos</em>
          </h2>

          <p className="about-body reveal delay-2">
            As a premier full-service construction firm based in Lagos, Nigeria, Cemex Portals
            Ltd. specializes in delivering comprehensive solutions that encompass architectural
            design, structural design, interior design, and expert project management. Our
            impressive portfolio showcases a diverse range of completed commercial and
            residential projects, demonstrating our commitment to excellence and attention to
            detail.
          </p>

          <p className="about-body reveal delay-3">
            We pride ourselves on providing top-notch construction development services, tailored
            to meet the unique needs of our discerning clients. Our team of seasoned professionals
            offers expert guidance on investment opportunities, helping clients make informed
            decisions on residential and commercial luxury properties.
          </p>

          <div className="about-pillars reveal delay-2">
            {[
              { icon: "◈", label: "Architectural Design" },
              { icon: "◉", label: "Engineering" },
              { icon: "◇", label: "Construction" },
              { icon: "◫", label: "Interior Decoration" },
            ].map((p) => (
              <div className="pillar" key={p.label}>
                <span className="pillar-icon">{p.icon}</span>
                <span className="pillar-label">{p.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://cemexportals.com/wp-content/uploads/2022/01/Cemex-brochure-5.pdf"
            className="btn-gold reveal delay-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Brochure</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v9M3 7l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
