import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, matchPath } from "react-router-dom";
import "./Navbar.css";

type Internal = { label: string; to: string };

const aboutMenu: { label: string; children: Internal[] } = {
  label: "About",
  children: [
    { label: "About Cemex", to: "/about" },
    { label: "Our Services", to: "/our-services" },
    { label: "Our Vision / Mission", to: "/our-vision-mission" },
    { label: "Executive Team", to: "/management-team" },
  ],
};

const tailLinks: Internal[] = [
  { label: "Our Clients", to: "/our-clients" },
  { label: "Career", to: "/career" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ scrollY }: { scrollY: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const scrolled = scrollY > 60;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) => `nav-link${isActive ? " active" : ""}`;

  const dropLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-dropdown-link${isActive ? " active" : ""}`;

  const aboutIsActive = aboutMenu.children.some((item) =>
    Boolean(matchPath({ path: item.to, end: true }, location.pathname))
  );

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `mobile-link${isActive ? " active" : ""}`;

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className={`nav-logo ${menuOpen ? "menu-open" : ""}`} aria-label="Cemex Portals">
          <img src="/cemex-logo-light.png" alt="Cemex Portals" className="logo-image" />
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>

          <li className="nav-item nav-item--dropdown">
            <span className={`nav-link nav-link--static ${aboutIsActive ? "active" : ""}`}>{aboutMenu.label}</span>
            <ul className="nav-dropdown" role="menu">
              {aboutMenu.children.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={dropLinkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" className={linkClass}>
              Portfolio
            </NavLink>
          </li>

          {tailLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/2348181751602"
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>WhatsApp</span>
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-label">Navigation</div>
          <ul className="mobile-links">
            <li className={menuOpen ? "visible" : ""} style={{ transitionDelay: menuOpen ? "0.08s" : "0s" }}>
              <NavLink to="/" end className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
                <span className="mobile-num">01</span>Home
              </NavLink>
            </li>

            {aboutMenu.children.map((c, i) => (
              <li
                key={c.to}
                className={menuOpen ? "visible" : ""}
                style={{ transitionDelay: menuOpen ? `${0.12 + i * 0.04}s` : "0s" }}
              >
                <NavLink to={c.to} className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
                  <span className="mobile-num">{String(i + 2).padStart(2, "0")}</span>
                  {c.label}
                </NavLink>
              </li>
            ))}

            <li className={menuOpen ? "visible" : ""} style={{ transitionDelay: menuOpen ? "0.3s" : "0s" }}>
              <NavLink to="/projects" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
                <span className="mobile-num">06</span>Projects
              </NavLink>
            </li>

            <li className={menuOpen ? "visible" : ""} style={{ transitionDelay: menuOpen ? "0.34s" : "0s" }}>
              <NavLink to="/portfolio" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
                <span className="mobile-num">07</span>Portfolio
              </NavLink>
            </li>

            {tailLinks.map((l, i) => (
              <li
                key={l.to}
                className={menuOpen ? "visible" : ""}
                style={{ transitionDelay: menuOpen ? `${0.42 + i * 0.04}s` : "0s" }}
              >
                <NavLink to={l.to} className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
                  <span className="mobile-num">{String(8 + i).padStart(2, "0")}</span>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-footer">
            <p>385 Herbert Macaulay Way, Yaba, Lagos, Nigeria</p>
            <p>+234 818 175 1602</p>
          </div>
        </div>
      </div>
    </>
  );
}
