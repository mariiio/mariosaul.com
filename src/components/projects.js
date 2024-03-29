import React from "react"
import { useSfx } from "../hooks/use-sfx.js"
import trr from "../images/trr.png"
import emeritus from "../images/emeritus.png"
import wmg from "../images/wmg.png"
import seatmate from "../images/seatmate.png"
import okjux from "../images/okjux.png"
import illumehealth from "../images/illumehealth.png"
import retroally from "../images/retroally.png"
import rootstrap from "../images/rootstrap.png"
import wyeworks from "../images/wyeworks.png"
import styles from "../styles/projects.module.css"

export function Projects() {
  const { playClick, playPop } = useSfx()

  return (
    <div className={styles.logosContainer}>
      <h2 className={styles.mainTitle}>
        <i className="nes-logo"></i>
        Mario's History
        <i className="nes-logo"></i>
      </h2>
      <div id={styles.companiesSection} className={styles.logoSection}>
        <h3 id={styles.companiesTitle} className={styles.logoGroupTitle}>
          companies
        </h3>
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
          <a href="https://emeritus.org/" target="_blank" rel="noreferrer">
            <img
              alt="Emeritus"
              loading="lazy"
              src={emeritus}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a>
          <a href="https://imgn.media/" target="_blank" rel="noreferrer">
            <img
              alt="Warner Music Group"
              loading="lazy"
              src={wmg}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a>
        </div>
      </div>
      <div id={styles.startupsSection} className={styles.logoSection}>
        <h3 id={styles.startupsTitle} className={styles.logoGroupTitle}>
          start-ups
        </h3>
        <div className={styles.logoGroup}>
          <a href="http://seatmateapp.com/" target="_blank" rel="noreferrer">
            <img
              style={{ width: "55px" }}
              alt="SeatMate"
              loading="lazy"
              src={seatmate}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a>
          <a href="https://retroally.com/" target="_blank" rel="noreferrer">
            <img
              alt="Retroally"
              loading="lazy"
              src={retroally}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a>
          <a
            href="https://www.frankyaguilar.com/projects/okjux"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "55px" }}
              alt="okjux"
              loading="lazy"
              src={okjux}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a>
          <a
            href="https://appadvice.com/app/illume-health-sauna-tracker/1439920323"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "65px" }}
              alt="IllumeHealth"
              loading="lazy"
              src={illumehealth}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a>
        </div>
      </div>
      <div className={styles.logoSection}>
        <h3 id={styles.factoriesTitle} className={styles.logoGroupTitle}>
          software factories
        </h3>
        <div id={styles.factoriesLogos} className={styles.logoGroup}>
          <a href="https://www.wyeworks.com/" target="_blank" rel="noreferrer">
            <img
              alt="WyeWorks"
              loading="lazy"
              src={wyeworks}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a>
          <a href="https://www.rootstrap.com/" target="_blank" rel="noreferrer">
            <img
              alt="Rootstrap"
              loading="lazy"
              src={rootstrap}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a>
        </div>
      </div>
    </div>
  )
}
