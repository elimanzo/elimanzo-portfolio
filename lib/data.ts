import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import { TbBrandReactNative } from 'react-icons/tb';

import calSPEEDImg from '@/public/calSPEED.png';
import cascaritaImg from '@/public/cascarita.png';
import codeChroniclesImg from '@/public/codeChronicles.jpg';
import porfolioImg from '@/public/porfolio.png';
import discordBotImg from '@/public/raiderTrackerBot.png';
import somosImg from '@/public/somos.png';
import trackMyGainzImg from '@/public/trackMyGainzApp.png';

export const socialMediaLinks = {
  linkedin: 'https://linkedin.com/in/eli-manzo',
  github: 'https://github.com/elimanzo',
  leetcode: 'https://leetcode.com/elimanzo/',
  email: 'eli.manzo.dev@gmail.com',
  phone: '831-258-9649',
} as const;

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const educationData = [
  {
    title: 'California State University, Monterey Bay',
    location: 'Seaside, CA',
    description:
      'Bachelor of Science, Computer Science  Summa Cum Laude | GPA: 3.95 / 4.0',
    icon: React.createElement(LuGraduationCap),
    date: 'May 2019',
  },
  {
    title: 'Hartnell College',
    location: 'Salinas, CA',
    description:
      'Associate of Science, Math and Physics | Summa Cum Laude | GPA: 3.95 / 4.0',
    icon: React.createElement(LuGraduationCap),
    date: '2014 - 2017',
  },
] as const;

export const experiencesData = [
  {
    companyName: 'Digital Nest',
    jobTitle: 'IT Instructor | Technical Educator - Part-time',
    location: 'Watsonville, CA',
    description: {
      list: [
        'Led lab-based instruction on Windows administration, networking fundamentals, virtualization, and system troubleshooting with emphasis on real-world debugging workflows',
        'Mentored members through structured root-cause analysis exercises covering operating system failures, authentication issues, network misconfigurations, and performance bottlenecks',
        'Designed and developed Trackly, an internally adopted multi-tenant asset tracking platform supporting inventory management and operational workflows',
      ],
    },
    tags: ['Windows', 'Networking', 'Virtualization', 'Teaching'],
    icon: React.createElement(CgWorkAlt),
    date: 'Feb. 2026 - Present',
  },
  {
    companyName: 'TED AI',
    jobTitle: 'Software Engineer - Part-time',
    location: 'San Francisco, CA',
    description: {
      list: [
        'Built and shipped production event pages for TED AI 2025 in React and Next.js, supporting registration, speaker, and schedule flows for a live public conference.',
      ],
    },
    tags: ['React', 'Next.js', 'TypeScript / JavaScript'],
    icon: React.createElement(CgWorkAlt),
    date: 'Sep. 2025 - Nov. 2025',
  },
  {
    companyName: 'Gather',
    jobTitle: 'Product Engineer - Contract',
    location: 'Remote',
    description: {
      list: [
        'Designed and implemented real-time spatial onboarding experience in React including audio cue system, auto-muting behavior, and presence indicators to reduce early-user confusion in virtual environments.',
        'Implemented interactive workspace UI system using React and Phaser, supporting live user presence rendering and synchronized environmental state across sessions.',
        'Developed avatar customization system including outfit selection, audio controls, and ambient conversation settings to increase user personalization during onboarding.',
        'Implemented real-time notification system for meetings and social interactions including desktop alerts and in-app engagement triggers.',
      ],
    },
    tags: ['React', 'Phaser', 'Realtime', 'UX'],
    icon: React.createElement(CgWorkAlt),
    date: 'Dec. 2024 - Mar. 2025',
  },
  {
    companyName: 'Digital Nest (bizzNEST)',
    jobTitle: 'Senior Software Developer - Associate',
    location: 'Salinas, CA',
    description: {
      list: [
        'Delivered client-facing web applications in a fast-paced agency environment, translating Figma designs into responsive production sites using React, JavaScript, WordPress, and PHP across multiple concurrent client projects.',
        'Developed internal job board tooling including search, filtering, and web scraping pipelines to automate content aggregation for staff use.',
        'Built a custom Stripe donation plugin with admin configuration tooling and dynamic donation UI components for client websites.',
        'Engineered scheduling platform for Career Services to coordinate recurring networking sessions and improve participant engagement.',
      ],
    },
    tags: ['React', 'WordPress', 'Stripe', 'Web Scraping'],
    icon: React.createElement(CgWorkAlt),
    date: 'Aug. 2023 - Nov. 2024',
  },
  {
    companyName: 'Polaris Therapy (Reflex Integration Through Play)',
    jobTitle: 'React Native Software Engineer - Apprenticeship',
    location: 'Remote',
    description: {
      list: [
        'Enhanced React Native application features and UX in collaboration with a small product team, delivering iterative improvements to child-focused therapeutic workflows.',
        'Improved mobile app performance by ~10% by implementing trie-based indexing and caching layer for exercise search, validated using Web Performance API and user engagement analytics.',
        'Built interactive memory-based game system with animation sequencing and playlist-driven exercise flows to increase user engagement and session completion',
        'Implemented subscription-based feature gating in React Native app, restricting access to premium content based on user entitlement state',
      ],
    },
    tags: ['React Native', 'Performance', 'UX'],
    icon: React.createElement(TbBrandReactNative),
    date: 'Nov. 2023 - Jun. 2024',
  },
] as const;

