'use client';

import { motion } from 'framer-motion';

import React from 'react';

import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>Skills</SectionHeading>
      {skillsData.map((skills, index) => (
        <ul
          key={index}
          className="flex flex-wrap justify-left gap-2 text-lg text-gray-800 pb-6">
          <>
            <motion.li
              className="bg-gray-900 text-white border border-black/[0.1] rounded-xl px-5 py-3"
              key={skills.type}
              variants={fadeInAnimationsVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={0}>
              {skills.type}
            </motion.li>
            {skills.data.map((skill, dataIndex) => (
              <motion.li
                className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
                key={dataIndex}
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={dataIndex + 1}>
                {skill}
              </motion.li>
            ))}
          </>
        </ul>
      ))}
    </section>
  );
}
