/**
 * Portfolio project copy sourced from https://cemexportals.com/ (WordPress excerpts & project pages).
 * Image URLs remain on the reference host for media assets only (not page navigation).
 */

export type PortfolioProject = {
  slug: string;
  title: string;
  location?: string;
  sector?: string;
  services?: string;
  /** Paragraphs of project description */
  body: string[];
  /** Optional hero / gallery image from existing media */
  heroImage?: string;
};

export const portfolioProjectPath = (slug: string) => `/portfolio/${slug}`;

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "fab-villa",
    title: "Fab Villa",
    location: "Umunze, Anambra State",
    sector: "Residential",
    services:
      "Architectural Design, Structural Engineering, Mechanical and Electrical Engineering, Construction, Interior Design, and Interior Decoration",
    body: [
      "A nine (9) bedroom duplex with four-bedroom servant quarters, home office, nine-seater cinema, gym, and wet & dry kitchen — a comprehensive residential estate delivered with full design and build scope.",
    ],
    heroImage: "https://cemexportals.com/wp-content/uploads/2022/01/Architecture.jpg",
  },
  {
    slug: "delight-res",
    title: "Delight Res",
    location: "Victory Estate, Festac, Lagos",
    sector: "Residential",
    services:
      "Architectural Design, Structural Engineering, Mechanical and Electrical Engineering, Construction, Interior Design, and Interior Decoration",
    body: [
      "A five-bedroom residential semi-detached duplex together with three units of three-bedroom apartments — combining robust structure with refined interior execution.",
    ],
    heroImage: "https://cemexportals.com/wp-content/uploads/2022/01/Delight-Res.-scaled.jpg",
  },
  {
    slug: "ramos-project",
    title: "Ramos Project",
    location: "Ajah, Lagos",
    sector: "Residential",
    services: "Construction and kitchen interior design",
    body: [
      "A four-bedroom detached duplex with an outdoor swimming pool — build quality and interior kitchen detailing aligned with the client’s lifestyle.",
    ],
  },
  {
    slug: "zikel-hotel",
    title: "Zikel Hotel",
    location: "Festac, Lagos",
    sector: "Hospitality",
    services:
      "Architectural Design, Mechanical Engineering, Structural Engineering, Electrical Engineering, Interior Design, and Project Management",
    body: [
      "A seventeen-room hotel on approximately 512.37 sqm, including a supermarket, restaurant, rooftop swimming pool, and indoor and outdoor bar — full MEP, structure, architecture, and interiors.",
    ],
  },
  {
    slug: "fagbem-station",
    title: "Fatgbem Station",
    location: "Awoyaya, Lagos · IBB Abeokuta · Cele-Ijesha, Lagos",
    sector: "Commercial",
    services: "Construction",
    body: [
      "Fatgbem fuel stations across multiple locations — delivery focused on safety, programme, and brand standards across commercial forecourts.",
    ],
    heroImage: "https://cemexportals.com/wp-content/uploads/2022/01/Fagbem-Station-..jpg",
  },
  {
    slug: "project-nova",
    title: "Project Nova",
    location: "Ijebu",
    sector: "Industrial",
    services:
      "Architectural Design, Structural Engineering, Mechanical Engineering, Electrical Engineering",
    body: [
      "Modelling and design of an industrial warehouse complex including an admin building, games room, cafeteria, meeting room, and supporting facilities.",
    ],
  },
  {
    slug: "azores-mall",
    title: "Azores Mall",
    location: "Amen Estate, Lagos",
    sector: "Commercial",
    services: "Architectural Design",
    body: [
      "A mixed-use commercial development with offices, banking areas, restaurants, games room, kids zone, and retail — designed for a high-quality shopping and leisure experience on a substantial land parcel.",
    ],
  },
  {
    slug: "cemex-portals-office",
    title: "Project 385",
    location: "Yaba, Lagos",
    sector: "Commercial",
    services: "Interior Design — remodeling, renovation, interior decoration, project management",
    body: [
      "A commercial office of approximately 140 sqm comprising open office, two private offices, conference room, training room, cafeteria, reception, and supporting spaces — remodel and fit-out led end-to-end.",
    ],
  },
  {
    slug: "project-283",
    title: "Project 283",
    location: "Yaba, Lagos",
    sector: "Commercial",
    services: "Architecture — façade remodelling, and interior design",
    body: [
      "Adaptive reuse of an existing building on approximately 514.206 sqm for commercial use — façade redesign and full interior replanning.",
    ],
  },
  {
    slug: "the-healing-pot-project",
    title: "The Healing Pot Project",
    location: "Ado-Odo, Ogun State",
    sector: "Healthcare",
    services: "Architectural Design",
    body: [
      "A healthcare facility on approximately 4,270.227 sqm across three floors — including ICU, operating theatres, and more than fifty beds.",
    ],
  },
  {
    slug: "amuwo-h6",
    title: "Amuwo H6",
    location: "Amuwo Odofin, Lagos State",
    sector: "Residential",
    services: "Architectural Design",
    body: [
      "A luxurious six-bedroom maisonette on a 650 sqm plot — grand lounge, fully equipped kitchen, and generous family spaces across levels.",
    ],
  },
  {
    slug: "lakeview",
    title: "LakeView",
    location: "LakeView Estate, VGC, Lagos State",
    sector: "Residential",
    services: "Architectural and Interior Design, construction",
    body: [
      "A contemporary five-bedroom semi-detached maisonette on 800 sqm — open-plan living, modern services integration, and crafted interior architecture.",
    ],
  },
  {
    slug: "beach-house",
    title: "Beach House",
    location: "Lagos State",
    sector: "Residential | Commercial",
    services: "Architectural and interior design",
    body: [
      "A four-bedroom beach house steps from the shoreline on approximately 1,800 sqm — indoor–outdoor living and coastal planning throughout.",
    ],
  },
  {
    slug: "aston-tower",
    title: "Aston Tower",
    location: "Bourdillon, Ikoyi, Lagos State",
    sector: "Residential",
    services: "Architectural design",
    body: [
      "A twenty-five-storey complex on approximately 3,500 m² — luxury apartments, residential villas, commercial elements, and shared amenity landscape.",
    ],
  },
  {
    slug: "house-mur-blanc-3",
    title: "House Mur Blanc",
    sector: "Residential",
    services: "Architecture · Interior architecture",
    body: [
      "A signature residential composition emphasising light, proportion, and material craft — part of Cemex Portals’ architecture portfolio of private homes in Lagos.",
    ],
    heroImage: "https://cemexportals.com/wp-content/uploads/2022/01/House-Mur-Blanc-1.png",
  },
  {
    slug: "house-o-b-o-3",
    title: "House O.B.O",
    sector: "Residential",
    services: "Architecture · Design development",
    body: [
      "Bespoke residential delivery balancing privacy, circulation, and formal clarity — tailored to the client brief and site context.",
    ],
    heroImage: "https://cemexportals.com/wp-content/uploads/2022/01/House-O.B.O-1.png",
  },
  {
    slug: "project-alba",
    title: "Project Alba",
    sector: "Residential | Mixed",
    services: "Architecture · Interiors coordination",
    body: [
      "Multi-phase residential scheme showcasing coordinated architecture and interior layers, engineered for longevity and everyday comfort.",
    ],
  },
  {
    slug: "box-house-5",
    title: "Box House",
    sector: "Residential",
    services: "Architecture · Spatial planning",
    body: [
      "A disciplined, modern residential massing — efficient plans, generous daylighting, and refined façade composition.",
    ],
    heroImage: "https://cemexportals.com/wp-content/uploads/2022/01/Box-House-1.png",
  },
];

export const portfolioProjectsBySlug = Object.fromEntries(
  portfolioProjects.map((p) => [p.slug, p])
) as Record<string, PortfolioProject>;

export function getPortfolioProject(slug: string | undefined): PortfolioProject | undefined {
  if (!slug) return undefined;
  return portfolioProjectsBySlug[slug];
}
