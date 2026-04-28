import ClientsMarquee from "../components/ClientsMarquee";
import PageHeader from "../components/PageHeader";
import { ourClientsPage } from "../data/siteContent";
import "./ContentPages.css";

export default function OurClientsPage() {
  return (
    <>
      <PageHeader label="Company" title={ourClientsPage.title} />
      <article className="content-page" style={{ paddingTop: 0 }}>
        <div className="content-page-inner">
          <p className="content-lead">{ourClientsPage.intro}</p>
        </div>
      </article>
      <ClientsMarquee />
    </>
  );
}
