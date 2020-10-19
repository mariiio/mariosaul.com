import React from 'react';
import styles from '../styles/header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/" rel="home" className={styles.home}>
        Mario Saul
      </a>
    </header>
  );
}
