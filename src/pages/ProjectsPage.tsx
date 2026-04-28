import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { portfolioProjectPath } from "../data/portfolioProjects";
import { projectsListing } from "../data/siteContent";
import "./ContentPages.css";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader label="Work" title="Projects" subtitle="Selected developments delivered by Cemex Portals." />
      <article className="content-page">
        <div className="content-page-inner" style={{ maxWidth: 980 }}>
          <div className="projects-archive-grid">
            {projectsListing.map((p) => (
              <Link key={p.slug} to={portfolioProjectPath(p.slug)}>
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
