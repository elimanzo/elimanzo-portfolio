'use client';

import React, { useState } from 'react';

import { projectsAndActivitiesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalProjects = projectsAndActivitiesData.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);

  const nextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <section ref={ref} className="mt-40 scroll-mt-28" id="projects">
      <SectionHeading>Projects And Activities</SectionHeading>
      <div>
        {projectsAndActivitiesData
          .slice(startIndex, endIndex)
          .map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-5">
          {page > 1 && (
            <button
              type="button"
              onClick={prevPage}
              className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105  cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 hover:translate-y-1 transition">
              Prev
            </button>
          )}
          {page < totalPages && (
            <button
              type="button"
              onClick={nextPage}
              className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 hover:translate-y-1">
              Next
            </button>
          )}
        </div>
      )}
    </section>
  );
}
