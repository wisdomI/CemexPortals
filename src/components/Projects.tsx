import { useState } from "react";
import { Link } from "react-router-dom";
import { portfolioProjectPath } from "../data/portfolioProjects";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

const filters = ["All", "Building", "Interior"];

const projects = [
  {
    slug: "house-mur-blanc-3",
    title: "House Mur Blanc",
    category: "Building",
    year: "",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/House-Mur-Blanc-1.png",
    size: "large",
  },
  {
    slug: "box-house-5",
    title: "Box House",
    category: "Building",
    year: "",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Box-House.-1.png",
    size: "small",
  },
  {
    slug: "house-o-b-o-3",
    title: "House O.B.O",
    category: "Interior",
    year: "",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/House-O.B.O-1.png",
    size: "small",
  },
  {
    slug: "box-house-5",
    title: "Box House",
    category: "Building",
    year: "",
    img: "https://cemexportals.com/wp-content/uploads/2022/01/Box-House-1.png",
    size: "large",
  },
];

export default function Projects() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-header">
        <div>
          <div className="section-label reveal">Portfolio</div>
          <h2 className="projects-title reveal delay-1">
            Latest <em>projects</em>
          </h2>
        </div>
        <div className="project-filters reveal delay-2">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map((project, i) => (
          <Link
            key={`${project.slug}-${i}`}
            to={portfolioProjectPath(project.slug)}
            className={`project-card ${project.size} reveal delay-${(i % 3) + 1}`}
          >
            <div className="project-img-wrap">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay">
                <div className="project-info">
                  <span className="project-cat">{project.category}</span>
                  <h3 className="project-name">{project.title}</h3>
                  {project.year ? <span className="project-year">{project.year}</span> : null}
                </div>
                <span className="project-cta" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="project-caption">
              <span className="project-caption-name">{project.title}</span>
              <span className="project-caption-cat">
                {project.year ? `${project.category} · ${project.year}` : project.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="projects-footer reveal">
        <Link to="/projects" className="btn-gold">
          <span>View all projects</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
