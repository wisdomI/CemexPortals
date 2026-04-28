/** Copy sourced from https://cemexportals.com/ (pages & API). */

export const brochurePdf =
  "https://cemexportals.com/wp-content/uploads/2022/01/Cemex-brochure-5.pdf";

export const aboutPage = {
  title: "About Cemex",
  subtitle: "Leading the way in Construction and Design",
  paragraphs: [
    "We are a full service Construction firm that deals in Architectural Design, Structural Design, Interior Design, and Project Management based in Lagos, Nigeria. We have an outstanding portfolio of commercial and private projects. We excel as an innovative, creative and people oriented organization providing individual opportunity, personal satisfaction and rewarding challenges to all members of the firm, hence, reassuring your confidence in us as your leading project development firm.",
    "We also offer our clients the best construction development services possible, giving professional advice on investment opportunities for residential and commercial luxury properties.",
  ],
  serviceTitle: "A Title On Service",
  serviceIntro:
    "Founded in 2007, Cemex Portals specializes in providing innovative services such as Architectural designs, Interior Decorations, Engineering and Construction.",
};

export const ourServicesPage = {
  title: "Our Services",
  lead: "From concept through construction, we turn spaces into extraordinary edifices.",
  segments: "Residential | Commercial | Industrial | Hospitality",
  sections: [
    {
      title: "Architectural Design",
      body: [
        "“Architecture is really about well-being. I think that people want to feel good in a space… On the one hand, it’s about shelter, but it’s also about pleasure.”",
        "The quote by Zaha Hadid almost-perfectly captions the Cemex experience. We create detailed, functional, and constructible designs to meet our clients’ expectations. Simply put— It doesn’t stop at what it looks or feels like; At Cemex, design is how it works!",
      ],
    },
    {
      title: "Construction",
      body: [
        "Safety, quality and ethics serve as our construction pillars. Our team includes in-depth construction experts and skilled artisans who apply cutting-edge construction methods & technology to ensure clients’ projects meet and exceed their expectations.",
      ],
    },
    {
      title: "Structural Engineering",
      body: [
        "Our insightful team of structural engineers ensure that appropriate structural considerations are incorporated into designs from conception.",
      ],
    },
    {
      title: "Interior Decoration",
      body: [
        "Functionality meets aesthetics sums up our interior decor motto. From a lavish theme to a minimalist approach, we create environments that tell a luxury tale.",
      ],
    },
    {
      title: "Bespoke Furniture",
      body: [
        "Seeking the perfect piece to complete that office space or turn your house into a home? Look no further! We’re up-to-date with the latest trends whilst keeping tabs with the classics. Whatever suits your taste – vintage, modern or eclectic, we’ll make it happen!",
      ],
    },
  ],
};

export const visionMissionPage = {
  title: "Our Vision / Mission",
  heading: "Our Vision and Mission",
  visionTitle: "Vision",
  vision: "Redefining premium living across Africa.",
  missionTitle: "Mission",
  mission:
    "From concept through construction, we turn spaces into extraordinary edifices.",
};

export type ExecutiveMember = {
  name: string;
  role: string;
  bio: string[];
  detailHref?: string;
};

export const executiveIntro =
  "At Cemex Portals, we not only believe in the TEAM mentality, but also have individual dedicated departments to cater to all of our clients’ needs. We ensure that nothing goes unnoticed and your customer satisfaction is guaranteed; this is our commitment to you.";

