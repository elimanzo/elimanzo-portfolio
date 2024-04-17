'use client';

import React from 'react';

import { projectsAndActivitiesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} className="scroll-mt-28" id="projects">
      <SectionHeading>Projects And Activities</SectionHeading>
      <div>
        {projectsAndActivitiesData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
