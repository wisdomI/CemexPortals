import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { portfolioProjectPath } from "../data/portfolioProjects";
import {
  type PortfolioCategoryKey,
  portfolioCategories,
} from "../data/siteContent";
import "./ContentPages.css";

type Props = { category: PortfolioCategoryKey };

export default function PortfolioCategoryPage({ category }: Props) {
  const data = portfolioCategories[category];

  return (
    <>
      <PageHeader label="Portfolio" title={data.title} />
      <article className="content-page">
        <div className="content-page-inner">
          {data.intro.map((p, i) => (
            <p key={i} className="content-lead">
              {p}
            </p>
          ))}

          {data.projects.length > 0 ? (
            <>
              <h2 className="content-section-title">Featured</h2>
              <div className="projects-archive-grid">
                {data.projects.map((p) => (
                  <Link key={p.slug} to={portfolioProjectPath(p.slug)}>
                    {p.name}
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </article>
    </>
  );
}