export const executiveTeam: ExecutiveMember[] = [
  {
    name: "Odewale Abiodun (M.N.I.C.E)",
    role: "CEO / Creative Director",
    bio: [
      "Biodun’s entrepreneurial journey began as a student, where he innovatively sold bespoke notebooks that he designed and printed himself, catering to his campus community. As his ventures evolved, he transitioned into the gadget industry, frequently travelling between China and Ibadan. In 2013, he refocused on his true passion; Civil Engineering. After years of successfully executing building projects, he invested heavily in his craft.",
      "With a keen eye for detail and an appreciation for the finer things in life, Biodun brings a unique perspective to his work. As the CEO and Creative Director of Cemex Portals, he leverages his expertise and creativity to drive innovation and excellence in the industry.",
    ],
  },
  {
    name: "Mohammed Kaj",
    role: "Technical Director",
    bio: [
      "Mr. Mohammed Kaj is a building and civil engineer with over 40 years of professional experience, currently the managing director of Royal-Bee Limited which was incorporated on 5th June 1990, the company was set up in the civil and building construction business. Mr. Mohammed Kaj has executed several building constructions contract in Lagos-Nigeria such as; the Three Storey building at park view estate, the Engineering building for LASUCOM (LASUTH), Alpha pharmacy and stores limited and so many more, also contributes to projects by offering services and consultation.",
    ],
    detailHref: "https://cemexportals.com/mohammed-kaj/",
  },
  {
    name: "Mr Tari Jeffery Ekpebu (FNIM, FNIMN, FICA, HCIB, M.LOD)",
    role: "Director",
    bio: [
      "Mr Tari Jeffrey Ekpebu is a veteran business leader and corporate executive with over 30 years of professional experience in driving business profitability and organizational development in the Banking and the Oil & Gas sectors. He holds an MBA degree in Marketing and a bachelor’s degree in Management from Rivers State University, Port Harcourt. He also attended several Senior Management Courses in Nigeria and overseas.",
    ],
    detailHref: "https://cemexportals.com/tari-jeffrey-ekpebu/",
  },
  {
    name: "Adenusi Oluseye (FCCA, MBA, CPA)",
    role: "Finance Director",
    bio: [
      "Oluseye Adenusi is a seasoned financial planning and analysis professional, a managerial psychologist and business administrator with over a decade’s experience that span across the commercial banking, fast moving consumer goods (FMCG), pharmaceutical and project management industry. He holds first degree qualifications in applied sciences and accounting and a master’s degree in managerial psychology from the University of Ibadan. He is also an MBA alumnus of the prestigious University of Essex, United Kingdom.",
    ],
  },
  {
    name: "Osibo Imhoitsike (V.I.M.P, MBA)",
    role: "Business Director",
    bio: [
      "Osibo is a Business and Marketing leader with nearly 2 decades experience across multiple sectors and geographies. He has worked with UNIDO, GlaxoSmithKline East Africa and Diageo Nigeria, Opera Software Norway and TBWA in various roles in Brand Management & Project Management.",
      "Since leaving TBWA in 2021, he has worked in the Canadian advertising industry as Group Account Director for One Twenty Three West, responsible for their operations and growth in Toronto, Canada.",
    ],
    detailHref: "https://cemexportals.com/osibo-imhoitsike/",
  },
  {
    name: "Adesola Oluwafemi Idowu",
    role: "Civil / Structural Engineer",
    bio: [
      "Engr Oluwafemi studies Civil Engineering at the Polytechnic Ibadan, and The Federal University of Technology, Akure; and obtained HND Civil (Structures Option) and B. Tech Civil Eng. respectively.",
      "He is a member of the Nigerian Institution of Civil Engineers and has over 10 years of hands-on experience.",
    ],
  },
  {
    name: "Apantaku Temitayo",
    role: "Specialist Partner",
    bio: [
      "Temitayo is a highly skilled and certified Civil Engineer with over 14 years of extensive experience in civil engineering field. Holding certifications from both the Council for the Regulation of Engineering in Nigeria (COREN) and Project Management Professional (PMP), she brings a strong foundation of technical knowledge in finishing engineering and project management expertise to every endeavor.",
      "Her educational background includes a Master’s degree in Facility Management, complementing her engineering skills with a deep understanding of optimizing and maintaining built environments. Throughout her career, she has successfully overseen and contributed to numerous construction projects, demonstrating a keen ability to manage teams, budgets, and timelines effectively.",
    ],
  },
  {
    name: "Sogunro Omolara",
    role: "Associate Business Manager",
    bio: [
      "Omolara is a highly experienced Operations, Administration, and Human Resource Manager, boasting an impressive track record of over a decade in diverse industries, including FMCGs, Logistics, Brand Consulting, Real Estate, and the Construction sector. She excels in meticulous attention to detail and is known for her adept management of professional work environments.",
      "Omolara is driven by a deep personal commitment to fostering human capital development and consistently achieving outstanding results. She earned her Bachelor’s degree in Linguistics from the University of Ado Ekiti, followed by a Master’s degree in Public Administration from the esteemed University of Lagos. Additionally, she holds a Master’s degree in International Business Management from Coventry University in the United Kingdom.",
    ],
  },
  {
    name: "Afolabi Araromi",
    role: "Legal",
    bio: [
      "Afolabi Araromi is the Managing Partner of Trudo Legal, a boutique law firm where he leads a team of industrious lawyers on diverse legal fields and major sectors of the economy including but not limited to construction practice, corporate commercial, Entertainment, Technology and Media, dispute resolution, among others. He commenced his legal career in Templars Law firm, a full commercial service firm with diverse areas of law, from where he garnered and mastered in depth knowledge and practice of the current focus areas of his law practice.",
    ],
    detailHref: "https://cemexportals.com/afolabi-araromi/",
  },
  {
    name: "Ocholi Sunday Etu (MINQS, RQS)",
    role: "Quantity Surveyor",
    bio: [
      "QS. Etu studied Quantity Surveying at the Federal Polytechnic Idah, Kogi State and obtained HND. He is a member of International Project Management Professional (IPMP), member of Nigerian Institute of Quantity Surveyors (NIQS) and a Registered Quantity Surveyor (RQS). He has over 13 years of hands-on experience.",
    ],
  },
];

