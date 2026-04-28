import PageHeader from "../components/PageHeader";
import { ourServicesPage } from "../data/siteContent";
import "./ContentPages.css";

export default function OurServicesPage() {
  return (
    <>
      <PageHeader label="About" title={ourServicesPage.title} />
      <article className="content-page">
        <div className="content-page-inner">
          <p className="content-lead">
            <strong style={{ color: "var(--white)" }}>{ourServicesPage.lead}</strong>
            <br />
            <br />
            {ourServicesPage.segments}
          </p>

          {ourServicesPage.sections.map((s) => (
            <div key={s.title} className="content-service-block">
              <h2>{s.title}</h2>
              {s.body.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
