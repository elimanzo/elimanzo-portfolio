'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Passionate</span> about creating things
        that bring joy to others.{' '}
        <span className="italic">It's always satisfying</span> overcoming
        challenges and problem solving as a{' '}
        <span className="font-medium">software engineer</span>. I{' '}
        <span className="underline">thrive</span> on collaboration, learning,
        and growing with my peers. To seek out better solutions, I am always
        committed to staying updated on the latest tech trends. My core stack is{' '}
        <span className="font-medium">
          React, React Native, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, listening to music, and watching movies / anime. I'm also
        exploring <span className="font-medium">new interests</span> like hiking
        and learning to play the guitar.
      </p>
    </motion.section>
  );
}
