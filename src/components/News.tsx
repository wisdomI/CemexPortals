import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { newsArticles } from "../data/newsArticles";
import "./News.css";

export default function News() {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section className="news" id="news" ref={ref}>
      <div className="news-inner">
        <div className="news-header">
          <div className="section-label reveal">News</div>
          <h2 className="news-title reveal delay-1">
            From our <em>journal</em>
          </h2>
          <Link to="/news" className="btn-gold reveal delay-2">
            <span>All articles</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="news-grid">
          {newsArticles.map((a, i) => (
            <article key={i} className={`news-card reveal delay-${i + 1}`}>
              <div className="news-img-wrap">
                <img src={a.img} alt={a.title} />
                <span className="news-cat">{a.category}</span>
              </div>
              <div className="news-body">
                <span className="news-date">{a.date}</span>
                <h3 className="news-card-title">{a.title}</h3>
                <p className="news-excerpt">{a.excerpt}</p>
                <a href={a.href} className="news-read" target="_blank" rel="noopener noreferrer">
                  Read more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
