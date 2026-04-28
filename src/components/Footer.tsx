import { Link } from "react-router-dom";
import { portfolioProjectPath } from "../data/portfolioProjects";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <div className="footer-logo">
              <img src="/cemex-logo-light.png" alt="Cemex Portals" className="footer-logo-image" />
            </div>
          </Link>
          <p className="footer-tagline">
            Luxury Construction &amp; Design Experts
            <br />
            Lagos, Nigeria — info@cemexportals.com
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-vision-mission">Our Vision / Mission</Link></li>
              <li><Link to="/management-team">Executive Team</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/news">News</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul>
              <li><Link to="/our-services">Our Services</Link></li>
              <li><Link to="/architecture">Architectural Design</Link></li>
              <li><Link to="/engineering">Structural / Engineering</Link></li>
              <li><Link to="/construction">Construction</Link></li>
              <li><Link to="/interior-decoration">Interior Decoration</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Portfolio</h4>
            <ul>
              <li><Link to="/portfolio">Overview</Link></li>
              <li><Link to={portfolioProjectPath("house-o-b-o-3")}>House O.B.O</Link></li>
              <li><Link to={portfolioProjectPath("project-alba")}>Project Alba</Link></li>
              <li><Link to={portfolioProjectPath("box-house-5")}>Box House</Link></li>
              <li><Link to={portfolioProjectPath("house-mur-blanc-3")}>House Mur Blanc</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>385 Herbert Macaulay Way, Yaba, Lagos 101245, Nigeria</li>
              <li>info@cemexportals.com</li>
              <li>+234 818 175 1602</li>
            </ul>
            <div className="footer-socials">
              {["Facebook", "Instagram", "YouTube", "LinkedIn"].map((s) => (
                <a href="#" key={s} className="footer-social">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wordmark">CEMEX PORTALS</div>

      <div className="footer-bottom">
        <span>© Cemex Portals 2025. All Rights Reserved.</span>
        <span className="footer-credit">Designed and built by Mabelpraise</span>
      </div>
    </footer>
  );
}
