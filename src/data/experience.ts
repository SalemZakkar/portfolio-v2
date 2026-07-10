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
Developed and maintained production-ready Flutter applications for IoT, medical, and maintenance solutions, focusing on reliability, performance, and scalable mobile architecture.\n
Integrated offline-first architecture with local storage and syncing mechanisms to ensure reliability in low-connectivity environments.\n
Used Kotlin for implementing alarm systems and integrating Firebase Remote Config for dynamic feature control on Android. \n
Implemented real-time communication features using WebSockets and Firebase, enabling reliable data synchronization and live updates.\n
Developed custom Flutter packages and plugins using Kotlin to integrate native Android capabilities and platform-specific features. \n
Integrated Google Maps with marker clustering for efficient geolocation data visualization in apps. \n
    `,
  },
  {
    title: "Software Engineer",
    organisation: {
      name: "Faya Dev",
      href: "https://faya.dev/",
    },
    date: "JUN 2023 - JUN 2024",
    location: "Baghdad, IRAQ - Remote",
    description: `
Led the development of a ride-hailing application with real-time location tracking, chat functionality, and trip management using Flutter, NestJS, PostgreSQL, and Firebase. \n
Implemented Android foreground services to support reliable background location tracking and continuous trip updates. \n
Developed and optimized e-commerce and ERP applications, improving performance and enhancing user experience across ordering and browsing workflows. \n
Built a comprehensive cross-platform time tracking system using Flutter and Java, including activity monitoring, HID listener integration, screen capture, task management, work logging, and real-time data synchronization.\n
Collaborated with mobile and backend teams to design, implement, and maintain scalable application features across frontend and backend systems. \n
      `,
  },
    {
    title: "Software Engineer Intern",
    organisation: {
      name: "Faya Dev",
      href: "https://faya.dev/",
    },
    date: "DEC 2022 - MAY 2023",
    location: "Baghdad, IRAQ - Remote",
    description: `
Developed full-stack mobile applications by building responsive Flutter applications and backend services using NestJS and PostgreSQL. \n
Refactored Flutter application architecture and state management, improving code maintainability, reducing redundancy, and enhancing application performance. \n
Diagnosed and resolved critical issues across mobile and backend systems, improving application stability and user experience. \n
Designed and integrated REST APIs to enable reliable communication and data synchronization between mobile clients and backend services. \n
      `,
  }
];
