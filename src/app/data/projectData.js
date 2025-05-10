const projectData = [
  {
    id: "1",
    title: "TechBook",
    description:
      "A responsive e-commerce platform with cart functionality, user authentication, and payment processing.",
    tech: {
      frontend: ["React", "TailwindCSS", "Next.js"],
      backend: ["NodeJS", "MongoDB"],
    },
    previewImage: {
      url: "https://picsum.photos/id/1015/300/200",
      alt: "TechBook preview",
    },
    carouselImages: [
      {
        url: "https://picsum.photos/id/1015/800/500",
        alt: "TechBook homepage view",
      },
      {
        url: "https://picsum.photos/id/1016/800/500",
        alt: "Cart page",
      },
      {
        url: "https://picsum.photos/id/1018/800/500",
        alt: "Admin dashboard",
      },
    ],
    links: {
      github: "https://github.com/burayu/techbook",
      live: "https://techbook.vercel.app",
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
