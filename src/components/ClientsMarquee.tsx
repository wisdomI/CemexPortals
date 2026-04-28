import { clientMarqueeItems } from "../data/siteContent";
import "./ClientsMarquee.css";

function LogoSlot({ name, logo }: { name: string; logo: string | null }) {
  if (logo) {
    return (
      <div className="clients-marquee-item">
        <img src={logo} alt="" className="clients-marquee-img" />
        <span className="sr-only">{name}</span>
      </div>
    );
  }
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3);
  return (
    <div className="clients-marquee-item clients-marquee-item--text" title={name}>
      <span className="clients-marquee-monogram">{initials}</span>
      <span className="clients-marquee-name">{name}</span>
    </div>
  );
}

export default function ClientsMarquee() {
  const strip = [...clientMarqueeItems, ...clientMarqueeItems];

  return (
    <section className="clients-marquee" id="clients" aria-label="Our clients">
      <div className="clients-marquee-head">
        <span className="clients-marquee-kicker">Our clients</span>
        <span className="clients-marquee-rule" />
      </div>
      <div className="clients-marquee-window">
        <div className="clients-marquee-track">
          {strip.map((c, i) => (
            <LogoSlot key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
