import PageHeader from "../components/PageHeader";
import { executiveIntro, executiveTeam } from "../data/siteContent";
import "./ContentPages.css";

export default function ExecutiveTeamPage() {
  return (
    <>
      <PageHeader label="About" title="Executive Team" />
      <article className="content-page">
        <div className="content-page-inner">
          <p className="content-lead">{executiveIntro}</p>
          <div className="team-grid">
            {executiveTeam.map((m) => (
              <div key={m.name} className="team-card">
                <h3>{m.name}</h3>
                <div className="team-role">{m.role}</div>
                {m.bio.map((b, j) => (
                  <p key={j}>{b}</p>
                ))}
                {m.detailHref ? (
                  <a href={m.detailHref} className="team-detail" target="_blank" rel="noopener noreferrer">
                    View full profile →
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
