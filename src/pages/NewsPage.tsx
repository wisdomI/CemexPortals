import PageHeader from "../components/PageHeader";
import { newsArticles } from "../data/newsArticles";
import "../components/News.css";
import "./ContentPages.css";

export default function NewsPage() {
  return (
    <>
      <PageHeader label="Journal" title="News" />
      <div className="news-page-grid">
        {newsArticles.map((a) => (
          <article key={a.title} className="news-page-card">
            <img src={a.img} alt="" />
            <div className="news-page-card-body">
              <span className="news-date">{a.date}</span>
              <h2>{a.title}</h2>
              <p>{a.excerpt}</p>
              <a href={a.href} className="news-read" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
