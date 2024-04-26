import React from 'react';

import styles from './Social.module.scss';
import { IconsEnum, SvgIcon } from '../SvgIcon';
import Link from 'next/link';
import { SwitchThemeButton } from '../Button';

export const SocialComponent = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <SwitchThemeButton />
      </div>
    </header>
  );
};
