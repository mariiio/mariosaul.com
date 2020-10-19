import React, { useState } from 'react';
import stand from '../images/stand.png'
import jump from '../images/jump.png'
import pipe from '../images/pipe.png'
import styles from '../styles/hero.module.css';

const taglines = [
  {
    size: '5.1vw',
    'size-lg': '43px',
    text: `
      was born in 🇺🇾 and lives in 🇮🇱
    `,
    'margin-top': '9px',
  },
  {
    'size-lg': '68px',
    text: `
      ❤️ to code
    `,
    'margin-top': '8px',
  },
  {
    size: '6.3vw',
    'size-lg': '48px',
    text: `
      is a software engineer
    `,
  },
  {
    size: '5.8vw',
    'size-lg': '46px',
    text: `
      has 6 beautiful nephews
    `,
  },
  {
    size: '8vw',
    'size-lg': '62px',
    text: `
      plays soccer okay
    `,
  },
  {
    'size-lg': '70.5px',
    text: `
      ❤️ the beatles
    `,
  },
];

const Tagline = ({ active, setActive, clickHandler }) => {
  const images = { stand, jump };

  const handleClick = event => {
    event.preventDefault();

    setActive(true);
    setTimeout(() => setActive(false), 450);

    clickHandler();
  };

  return (
    <div>
      <a
        href="#mario"
        onClick={handleClick}
        className={`${styles.mario} ${active ? styles.active : ''}`}
      >
        <img
          src={images[active ? 'jump' : 'stand']}
          alt="it's a me! Mario!"
        />
      </a>
      
      <div className={styles.pipe}>
        <img
          src={pipe}
          alt="pipe"
        />
      </div>
    </div>
  );
};

export function Hero() {
  const [active, setActive] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const tagline = taglines[taglineIndex];

  function changeTagline() {
    const index = taglineIndex + 1;
    setTimeout(() => setTaglineIndex(index < taglines.length ? index : 0), 200);
  }

  return [
    <h1 className={styles.hero}>
      <span className={styles.box}>Mario Saul</span>
      <span
        className={`${styles.tagline} ${active ? styles.active : ''}`}
        style={{
          '--margin-top': tagline['margin-top'] || '6px',
          '--size': tagline.size || '11vw',
          '--size-lg': tagline['size-lg'] || '45px'
        }}
        dangerouslySetInnerHTML={{ __html: tagline.text }}
      />
    </h1>,
    <Tagline active={active} setActive={setActive} clickHandler={changeTagline} />,
  ];
}