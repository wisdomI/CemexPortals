export type NewsArticle = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  img: string;
  href: string;
};

export const newsArticles: NewsArticle[] = [
  {
    date: "March 5, 2024",
    category: "News",
    title: "The Role of Architectural Design in Construction",
    excerpt:
      "Architectural Design in Construction When it comes to construction, we usually imagine hard hats, heavy machinery, and a lot of sweat. But let's not overlook the silent hero of the building process: Architectural Design. It is the master plan for your dream home or office building, it is the blueprint that makes everything come together",
    img: "https://cemexportals.com/wp-content/uploads/2024/03/amuwo-h6-option-3-1a5-1-1024x1024.jpg",
    href: "https://cemexportals.com/the-role-of-architectural-design-in-construction/",
  },
  {
    date: "February 4, 2022",
    category: "News",
    title: "Effects of Gardens in Homes",
    excerpt:
      "Effects of Gardens in Homes Plan on building a home or renting an apartment? Awesome!Be it built, rental or bought, adding a touch of greenery amidst all the wallsand plastering can be very appealing to the eye. Creating spaces for abeautiful garden not only serve an aesthetic purpose, it also has its own effectin homes",
    img: "https://cemexportals.com/wp-content/uploads/2022/02/Flowers.jpg",
    href: "https://cemexportals.com/effects-of-gardens-in-homes/",
  },
  {
    date: "February 3, 2022",
    category: "News",
    title: "Selecting The Right Sanitaries for Your Home",
    excerpt:
      "Selecting The Right Sanitaries for Your Home Sanitaries relates to the conditions that affect hygiene and health, especially the supply of sewage facilities and clean drinking water. Sanitary wares refer to bathroom fittings that can be plumbed in such as bathtubs, water closets, handwash basins, urinals, etc. These products were manufactured using porcelain, which is",
    img: "https://cemexportals.com/wp-content/uploads/2022/02/Selecting-The-Right-Sanitaries-for-Your-Home.jpg",
    href: "https://cemexportals.com/selecting-the-right-sanitaries-for-your-home/",
  },
];
