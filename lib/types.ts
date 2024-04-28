import { ReactElement } from 'react';

import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type EducationItem = {
  readonly title: string;
  readonly location: string;
  readonly description: string;
  readonly icon: React.ReactElement<any, any>;
  readonly date: string;
};

export type ExperienceItem = {
  readonly companyName: string;
  readonly jobTitle: string;
  readonly location: string;
  readonly description: {
    readonly list: readonly string[];
  };
  readonly tags: readonly string[];
  readonly icon: React.ReactElement<any, any>;
  readonly date: string;
};
