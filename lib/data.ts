import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import { TbBrandReactNative } from 'react-icons/tb';

import calSPEEDImg from '@/public/calSPEED.png';
import codeChroniclesImg from '@/public/codeChronicles.jpg';
import discordBotImg from '@/public/raiderTrackerBot.png';
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
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
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
      'Associate of Science, Math and Physics | Summa Cum Laude | GPA: 3.95/4.0',
    icon: React.createElement(LuGraduationCap),
    date: '2014 - 2017',
  },
  {
    title: 'California State University, Monterey Bay',
    location: 'Seaside, CA',
    description:
      'Bachelor of Science, Computer Science | Summa Cum Laude |  GPA: 3.93/4.0',
    icon: React.createElement(LuGraduationCap),
    date: '2017 - 2019',
  },
];

export const experiencesData = [
  {
    companyName: 'Digital Nest - bizzNest',
    jobTitle: 'Web Developer Internship',
    location: 'Salinas, CA',
    description: {
      list: [
        'Collaborated closely with other Web Dev interns and UI designers to align project objectives with client expectations, and successfully built 6 websites from the ground up.',
        'Participated in client meetings with project managers to gather requirements, and establish Minimum Viable Products (MVPs) for web projects.',
        'Provided technical guidance to clients by creating videos and documentation after deploying websites.',
        'Mentored interns on Git, HTML, CSS, and JavaScript fundamentals.',
      ],
    },
    tags: [
      'WordPress',
      'WordPress plugins',
      'Figma',
      'React',
      'TypeScript/JavaScript',
      'HTML',
      'CSS',
      'PHP',
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
        'Prototyped a custom video player which included playback controls, and AirPlay functionality.',
        'Transformed their physical memory game into a digital version within the app, and seamlessly integrated animations. The digital version of the game includes animations, music, and enables users to select from a broader range of excercises.',
        'Proposed subscription UX flow, and implemented subscription plans (free trial, monthly, and yearly).',
        'Enhanced user onboarding with NUX (New User Experiences) APIs, tooltips, integration tests, and documentation. This included creating user NUX schemas, mutations, and queries, enabling the retrieval of NUX data from MongoDB to the client. These NUX APIs track tutorials, tooltips, and new user interactions across server and client environments. ',
      ],
    },
    tags: ['React Native', 'Nest.js', 'Graph QL', 'MongoDB', 'Rest'],
    icon: React.createElement(TbBrandReactNative),
    date: '2023 - present',
  },
] as const;

export const projectsAndActivitiesData = [
  {
    title: 'Code Chronicles',
    description:
      'Community of engineers who want to consistently improve at coding and system design. Community focuses on developing a problem-solving habit to enhance overall coding proficiency.',

    tags: ['TypeScript', 'React Native'],
    imageUrl: codeChroniclesImg,
    gitHubUrl: 'https://github.com/code-chronicles-code',
  },
  {
    title: 'Discord Raid Tracker',
    description:
      'Built a Discord bot that creates and tracks user data and hosted events. The bot includes message interactions, thread posting, slash command handling, and event scheduling automation.',
    tags: ['TypeScript / JavaScript', 'Discord.js', 'Node.js'],
    imageUrl: discordBotImg,
    gitHubUrl: 'https://github.com/elimanzo/Raider-Tracker-Economy-Bot',
  },
  {
    title: 'Track My Gainz',
    description:
      'A fitness web app that allows users to track the amount of calories they are consuming a day, and share their fitness goals with other users. It has features like posting, liking, commenting, and pagination.',
    tags: ['React', 'Redux', 'Express', 'MongoDB', 'Material-UI'],
    imageUrl: trackMyGainzImg,
    gitHubUrl: 'https://github.com/elimanzo/TrackMyGainzApp',
  },
  {
    title: 'Capstone - CALSPEED',
    description:
      'Implemented new features for CalSPEED that fetches broadband data from the CPUC to show users which carriers offer the best broadband speeds for the price at their local area.',

    tags: ['Java', 'Javascript', 'Android'],
    imageUrl: calSPEEDImg,
    gitHubUrl: null,
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
