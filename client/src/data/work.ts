// Delivered client projects. Shown on /work and cited as case studies by the
// page outlines (src/data/outlines) — only real, live projects belong here.

import type { WorkProject } from "@/components/WorkCard";

export const WORK_PROJECTS = [
  {
    id: "tripskyway",
    name: "Travel Booking Website",
    client: "Trip Sky Way",
    summary:
      "Trip Sky Way is a modern travel booking platform designed to help travelers discover destinations and plan seamless journeys.",
    description:
      "We developed a clean, responsive travel website focused on intuitive navigation, fast performance, and a streamlined booking experience tailored to modern travelers.",
    image: "/work2/TripSkyWay.webp",
    link: "https://tripskyway.com/",
  },
  {
    id: "holidayvibes",
    name: "Tour & Travel Website",
    client: "Holiday Vibes Tour",
    summary:
      "Holiday Vibes Tour is a travel website built to promote curated tours and immersive travel experiences.",
    description:
      "We crafted a vibrant and responsive platform that enables users to explore tour packages, view detailed itineraries, and make inquiries with ease.",
    image: "/work2/HolidayVibesTour.jpg",
    link: "https://holidayvibestour.com/",
  },
  {
    id: "yomaldives",
    name: "B2B Portal for Travel Agents",
    client: "Yomaldives",
    summary:
      "Yomaldives, a B2B portal designed to help travel agents boost their revenue.",
    description:
      "This platform is a perfect example of how our bespoke software solutions can empower businesses and drive success. This project highlights our ability to deliver tailored software solutions that meet our clients’ specific business needs.",
    image: "/work2/yomaldives.webp",
    link: "https://yomaldives.live/",
  },

  {
    id: "dreamspeed",
    name: "Speedboat Ticket Booking System",
    client: "Dream Speed",
    summary:
      "We’re thrilled to showcase our latest project, the Dream Speed Speedboat Booking System. We developed this platform to help travelers effortlessly search routes, check availability, and book their island journeys in the Maldives.",
    description:
      "This project is a perfect example of our commitment to creating bespoke software that solves real-world challenges and enhances user experiences.",
    image: "/work2/dreamspeed.jpg",
    link: "https://www.dreamspeedmaldives.com/",
  },
  {
    id: "islekey",
    name: "All-in-one Travel Agency Web Application",
    client: "Islekey Holidays",
    summary:
      "We’re excited to showcase a project close to our hearts: IsleKey Holdings, an all-in-one web application for a travel agency.",
    description:
      "We built a platform that not only manages bookings but truly helps users “Experience Paradise” from the moment they land on the site. This project is a perfect example of our ability to create seamless, user-friendly solutions that elevate businesses and delight their customers.",
    image: "/work2/islekeyholidays.webp",
    link: "https://islekeyholidays.com/",
  },
  {
    id: "traveliccted",
    name: "Travel Agency Website",
    client: "Traveliccted",
    summary:
      "Traveliccted is a travel-focused website built to showcase curated travel experiences and destination packages.",
    description:
      "This project highlights our ability to design engaging travel platforms that combine strong visual storytelling with user-friendly booking flows and conversion-focused layouts.",
    image: "/work2/Traveliccted.webp",
    link: "https://traveliccted.com/",
  },
  {
    id: "crownvoyages",
    name: "Travel Agency Management System",
    client: "Crown Voyages",
    summary:
      "Crown Voyages is a powerful travel agency management system with automatic quotation generation designed to streamline operations.",
    description:
      "We developed a comprehensive platform that enables travel agencies to manage bookings, generate quotations automatically, handle clients, and optimize daily operations through a centralized system.",
    image: "/work2/CrownVoyages.webp",
    link: "https://portal.crownvoyages.com/",
  },

  {
    id: "holidaylife",
    name: "Travel Agency Websites",
    client: "Holiday Life",
    summary:
      "We’re proud to showcase Holiday Life, a custom web application we developed for a travel agency.",
    description:
      "Our team worked to create a seamless, user-friendly platform that helps users find their dream holiday. This project is a testament to our commitment to building high-quality, impactful software solutions.",
    image: "/work2/holidaylife.webp",
    link: "https://holidaylife.travel/",
  },
] as const satisfies readonly (WorkProject & { id: string })[];

export type WorkProjectId = (typeof WORK_PROJECTS)[number]["id"];

export const getWorkProject = (id: WorkProjectId) => WORK_PROJECTS.find((p) => p.id === id)!;
