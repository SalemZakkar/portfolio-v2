import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Software Developer",
    organisation: {
      name: "Unifi Solutions",
      href: "https://unifisolutions.io/",
    },
    date: "AUG 2024 - JAN 2026",
    location: "Montreal, Canada - Remote",
    description: `
Developed cross-platform mobile apps for IoT, medical, and maintenance using flutter , Jira , Bitbucket.\n
Integrated offline-first architecture with local storage and syncing mechanisms to ensure reliability in low-connectivity environments.\n
Used Kotlin for implementing alarm systems and integrating Firebase Remote Config for dynamic feature control on Android.\n
Worked with Web Sockets and Firebase for real-time communication and data updates.\n
Integrated Google Maps with marker clustering for efficient geolocation data visualization in apps.\n
Implemented Stripe payment integration for seamless and secure transactions.
    `,
  },
  {
    title: "Software Developer",
    organisation: {
      name: "Faya Dev",
      href: "https://faya.dev/",
    },
    date: "MAY 2023 - MAY 2024",
    location: "Baghdad, IRAQ - Remote",
    description: `
developed two e-commerce apps with 100K+ and 50K+ downloads respectively using Flutter.\n
Led development of a ride-booking app with live GPS tracking, real-time route updates, and driver status management.\n
Led development of task-based rewards app with activity tracking, session backups, and automatic screenshot capture for task verification.\n
Used Java for performance-critical features like background location tracking, online/offline status, and service management.\n
Integrated Firebase (Auth, Firestore, Messaging, Realtime Database, Cloud Functions) for real-time communication, authentication, push notifications, and backend syncing.
      `,
  }
];
