import { RefObject, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSectionContext } from '@/context/active-section-context';

import type { SectionName } from './types';

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin: '-35% 0px -35% 0px',
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
