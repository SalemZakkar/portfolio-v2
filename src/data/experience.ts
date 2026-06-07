import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Mobile App Developer",
    organisation: {
      name: "Unifi Solutions",
      href: "https://unifisolutions.io/",
    },
    date: "AUG 2024 - Present",
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
    date: "JUN 2023 - JUN 2024",
    location: "Baghdad, IRAQ - Remote",
    description: `
Led development of a riding app with Android location tracking using Kotlin, integrating real-time chat and trip tracking with NestJS, PostgreSQL, and Firebase.\n
Contributed to e-commerce and erp applications features, focusing on performance and user experience in ordering and browsing flows\n
Created a comprehensive cross-platform time tracking system with Flutter and Java, featuring HID listener-based activity tracking, screen capture, productivity monitoring, task management, work logging, and real-time data synchronization.\n
Worked closely with backend and mobile teams, utilizing technologies such as Flutter, Dart, Kotlin, Java, NestJS, PostgreSQL, and Firebase.
      `,
  },
    {
    title: "Software Developer Intern",
    organisation: {
      name: "Faya Dev",
      href: "https://faya.dev/",
    },
    date: "DEC 2022 - MAY 2023",
    location: "Baghdad, IRAQ - Remote",
    description: `
•
Developed full-stack mobile applications, engineering responsive frontends with Flutter and building robust backend services using NestJS and PostgreSQL.\n
Refactored application state management in Flutter, significantly improving data flow predictability, reducing code redundancy, and enhancing app performance.\n
Diagnosed and resolved critical bugs across the mobile frontend and NestJS backend, increasing overall application stability and improving the user experience.\n
Built and integrated secure REST APIs, ensuring seamless end-to-end communication and data synchronization between the mobile client and server.
      `,
  }
];
