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
    title: 'Hartnell College',
    location: 'Salinas, CA',
    description:
      'Associate of Science, Math and Physics | Summa Cum Laude | GPA: 3.95 / 4.0',
    icon: React.createElement(LuGraduationCap),
    date: '2014 - 2017',
  },
  {
    title: 'California State University, Monterey Bay',
    location: 'Seaside, CA',
    description:
      'Bachelor of Science, Computer Science  Summa Cum Laude | GPA: 3.93 / 4.0',
    icon: React.createElement(LuGraduationCap),
    date: '2017 - 2019',
  },
] as const;

export const experiencesData = [
  {
    companyName: 'Digital Nest - bizzNest',
    jobTitle: 'Web Developer Internship',
    location: 'Salinas, CA',
    description: {
      list: [
        'Collaborated closely with other Web Dev interns and UI designers to align project objectives with client expectations, and successfully built 3 websites from the ground up.',
        'Participated in client meetings with project managers to gather requirements, and establish Minimum Viable Products (MVPs) for web projects.',
        'Led projects by defining project scope, establishing task priorities, and organizing stand-up meetings to ensure alignment among team members and timely project delivery.',
        'Contributed to an internal job board tool for the interns, alumni, and career services, by implementing searching and filtering functionalities, and displaying web scraped data from LinkedIn and Indeed.',
        'Developed a tailored Stripe donations plugin within the WordPress framework, including the creation of an admin settings page and implementation of custom form styles.',
        'Provided technical guidance to clients by creating videos and documentation after deploying websites.',
        'Mentored interns on Git, HTML, CSS, and JavaScript fundamentals.',
      ],
    },
    tags: [
      'WordPress',
      'WordPress plugins',
      'Figma',
      'React',
      'TypeScript / JavaScript',
      'HTML',
      'CSS',
      'PHP',
      'Asana',
    ],
    icon: React.createElement(CgWorkAlt),
    date: '2023 - present',
  },
  {
    companyName: 'Reflex Integration Through Play (RITP)',
    jobTitle: 'React Native Software Engineer Apprenticeship',
    location: 'Remote',
    description: {
      list: [
        'RITP is a treatment planning and implementation method for Occupational Therapists working with special needs kids. I am working on the companion app, along with 3 other engineers and an engineering manager.',
        'Transformed their physical memory game into a digital version within the app, and seamlessly integrated animations. The digital version of the game includes animations, music, and enables users to select from a broader range of excercises.',
        'Enhanced exercise search functionality by implementing trie data structure with caching mechanisms, resulting in a 40% improvement in search speed',
        'Implemented new designed playlist UX flow for users to edit their playlist and share with others.',
        'Proposed subscription UX flow, and implemented subscription plans (free trial, monthly, and yearly).',
        'Enhanced user onboarding with NUX (New User Experiences) APIs, tooltips, integration tests, and documentation. This included creating user NUX schemas, mutations, and queries, enabling the retrieval of NUX data from MongoDB to the client. These NUX APIs track tutorials, tooltips, and new user interactions across server and client environments. ',
        'Prototyped a custom video player which included playback controls, and AirPlay functionality.',
      ],
    },
    tags: ['React Native', 'Nest.js', 'Graph QL', 'MongoDB', 'Rest'],
    icon: React.createElement(TbBrandReactNative),
    date: '2023 - present',
  },
] as const;

export const projectsAndActivitiesData = [
  {
    title: 'Cascarita',
    description: {
      list: [
        'Collaborated with a team of engineers and a project manager to develop an app, that simplifies recreational soccer management processes and experiences for both league administrators and participants.',
        'Created a custom form builder inspired by Typeform that allows users to manage and customize forms for their leagues. The form builder includes features like drag and drop, conditional logic, form validation, and analytics, displaying form responses in a table and chart format.',
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
    type: 'Languages',
    data: [
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Python 3',
      'PHP',
      'SQL (MySQL)',
      'Java',
      'C++',
    ],
  },
  {
    type: 'Frameworks',
    data: [
      'React',
      'React Native',
      'Angular',
      'Node.js',
      'MongoDB',
      'GraphQL',
      'Nest.js',
      'Redux',
      'Next.js',
      'Express',
      'Spring Boot',
      'Tailwind',
    ],
  },
  {
    type: 'Developer Tools',
    data: ['Git', 'Docker', 'Asana', 'Jira'],
  },
  {
    type: 'Foreign Languages',
    data: ['Spanish'],
  },
] as const;
