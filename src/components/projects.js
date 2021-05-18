import React from "react"
import trr from "../images/trr.png"
import emeritus from "../images/emeritus.png"
import wmg from "../images/wmg.png"
import seatmate from "../images/seatmate.png"
import illumehealth from "../images/illumehealth.png"
import retroally from "../images/retroally.png"
import rootstrap from "../images/rootstrap.png"
import wyeworks from "../images/wyeworks.png"
import styles from "../styles/projects.module.css"

export function Projects() {
  return (
    <div className={styles.logosContainer}>
      <h2 className={styles.mainTitle}>Mario helped build</h2>

      <div id={styles.companiesSection} className={styles.logoSection}>
        <h3 id={styles.companiesTitle} className={styles.logoGroupTitle}>
          companies
        </h3>
        <div className={styles.logoGroup}>
          <a href="https://www.therealreal.com/" target="_blank">
            <img alt="The realreal" loading="lazy" src={trr}></img>
          </a>
          <a href="https://emeritus.org/" target="_blank">
            <img alt="Emeritus" loading="lazy" src={emeritus}></img>
          </a>
          <a href="https://imgn.media/" target="_blank">
            <img alt="Warner Music Group" loading="lazy" src={wmg}></img>
          </a>
        </div>
      </div>
      <div id={styles.startupsSection} className={styles.logoSection}>
        <h3 id={styles.startupsTitle} className={styles.logoGroupTitle}>
          start-ups
        </h3>
        <div className={styles.logoGroup}>
          <a href="http://seatmateapp.com/" target="_blank">
            <img
              style={{ width: "70px" }}
              alt="SeatMate"
              loading="lazy"
              src={seatmate}
            ></img>
          </a>
          <a href="https://retroally.com/" target="_blank">
            <img alt="Retroally" loading="lazy" src={retroally}></img>
          </a>
          <a
            href="https://appadvice.com/app/illume-health-sauna-tracker/1439920323"
            target="_blank"
          >
            <img alt="IllumeHealth" loading="lazy" src={illumehealth}></img>
          </a>
        </div>
      </div>
      <div className={styles.logoSection}>
        <h3 id={styles.factoriesTitle} className={styles.logoGroupTitle}>
          software factories
        </h3>
        <div
          id={styles.factoriesLogos}
          className={styles.logoGroup}
          id={styles.factoriesLogos}
        >
          <a href="https://www.wyeworks.com/" target="_blank">
            <img alt="WyeWorks" loading="lazy" src={wyeworks}></img>
          </a>
          <a href="https://www.rootstrap.com/" target="_blank">
            <img alt="Rootstrap" loading="lazy" src={rootstrap}></img>
          </a>
        </div>
      </div>
    </div>
  )
}