export const projectsAndActivitiesData = [
  {
    title: 'Cascarita',
    description: {
      list: [
        'Collaborated with a team of engineers and a project manager to develop an app, that simplifies recreational soccer management processes and experiences for both league administrators and participants.',
        'Created a custom form builder inspired by Typeform that allows users to manage and customize forms for their leagues. The form builder includes features like drag and drop, conditional logic, form validation, Stripe integration, and analytics, displaying form responses in a table and chart format.',
        'Developed a digital ID card system to replace physical cards, reducing card creation time by 20% and streamlining player check-ins for games and practices.',
        'Created team roster dashboard, enabling soccer league managers to organize teams and track player participation.',
        'Implemented centralized logging with Sentry, allowing developers to monitor, and respond to production errors in real time.',
      ],
    },
    tags: [
      'TypeScript',
      'React',
      'MongoDB',
      'Express',
      'MySQL',
      'Jira',
      'Confluence',
    ],
    imageUrl: cascaritaImg,
    gitHubUrl: 'https://github.com/cascaritaco/cascarita',
    otherUrl: null,
  },
  {
    title: 'Somos',
    description: {
      list: [
        'Somos is a Central Coast Tech Association that creates collaborative network of tech professionals committed to empowering aspiring tech individuals, fostering community growth.',
        'Collaborated with a team of three engineers to develop a web app enabling users to join events and connect with other tech professionals.',
      ],
    },
    tags: ['TypeScript', 'React'],
    imageUrl: somosImg,
    gitHubUrl: 'https://github.com/somos831/somos',
    otherUrl: 'https://somos831.com/',
  },
  {
    title: 'Code Chronicles',
    description: {
      list: [
        'Community of engineers who want to consistently improve at coding and system design. Community focuses on developing a problem-solving habit to enhance overall coding proficiency',
      ],
    },
    tags: ['TypeScript', 'React Native'],
    imageUrl: codeChroniclesImg,
    gitHubUrl: 'https://github.com/code-chronicles-code',
    otherUrl: null,
  },
  {
    title: 'Discord Raid Tracker',
    description: {
      list: [
        'Built a Discord bot that creates and tracks user data and hosted events. The bot includes message interactions, thread posting, slash command handling, and event scheduling automation.',
      ],
    },
    tags: ['TypeScript / JavaScript', 'Discord.js', 'Node.js'],
    imageUrl: discordBotImg,
    gitHubUrl: 'https://github.com/elimanzo/Raider-Tracker-Economy-Bot',
    otherUrl: null,
  },
  {
    title: 'Track My Gainz',
    description: {
      list: [
        'A fitness web app that allows users to track the amount of calories they are consuming a day, and share their fitness goals with other users. It has features like posting, liking, commenting, and pagination.',
      ],
    },
    tags: ['React', 'Redux', 'Express', 'MongoDB', 'Material-UI'],
    imageUrl: trackMyGainzImg,
    gitHubUrl: 'https://github.com/elimanzo/TrackMyGainzApp',
    otherUrl: null,
  },
  {
    title: 'My Personal Porfolio',
    description: {
      list: ['My very first personal website / portfolio.'],
    },
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Framer Motion',
      'React Email & Resend',
    ],
    imageUrl: porfolioImg,
    gitHubUrl: 'https://github.com/code-chronicles-code',
    otherUrl: 'https://www.elimanzo.me/',
  },
  {
    title: 'Capstone - CALSPEED',
    description: {
      list: [
        'Implemented new features for CalSPEED that fetches broadband data from the CPUC to show users which carriers offer the best broadband speeds for the price at their local area.',
      ],
    },
    tags: ['Java', 'Javascript', 'Android'],
    imageUrl: calSPEEDImg,
    gitHubUrl: null,
    otherUrl: 'http://calspeed.org/',
  },
] as const;

export const skillsData = [
  {
    type: 'Core',
    data: ['JavaScript', 'TypeScript', 'React', 'SQL', 'HTML', 'CSS'],
  },
  {
    type: 'Frameworks and Libraries',
    data: [
      'React Native',
      'Redux',
      'MobX',
      'Next.js',
      'Node.js',
      'Prisma',
      'GraphQL',
      'WordPress',
      'Phaser',
    ],
  },
  {
    type: 'Exposure',
    data: ['Python 3', 'MongoDB', 'Sequelize', 'PHP'],
  },
  {
    type: 'Developer Tools',
    data: [
      'Git',
      'Docker',
      'DBeaver',
      'Jira',
      'Linear',
      'Asana',
      'Claude Code',
      'Codex',
    ],
  },
  {
    type: 'Foreign Languages',
    data: ['Spanish'],
  },
] as const;
