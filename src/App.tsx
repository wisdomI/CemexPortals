import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurServicesPage from "./pages/OurServicesPage";
import VisionMissionPage from "./pages/VisionMissionPage";
import ExecutiveTeamPage from "./pages/ExecutiveTeamPage";
import ProjectsPage from "./pages/ProjectsPage";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioCategoryPage from "./pages/PortfolioCategoryPage";
import OurClientsPage from "./pages/OurClientsPage";
import CareerPage from "./pages/CareerPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="our-services" element={<OurServicesPage />} />
        <Route path="our-vision-mission" element={<VisionMissionPage />} />
        <Route path="management-team" element={<ExecutiveTeamPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="portfolio/:slug" element={<ProjectDetailPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="architecture" element={<PortfolioCategoryPage category="architecture" />} />
        <Route path="engineering" element={<PortfolioCategoryPage category="engineering" />} />
        <Route path="construction" element={<PortfolioCategoryPage category="construction" />} />
        <Route path="interior-decoration" element={<PortfolioCategoryPage category="interior-decoration" />} />
        <Route path="our-clients" element={<OurClientsPage />} />
        <Route path="career" element={<CareerPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
