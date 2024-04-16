import React from 'react';

import { projectsAndActivitiesData } from '@/lib/data';

import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  return (
    <section>
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
