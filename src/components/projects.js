import React, { useMemo, useState, useCallback } from "react"
import { useSfx } from "../hooks/use-sfx.js"
import linguana from "../images/linguana.png"
import konnecto from "../images/konnecto.png"
import trr from "../images/trr.png"
import emeritus from "../images/emeritus.png"
import wmg from "../images/wmg.png"
import rootstrap from "../images/rootstrap.png"
import wyeworks from "../images/wyeworks.png"
import koopaWalk from "../images/koopa-troopa-walk.gif"
import * as styles from "../styles/projects.module.css"

const generateEnemies = () => {
  const count = Math.random() < 0.8 ? 1 : 2
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: count === 1 ? Math.random() * 8 : i * 6 + Math.random() * 2,
  }))
}

function Enemy({ initialDelay }) {
  const [visible, setVisible] = useState(true)
  const [delay, setDelay] = useState(initialDelay)

  const handleAnimationIteration = useCallback(() => {
    setVisible(false)
    const randomDelay = 1 + Math.random() * 4
    setTimeout(() => {
      setDelay(0)
      setVisible(true)
    }, randomDelay * 1000)
  }, [])

  if (!visible) return null

  return (
    <img
      src={koopaWalk}
      alt="koopa"
      className={styles.enemy}
      style={{ animationDelay: `${delay}s` }}
      onAnimationIteration={handleAnimationIteration}
    />
  )
}

function EnemyContainer() {
  const enemies = useMemo(() => generateEnemies(), [])

  return (
    <div className={styles.enemyContainer}>
      {enemies.map(enemy => (
        <Enemy key={enemy.id} initialDelay={enemy.delay} />
      ))}
    </div>
  )
}

export function Projects() {
  const { playClick, playPop } = useSfx()

  return (
    <div className={styles.logosContainer}>
      <h2 className={styles.mainTitle}>
        <i className="nes-logo"></i>
        Mario's History
        <i className="nes-logo"></i>
      </h2>
      <div className={styles.logoSection}>
        <span className={styles.logoGroupTitle}>2025 - now</span>
        <div className={styles.historySection}>
          <EnemyContainer />
          <div className={styles.logoGroup}>
            <a
              href="https://www.linguana.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Linguana"
                loading="lazy"
                src={linguana}
                className={styles.linguanaLogo}
                onMouseOver={playPop}
                onClick={playClick}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.logoSection}>
        <span className={styles.logoGroupTitle}>2023 - 2025</span>
        <div className={styles.historySection}>
          <EnemyContainer />
          <div className={styles.logoGroup}>
            <a
              href="https://www.konnecto.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Konnecto"
                loading="lazy"
                src={konnecto}
                className={styles.konnectoLogo}
                onMouseOver={playPop}
                onClick={playClick}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.logoSection}>
        <span className={styles.logoGroupTitle}>2020 - 2023</span>
        <div className={styles.historySection}>
          <EnemyContainer />
          <div className={styles.logoGroup}>
            <a
              href="https://www.wmg.com/news/imgn-media-acquired-warner-music-group-34971"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Warner Music Group"
                loading="lazy"
                src={wmg}
                className={styles.wmgLogo}
                onMouseOver={playPop}
                onClick={playClick}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.logoSection}>
        <span className={styles.logoGroupTitle}>2017 - 2019</span>
        <div className={styles.historySection}>
          <EnemyContainer />
          <div className={styles.logoGroup}>
            <a
              href="https://www.therealreal.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="The realreal"
                loading="lazy"
                src={trr}
                onMouseOver={playPop}
                onClick={playClick}
              ></img>
            </a>
            <a
              href="https://www.wyeworks.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="WyeWorks"
                loading="lazy"
                src={wyeworks}
                className={styles.wyeworksLogo}
                onMouseOver={playPop}
                onClick={playClick}
              ></img>
            </a>
            <a href="https://emeritus.org/" target="_blank" rel="noreferrer">
              <img
                alt="Emeritus"
                loading="lazy"
                src={emeritus}
                onMouseOver={playPop}
                onClick={playClick}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.logoSection}>
        <span className={styles.logoGroupTitle}>2016 - 2017</span>
        <div className={styles.historySection}>
          <EnemyContainer />
          <div className={styles.logoGroup}>
            <a
              href="https://www.rootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Rootstrap"
                loading="lazy"
                src={rootstrap}
                className={styles.rootstrapLogo}
                onMouseOver={playPop}
                onClick={playClick}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
