'use client';

import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { ExperienceItem } from '@/lib/types';

import ExperienceTimelineElement from './experience-timeline-element';
import SectionHeading from './section-heading';

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      ref={ref}
      id="experience"
      className="mt-40 max-w-[70rem] scroll-mt-28 ">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item: ExperienceItem, index) => (
          <ExperienceTimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
