'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  return (
    <section ref={ref} id="experience" className="max-w-[70rem] scroll-mt-28 ">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem',
              }}>
              <div className="max-h-[15rem] overflow-y-auto">
                <h3 className="font-semibold capitalize">{item.companyName}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <ul className="!mt-2 !font-normal text-gray-700 list-disc list-inside">
                  {item.description.list.map((bullet, index) => (
                    <li className="gap-2 mb-3" key={index}>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap !mt-4 gap-2 sm:mt-auto">
                  {item.tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                      key={index}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
