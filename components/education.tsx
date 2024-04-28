'use client';

import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { educationData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { EducationItem } from '@/lib/types';

import EducationTimelineElement from './education-timeline-element';
import SectionHeading from './section-heading';

export default function Experience() {
  const { ref } = useSectionInView('Education');

  return (
    <section
      ref={ref}
      id="education"
      className="mt-40 max-w-[70rem] scroll-mt-28 ">
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item: EducationItem, index) => (
          <EducationTimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
