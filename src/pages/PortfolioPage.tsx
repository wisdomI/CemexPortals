import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { portfolioCategories } from "../data/siteContent";
import { portfolioProjects, portfolioProjectPath } from "../data/portfolioProjects";
import "./ContentPages.css";

const keys = ["architecture", "engineering", "construction", "interior-decoration"] as const;
const categoryImages: Record<(typeof keys)[number], string> = {
  architecture: "https://cemexportals.com/wp-content/uploads/2022/01/Architecture.jpg",
  engineering: "https://cemexportals.com/wp-content/uploads/2022/01/Delight-Res.-scaled.jpg",
  construction: "https://cemexportals.com/wp-content/uploads/2022/01/Fagbem-Station-..jpg",
  "interior-decoration": "https://cemexportals.com/wp-content/uploads/2022/01/CEMEX-PORTALS-Office-4-1.jpeg",
};

export default function PortfolioPage() {
  const categorizedProjects = {
    architecture: portfolioProjects.filter((project) => {
      const text = `${project.services ?? ""} ${project.title}`.toLowerCase();
      return text.includes("architect");
    }),
    engineering: portfolioProjects.filter((project) => {
      const text = `${project.services ?? ""} ${project.title}`.toLowerCase();
      return (
        text.includes("engineer") ||
        text.includes("structural") ||
        text.includes("mechanical") ||
        text.includes("electrical")
      );
    }),
    construction: portfolioProjects.filter((project) => {
      const text = `${project.services ?? ""} ${project.title}`.toLowerCase();
      return text.includes("construction") || text.includes("build");
    }),
    "interior-decoration": portfolioProjects.filter((project) => {
      const text = `${project.services ?? ""} ${project.title}`.toLowerCase();
      return text.includes("interior") || text.includes("decor");
    }),
  };

  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Portfolio"
        subtitle="Architecture, engineering, construction, and interior decoration — explore our disciplines."
      />
      <article className="content-page">
        <div className="content-page-inner" style={{ maxWidth: 1000 }}>
          <div className="portfolio-overview-grid">
            {keys.map((k) => (
              <section key={k} className="portfolio-overview-card">
                <div className="portfolio-overview-image-wrap">
                  <img
                    src={categoryImages[k]}
                    alt={portfolioCategories[k].title}
                    className="portfolio-overview-image"
                    loading="lazy"
                  />
                </div>
                <h2>{portfolioCategories[k].title}</h2>
                <p>{portfolioCategories[k].intro[0]}</p>
                <div className="portfolio-category-list">
                  {categorizedProjects[k].map((project) => (
                    <Link key={`${k}-${project.slug}`} to={portfolioProjectPath(project.slug)}>
                      {project.title}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
