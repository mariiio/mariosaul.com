import React from 'react';
import styles from '../styles/block.module.css';

export function Block({ background, color, children, id, ...props }) {
  return (
    <div id={id} className={`${styles.block} ${styles[background]}  ${styles[color]}`} {...props}>
      {children}
    </div>
  );
}
