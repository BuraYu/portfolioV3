import rsvpCreateEventImage from "../assets/rsvp/create_event.png";
import rsvpMainImage from "../assets/rsvp/main.png";
import rsvpOverviewImage from "../assets/rsvp/event_overview.png";
import rsvpEventDetailsImage from "../assets/rsvp/event_details.png";
import rsvpFindEventImage from "../assets/rsvp/find_event.png";
import rsvpRsvpImage from "../assets/rsvp/rsvp.png";

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
      url: rsvpMainImage,
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
];

export default projectData;
