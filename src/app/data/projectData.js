import rsvpCreateEventImage from "../assets/rsvp/create_event.png";
import rsvpMainImage from "../assets/rsvp/main.png";
import rsvpOverviewImage from "../assets/rsvp/event_overview.png";
import rsvpEventDetailsImage from "../assets/rsvp/event_details.png";
import rsvpFindEventImage from "../assets/rsvp/find_event.png";
import rsvpRsvpImage from "../assets/rsvp/rsvp.png";
import rsvpPreview from "../assets/rsvp/preview.png";

// shalia
import shaliaAboutUse from "../assets/shalia/about_us.png";
import shaliaContactPage from "../assets/shalia/contact_page.png";
import shaliaMainShalia from "../assets/shalia/main_mobile.png";
import shaliaMainMobile from "../assets/shalia/main_shalia.png";
import shaliaProductOverview from "../assets/shalia/product_overview.png";
import shaliaPreview from "../assets/shalia/preview.png";

const projectData = [
  {
    id: "1",
    title: "Flokr",
    description: "RSVP and event managing app for flockin with people.",
    tech: {
      frontend: ["Next.JS", "TailwindCSS"],
      backend: ["MongoDB"],
    },
    previewImage: {
      url: rsvpPreview,
      alt: "Main screen of the Flokr RSVP app",
    },
    carouselImages: [
      {
        url: rsvpMainImage,
        alt: "Main screen of the Flokr RSVP app",
      },
      {
        url: rsvpEventDetailsImage,
        alt: "Event details view showing description and attendees",
      },
      {
        url: rsvpOverviewImage,
        alt: "Dashboard overview with multiple upcoming events",
      },
      {
        url: rsvpCreateEventImage,
        alt: "Create event form with fields for title, date, and location",
      },
      {
        url: rsvpFindEventImage,
        alt: "Search and browse screen for public events",
      },
      {
        url: rsvpRsvpImage,
        alt: "RSVP response page with Yes/No/Maybe options",
      },
    ],
    links: {
      github: "https://github.com/burayu/rsvp",
      live: "https://rsvp-rust.vercel.app/",
    },
  },
  {
    id: "2",
    title: "Shalia",
    description:
      "Shalia is a product showcase platform where users can browse available products, place orders, and download the full product catalog for offline viewing.",
    tech: {
      frontend: ["Next.JS", "TailwindCSS"],
      backend: ["MongoDB"],
    },
    previewImage: {
      url: shaliaPreview,
      alt: "Main screen of the Flokr RSVP app",
    },
    carouselImages: [
      {
        url: shaliaMainMobile,
        alt: "Shalia mobile view showing the main landing screen",
      },
      {
        url: shaliaMainShalia,
        alt: "Shalia desktop view of the main screen",
      },
      {
        url: shaliaProductOverview,
        alt: "Product overview section with highlighted features",
      },
      {
        url: shaliaAboutUse,
        alt: "About us page with company mission and values",
      },
      {
        url: shaliaContactPage,
        alt: "Contact page with form and company contact details",
      },
    ],
    links: {
      github: "https://github.com/burayu/rsvp",
      live: "https://rsvp-rust.vercel.app/",
    },
  },
];

export default projectData;
