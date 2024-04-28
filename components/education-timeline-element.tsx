import React from 'react';
import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import { useTheme } from '@/context/theme-context';
import { EducationItem } from '@/lib/types';

type EducationTimelineElementProps = {
  item: EducationItem;
};

export default function EducationTimelineElement({
  item,
}: EducationTimelineElementProps) {
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
          whiteSpace: 'normal',
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
        <div className="flex flex-wrap">
          <h3 className="font-semibold capitalize">{item.title}</h3>
          <p className="font-normal !mt-0">{item.location}</p>
          <p className="!mt-2 !font-normal text-gray-700 dark:text-white/75">
            {item.description}
          </p>
        </div>
      </VerticalTimelineElement>
    </div>
  );
}
