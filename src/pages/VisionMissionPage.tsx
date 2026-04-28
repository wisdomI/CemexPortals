import PageHeader from "../components/PageHeader";
import { visionMissionPage } from "../data/siteContent";
import "./ContentPages.css";

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader label="About" title={visionMissionPage.title} />
      <article className="content-page">
        <div className="content-page-inner">
          <h2 className="content-section-title">{visionMissionPage.heading}</h2>
          <div className="content-pair">
            <div className="content-pair-card">
              <h2>{visionMissionPage.visionTitle}</h2>
              <p>{visionMissionPage.vision}</p>
            </div>
            <div className="content-pair-card">
              <h2>{visionMissionPage.missionTitle}</h2>
              <p>{visionMissionPage.mission}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
