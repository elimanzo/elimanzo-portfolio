import React from 'react';
import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import { useTheme } from '@/context/theme-context';
import { ExperienceItem } from '@/lib/types';

type ExperienceTimelineElementProps = {
  item: ExperienceItem;
};

export default function ExperienceTimelineElement({
  item,
}: ExperienceTimelineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background:
            theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'left',
          padding: '1.3rem 2rem',
        }}
        contentArrowStyle={{
          borderRight:
            theme === 'light'
              ? '0.4rem solid #9ca3af'
              : '0.4rem solid rgba(255, 255, 255, 0.05)',
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
          fontSize: '1.5rem',
        }}>
        <div className="scrollbar-thin dark:hover:scrollbar-thumb-sky-500 dark:active:scrollbar-thumb-sky-400 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-300 max-h-[15rem] overflow-y-auto">
          <h3 className="font-semibold capitalize">{item.companyName}</h3>
          <p className="font-normal !mt-0">{item.location}</p>
          <p className="font-normal !mt-0">{item.jobTitle}</p>
          <ul className="!mt-2 !font-normal text-gray-700 list-disc list-inside dark:text-white/75">
            {item.description.list.map((bullet, index) => (
              <li className="gap-2 mb-3" key={index}>
                {bullet}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap !mt-4 gap-2 sm:mt-auto">
            {item.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
    </div>
  );
}