export const ourClientsPage = {
  title: "Our Clients",
  intro:
    "At Cemex Portals, we take great pride in serving a diverse clientele across numerous industries. Our clients place their trust in us to provide solutions that not only yield results but also enhance efficiency and surpass expectations, whether in the fields of Engineering, Construction, Architecture, or Interior Design.",
};

/** Placeholder strip for the home marquee — replace `logo` with real assets when available. */
export const clientMarqueeItems = [
  { name: "Residential", logo: null as string | null },
  { name: "Commercial", logo: null },
  { name: "Industrial", logo: null },
  { name: "Hospitality", logo: null },
  { name: "Institutional", logo: null },
  { name: "Private Estates", logo: null },
  { name: "Developers", logo: null },
  { name: "Retail", logo: null },
];

export const careerPage = {
  title: "Career",
  heading: "Careers",
  whoTitle: "Who Can Work At Cemex Portals",
  whoBody:
    "Cemex Portals welcomes graduates from all degree levels; Bachelor’s, Master’s, and Ph.D. to join their team. Candidates who not only hold strong academic achievements but also relevant work experience when applicable. Additionally, we value soft skills honed through past leadership and teamwork roles, such as interpersonal effectiveness, communication abilities, time management, presentation skills, and adaptability.",
  departments: [
    "Engineering (civil, structural, building)",
    "Sales / Marketing (Digital and Direct)",
    "Finance / Accounting",
    "Human Resources",
    "Architects",
    "Operations",
  ],
  formLead:
    "Kindly reach out through our contact page with your accurate details to get started.",
};

export const portfolioCategories = {
  architecture: {
    title: "Architecture",
    intro: [
      "“Architecture is really about well-being. I think that people want to feel good in a space… On the one hand it’s about shelter, but it’s also about pleasure.” The quote by Zaha Hadid almost perfectly captions the Cemex experience.",
      "We create detailed, functional and constructible designs to meet our clients’ expectations. Simply put— It doesn’t stop at what it looks or feels like; At Cemex, design is how it works!",
    ],
    projects: [
      { name: "House Mur Blanc", slug: "house-mur-blanc-3" },
      { name: "House O.B.O", slug: "house-o-b-o-3" },
      { name: "Project Alba", slug: "project-alba" },
      { name: "Box House", slug: "box-house-5" },
    ],
  },
  engineering: {
    title: "Engineering",
    intro: [
      "Our insightful team of structural engineers ensure that appropriate structural considerations are incorporated into designs from conception.",
    ],
    projects: [] as { name: string; slug: string }[],
  },
  construction: {
    title: "Construction",
    intro: [
      "Safety, quality and ethics serve as our construction pillars. Our team includes in-depth construction experts and skilled artisans who apply cutting-edge construction methods & technology to ensure clients’ projects meet and exceed their expectations.",
    ],
    projects: [] as { name: string; slug: string }[],
  },
  "interior-decoration": {
    title: "Interior Decoration",
    intro: [
      "Functionality meets aesthetics sums up our interior decor motto. From a lavish theme to a minimalist approach, we create environments that tell a luxury tale.",
    ],
    projects: [] as { name: string; slug: string }[],
  },
} as const;

export type PortfolioCategoryKey = keyof typeof portfolioCategories;

export const projectsListing = [
  { name: "Fab Villa", slug: "fab-villa" },
  { name: "Delight Res", slug: "delight-res" },
  { name: "Ramos Project", slug: "ramos-project" },
  { name: "Zikel Hotel", slug: "zikel-hotel" },
  { name: "Fatgbem Station", slug: "fagbem-station" },
  { name: "Project Nova", slug: "project-nova" },
  { name: "Azores Mall", slug: "azores-mall" },
  { name: "Project 385", slug: "cemex-portals-office" },
  { name: "Project 283", slug: "project-283" },
  { name: "The Healing Pot Project", slug: "the-healing-pot-project" },
  { name: "Amuwo H6", slug: "amuwo-h6" },
  { name: "LakeView", slug: "lakeview" },
  { name: "Beach House", slug: "beach-house" },
  { name: "Aston Tower", slug: "aston-tower" },
];
