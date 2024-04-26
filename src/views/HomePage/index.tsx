/** @format */

import React from 'react';

import styles from './HomePage.module.scss';
import {
  AboutMe,
  CompletedProjects,
  CompletedProjectsJS,
  CurrentProjects,
  Experience,
  Feedback,
  RecentlyCompletedProjects,
  Skills,
} from '@components/HomePage';
import { Social } from '@components/UI/Social';
import { Education } from '@components/HomePage/Education';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Feedback />
      <RecentlyCompletedProjects />
      <CompletedProjects />
      <CompletedProjectsJS />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};
