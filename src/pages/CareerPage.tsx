import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { careerPage } from "../data/siteContent";
import "./ContentPages.css";

export default function CareerPage() {
  return (
    <>
      <PageHeader label="Company" title={careerPage.heading} />
      <article className="content-page" id="career">
        <div className="content-page-inner">
          <h2 className="content-section-title">{careerPage.whoTitle}</h2>
          <p className="content-lead">{careerPage.whoBody}</p>

          <h2 className="content-section-title">Teams</h2>
          <div className="dept-grid">
            {careerPage.departments.map((d) => (
              <div key={d} className="dept-item">
                {d}
              </div>
            ))}
          </div>

          <h2 className="content-section-title" style={{ marginTop: "3rem" }}>
            Work with us
          </h2>
          <p className="content-lead">{careerPage.formLead}</p>
          <Link to="/contact" className="btn-gold" style={{ marginTop: "0.5rem", display: "inline-flex" }}>
            <span>Contact us</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </article>
    </>
  );
}
