/**
 * Rule-based assistant replies. Swap `getBotReply` for an API-backed
 * implementation later if you add a server or serverless endpoint.
 */

import { brochurePdf } from "./siteContent";

export const chatSuggestions = [
  "Our services",
  "Projects & portfolio",
  "Contact & location",
  "WhatsApp us",
] as const;

const WHATSAPP = "https://wa.me/2348181751602";

export const companyQuickFacts = {
  address: "385 Herbert Macaulay Way, St Agnes (Montgomery Junction), Yaba, Lagos 101245, Nigeria",
  email: "info@cemexportals.com",
  phone: "+234 818 175 1602",
  whatsappUrl: WHATSAPP,
  brochureUrl: brochurePdf,
};

export function initialGreeting(): string {
  return (
    "Hello — I’m the Cemex Portals assistant.\n\n" +
    "Ask about our services, projects, how to reach us, or tap a suggestion below. " +
    "For detailed enquiries, our team replies fastest on WhatsApp or via the contact page."
  );
}

function normalize(s: string): string {
  return s.trim().toLowerCase();
}

export function getBotReply(userMessage: string): string {
  const q = normalize(userMessage);
  if (!q) {
    return "Type a question or choose a topic below — I’m here to help.";
  }

  if (/^(hi|hello|hey|good\s(morning|afternoon|evening)|hola)\b/.test(q) || q === "start") {
    return (
      "Hi — thanks for visiting Cemex Portals.\n\n" +
      "We’re a Lagos-based construction and design firm (architecture, engineering, construction, interiors). " +
      "What would you like to know?"
    );
  }

  if (
    /\b(service|services|what do you do|architect|architecture|design|engineer|engineering|structural|construction|build|interior|decor)\b/.test(
      q
    )
  ) {
    return (
      "Cemex Portals offers full-service delivery: architectural design, structural engineering, construction, " +
      "interior design & decoration, project management, and bespoke furniture — across residential, commercial, " +
      "industrial, and hospitality work.\n\n" +
      "See the full breakdown on Our Services in the menu, or tell me if you’re planning residential or commercial work."
    );
  }

  if (/\b(project|projects|portfolio|past work|case stud)\b/.test(q)) {
    return (
      "You can explore Projects for our developments list and Portfolio for disciplines like architecture.\n\n" +
      "Each project has its own page with scope and location details."
    );
  }

  if (/\b(contact|email|phone|call|address|location|lagos|yaba|visit|office)\b/.test(q)) {
    return (
      `Office\n${companyQuickFacts.address}\n\n` +
      `Email\n${companyQuickFacts.email}\n\n` +
      `Phone\n${companyQuickFacts.phone}\n\n` +
      "Open the Contact page to send a message through the site form."
    );
  }

  if (/\b(whatsapp|wa\.me|chat on phone|message us)\b/.test(q)) {
    return (
      "You can reach us on WhatsApp for quick questions and project chats.\n\n" +
      "Use the WhatsApp button in the header, or ask me again and I’ll point you to the link after you open the contact page."
    );
  }

  if (/\b(brochure|pdf|download|company profile)\b/.test(q)) {
    return (
      "Our brochure is available as a PDF from the site (Hero and About sections link to it).\n\n" +
      "If you can’t find it, say “contact” and I’ll repeat our direct details."
    );
  }

  if (/\b(career|job|jobs|hiring|vacancy|work here|graduate)\b/.test(q)) {
    return (
      "We welcome strong candidates across engineering, architecture, operations, and more.\n\n" +
      "Visit Career for who we look for and how to apply — usually via the contact page with your details."
    );
  }

  if (/\b(news|blog|article)\b/.test(q)) {
    return "Latest articles and insights are on the News page in the main navigation.";
  }

  if (/\b(about|who are you|founded|history|cemex)\b/.test(q)) {
    return (
      "Cemex Portals is a full-service construction firm based in Lagos, founded in 2007. " +
      "We focus on luxury residential and commercial work, design excellence, and delivery you can trust.\n\n" +
      "The About section has our full story and leadership."
    );
  }

  if (/\b(quote|pricing|cost|estimate|proposal|enquir|inquiry|start a project)\b/.test(q)) {
    return (
      "For quotes and new projects, share your brief with our team — scope, location, and timeline help us respond properly.\n\n" +
      "Use Contact on this site or WhatsApp (+234 818 175 1602) and we’ll route you to the right person."
    );
  }

  if (/\b(thank|thanks|ty\b|great|perfect)\b/.test(q)) {
    return "You’re welcome. If anything else comes up, just ask — or speak directly with the team via Contact or WhatsApp.";
  }

  return (
    "I don’t have a specific answer for that yet.\n\n" +
    "Try asking about services, projects, contact details, careers, or WhatsApp. " +
    "You can also use the main menu for full pages."
  );
}

export function suggestionToPrompt(suggestion: string): string {
  const map: Record<string, string> = {
    "Our services": "What services does Cemex offer?",
    "Projects & portfolio": "Where can I see your projects and portfolio?",
    "Contact & location": "What is your address, email, and phone?",
    "WhatsApp us": "How do I reach you on WhatsApp?",
  };
  return map[suggestion] ?? suggestion;
}
