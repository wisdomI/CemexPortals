import Hero from "../components/Hero";
import ClientsMarquee from "../components/ClientsMarquee";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import News from "../components/News";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <About />
      <Services />
      <Projects />
      <Stats />
      <News />
      <Contact />
    </>
  );
}
