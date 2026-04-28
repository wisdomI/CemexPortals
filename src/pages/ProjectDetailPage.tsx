import { Link, Navigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getPortfolioProject } from "../data/portfolioProjects";
import "./ContentPages.css";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getPortfolioProject(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <PageHeader label="Portfolio" title={project.title} />
      {project.heroImage ? (
        <div className="project-hero">
          <img src={project.heroImage} alt="" />
        </div>
      ) : null}
      <article className="content-page">
        <div className="content-page-inner">
          <div className="project-meta">
            {project.location ? (
              <div className="project-meta-row">
                <span className="project-meta-label">Location</span>
                <span className="project-meta-value">{project.location}</span>
              </div>
            ) : null}
            {project.sector ? (
              <div className="project-meta-row">
                <span className="project-meta-label">Sector</span>
                <span className="project-meta-value">{project.sector}</span>
              </div>
            ) : null}
            {project.services ? (
              <div className="project-meta-row project-meta-row--wide">
                <span className="project-meta-label">Services</span>
                <span className="project-meta-value">{project.services}</span>
              </div>
            ) : null}
          </div>

          <h2 className="content-section-title">Project overview</h2>
          {project.body.map((para, i) => (
            <p key={i} className="content-lead">
              {para}
            </p>
          ))}

          <div className="project-detail-actions">
            <Link to="/projects" className="btn-gold">
              <span>All projects</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/portfolio" className="content-pill" style={{ display: "inline-flex", marginTop: "1rem" }}>
              Portfolio disciplines
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
