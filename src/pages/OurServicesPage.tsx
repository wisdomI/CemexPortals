import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { ourServicesPage } from "../data/siteContent";
import "./ContentPages.css";

export default function OurServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  const sectionId = (title: string) => {
    const normalized = title.toLowerCase();
    if (normalized === "structural engineering") return "structural-engineering";
    return normalized.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
  };

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
            <div key={s.title} id={sectionId(s.title)} className="content-service-block">
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
