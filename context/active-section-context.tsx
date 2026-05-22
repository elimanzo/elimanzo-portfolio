'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  // Scroll-spy fallback: determine which section is closest to viewport
  // center and update `activeSection`. Skips updates shortly after a
  // nav click to avoid fighting the user's intentional selection.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let ticking = false;
    const onScroll = () => {
      if (Date.now() - timeOfLastClick < 800) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        try {
          // Import links dynamically to avoid circular import issues
          // with types depending on data.
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const { links } = require('@/lib/data');
          const viewportCenter = window.innerHeight / 2;
          let closestName: SectionName | null = null;
          let closestDist = Infinity;
          links.forEach((link: { name: SectionName; hash: string }) => {
            const el = document.querySelector(link.hash) as HTMLElement | null;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const dist = Math.abs(centerY - viewportCenter);
            if (dist < closestDist) {
              closestDist = dist;
              closestName = link.name;
            }
          });
          if (closestName && closestName !== activeSection) {
            setActiveSection(closestName);
          }
        } catch (e) {
          // ignore
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // run once to set initial state
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [timeOfLastClick, activeSection]);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    );
  }
  return context;
}
