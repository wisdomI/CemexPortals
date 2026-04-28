import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { aboutPage, brochurePdf } from "../data/siteContent";
import "./ContentPages.css";

export default function AboutPage() {
  return (
    <>
      <PageHeader label="About" title={aboutPage.title} subtitle={aboutPage.subtitle} />
      <article className="content-page">
        <div className="content-page-inner">
          <div className="content-about-actions">
            <Link to="/our-services" className="content-pill">
              Our Services
            </Link>
            <Link to="/our-vision-mission" className="content-pill">
              Our Vision / Mission
            </Link>
            <Link to="/management-team" className="content-pill">
              Executive Team
            </Link>
          </div>

          {aboutPage.paragraphs.map((p, i) => (
            <p key={i} className="content-lead">
              {p}
            </p>
          ))}

          <a href={brochurePdf} className="btn-gold content-brochure" target="_blank" rel="noopener noreferrer">
            <span>View brochure</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <h2 className="content-section-title">{aboutPage.serviceTitle}</h2>
          <p className="content-lead">{aboutPage.serviceIntro}</p>

          <div className="content-tile-grid">
            <Link to="/engineering" className="content-tile">
              Engineering
            </Link>
            <Link to="/construction" className="content-tile">
              Construction
            </Link>
            <Link to="/architecture" className="content-tile">
              Architectural designs
            </Link>
            <Link to="/interior-decoration" className="content-tile">
              Interior decoration
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
