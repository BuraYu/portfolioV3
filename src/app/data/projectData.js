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
  {
    id: "2",
    title: "DevMatch",
    description:
      "A developer networking platform with real-time messaging and profile matching.",
    tech: {
      frontend: ["Vue", "TailwindCSS"],
      backend: ["Firebase", "Express"],
    },
    previewImage: {
      url: "https://picsum.photos/id/1020/300/200",
      alt: "DevMatch preview",
    },
    carouselImages: [
      {
        url: "https://picsum.photos/id/1021/800/500",
        alt: "Homepage with profiles",
      },
      {
        url: "https://picsum.photos/id/1022/800/500",
        alt: "Chat view",
      },
      {
        url: "https://picsum.photos/id/1023/800/500",
        alt: "Match result",
      },
    ],
    links: {
      github: "https://github.com/burayu/devmatch",
      live: "https://devmatch.vercel.app",
    },
  },
  {
    id: "3",
    title: "EventEase",
    description:
      "An event management tool with RSVP handling, guest analytics, and photo uploads.",
    tech: {
      frontend: ["Svelte", "TailwindCSS"],
      backend: ["Supabase"],
    },
    previewImage: {
      url: "https://picsum.photos/id/1035/300/200",
      alt: "EventEase preview",
    },
    carouselImages: [
      {
        url: "https://picsum.photos/id/1036/800/500",
        alt: "Dashboard view",
      },
      {
        url: "https://picsum.photos/id/1037/800/500",
        alt: "Guest analytics",
      },
      {
        url: "https://picsum.photos/id/1038/800/500",
        alt: "Upload section",
      },
    ],
    links: {
      github: "https://github.com/burayu/eventease",
      live: "https://eventease.vercel.app",
    },
  },
];

export default projectData;
