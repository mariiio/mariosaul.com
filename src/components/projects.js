import React from "react"
import { useSfx } from "../hooks/use-sfx.js"
import konnecto from "../images/konnecto.png"
import trr from "../images/trr.png"
import emeritus from "../images/emeritus.png"
import wmg from "../images/wmg.png"
import seatmate from "../images/seatmate.png"
import okjux from "../images/okjux.png"
import illumehealth from "../images/illumehealth.png"
import retroally from "../images/retroally.png"
import rootstrap from "../images/rootstrap.png"
import wyeworks from "../images/wyeworks.png"
import * as styles from "../styles/projects.module.css"

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
        <span className={styles.logoGroupTitle}>2023 - now</span>
        <div className={styles.historySection}>
          {/* <div className={styles.verticalHistoryLine}></div> */}
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
          {/* <div className={styles.verticalHistoryLine}></div> */}
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
          {/* <div className={styles.verticalHistoryLine}></div> */}
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
            {/* <a href="https://retroally.com/" target="_blank" rel="noreferrer">
            <img
              alt="Retroally"
              loading="lazy"
              src={retroally}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a> */}
            <a
              href="https://www.wyeworks.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="WyeWorks"
                loading="lazy"
                src={wyeworks}
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
            {/* <a
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
          </a> */}
          </div>
        </div>
      </div>
      <div className={styles.logoSection}>
        <span className={styles.logoGroupTitle}>2016 - 2017</span>
        <div className={styles.historySection}>
          {/* <div className={styles.verticalHistoryLine}></div> */}
          <div className={styles.logoGroup}>
            {/* <a
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
          </a> */}
            <a
              href="https://www.rootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Rootstrap"
                loading="lazy"
                src={rootstrap}
                onMouseOver={playPop}
                onClick={playClick}
              ></img>
            </a>
            {/* <a href="http://seatmateapp.com/" target="_blank" rel="noreferrer">
            <img
              style={{ width: "55px" }}
              alt="SeatMate"
              loading="lazy"
              src={seatmate}
              onMouseOver={playPop}
              onClick={playClick}
            ></img>
          </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}
