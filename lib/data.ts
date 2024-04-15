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
      type: 'ulist',
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
      type: 'ulist',
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
    title: 'Capstone Project - CALSPEED Android/Desktop',
    description: {
      type: 'ulist',
      list: [
        'Collaborated with three students at CSUMB (California State University, Monterey Bay) and a project manager to develop and implement new features for CalSPEED, a professional-level testing tool released by the California Public Utilities Commission (CPUC).',
        'Fetched ISPs / Mobile data from the CPUC to show users which carriers offer the best upload and download speeds for the price at their local area using ArcGIS.',
      ],
    },
    tags: ['Java', 'Javascript', 'Android Development'],
    imageUrl: calSPEEDImg,
    gitHubUrl: null,
  },
  {
    title: 'Track My Gainz Web App',
    description: {
      type: 'ulist',
      list: [
        'Track My Gainz is a fitness web application that allows users to track the amount of calories they are consuming a day, and share their fitness goals with other users.',
        'Transformed their physical memory game into a digital version within the app, and seamlessly integrated animations. The digital version of the game includes animations, music, and enables users to select from a broader range of excercises.',
        'Engineered schemas, routes, and controllers to manage data pertaining to meals, posts, and user profiles on the backend.',
        'Implemented authentication, includingGoogle OAuth  integration.',
        "Enhanced user engagement by introducing features for post management, enabling users to explore, search, comment, and like each other's posts.",
        'Expanded post functionality to include detailed views and personalized recommendations based on user activity.',
      ],
    },
    tags: ['React', 'Redux', 'Express', 'MongoDB', 'Material-UI'],
    imageUrl: trackMyGainzImg,
    gitHubUrl: null,
  },
  {
    title: 'Discord Raid Tracker Bot',
    description: {
      type: 'ulist',
      list: [
        'Built a Discord bot for a MMORPG community Discord server of 1000+ people that creates and tracks user  information and events. The bot sends embedded sign-ups for specific roles, keeps track of retention rate, and options to manage events.',
        'Implemented message interactions, thread posting, slash command handling, event scheduling automation, fetching external APIs, and logging user information using Discord API.',
        'Facilitated contributions to the project, adding Docker integration, AWS services, and additional logging functionality.',
      ],
    },
    tags: ['TypeScript/JavaScript', 'Discord.js', 'Node.js'],
    imageUrl: discordBotImg,
    gitHubUrl: null,
  },
  {
    title: 'Code Chronicles',
    description: {
      type: 'ulist',
      list: [
        'Code Chronicles is a community of engineers ranging from new grads to seasoned senior engineers who want to consistently improve at coding and system design. This community goes beyond solving LeetCode problems, and focuses on developing a problem-solving habit to enhance overall coding proficiency.',
        'Engaged in live discussions on Data Structures and Algorithm topics, offering code reviews and assisting individuals with their questions.',
        'Maintained a 255-day streak by solving a new algorithm problem every single day. Solved over 400 problems on LeetCode.',
        'Prototyped 5 games as part of a React Native crash course.',
      ],
    },
    tags: ['TypeScript', 'React Native', 'Data Structures and Algorithms'],
    imageUrl: codeChroniclesImg,
    gitHubUrl: null,
  },
] as const;

export const skillsData = [
  {
    languages: [
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
    frameworks: [
      'React',
      'React Native',
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
    developerTools: ['Git', 'Docker', 'Asana', 'Jira'],
    foreignLanguages: ['Spanish'],
  },
] as const;
