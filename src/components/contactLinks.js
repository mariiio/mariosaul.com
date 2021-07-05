import React, { useState, useEffect } from "react"
import { useSfx } from "../hooks/use-sfx.js"
import luigi from "../images/luigi.png"
import mountain from "../images/mountain.png"
import flag from "../images/flag.png"
import bowser from "../images/bowser.png"
import floppy from "../images/floppy.png"
import castle from "../images/castle.png"
import cv from "../../static/cv.pdf"
import styles from "../styles/contactLinks.module.css"

export function ContactLinks({ color, children, id, ...props }) {
  const [CVEnabled, setCVEnabled] = useState(false)
  const { playClick, playPop } = useSfx()

  useEffect(() => {
    setCVEnabled(new URLSearchParams(window.location.search).get("cv") === "1")
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <section className={styles.balloonContainer}>
          <div className="nes-balloon from-left">
            <h2>Connect with Mario</h2>

            <div className={styles.balloons}>
              <a
                href="https://github.com/mariiio"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                onMouseOver={playPop}
                onClick={playClick}
              >
                <i className="nes-icon github is-large"></i>
                <span className={styles.accountName}>/mariiio</span>
              </a>
              <a
                href="https://www.instagram.com/mario_saul"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                onMouseOver={playPop}
                onClick={playClick}
              >
                <i className="nes-icon instagram is-large"></i>
                <span
                  className={styles.accountName}
                  href="https://www.instagram.com/mario_saul"
                  target="_blank"
                >
                  @mario_saul
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/mario-saul/"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                onMouseOver={playPop}
                onClick={playClick}
              >
                <i className="nes-icon linkedin is-large"></i>
                <span className={styles.accountName}>/mario-saul</span>
              </a>
              <a
                href="https://medium.com/@mariiosaul"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                onMouseOver={playPop}
                onClick={playClick}
              >
                <i className="nes-icon medium is-large"></i>
                <span className={styles.accountName}>@mariiosaul</span>
              </a>
              <a
                href="https://twitter.com/mario_saul"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                onMouseOver={playPop}
                onClick={playClick}
              >
                <i className="nes-icon twitter is-large"></i>
                <span className={styles.accountName}>@mario_saul</span>
              </a>
            </div>
            {CVEnabled && (
              <div className={styles.cvSameBalloon}>
                <h2>Download CV</h2>
                <div>
                  <a href={cv} target="_blank" rel="noreferrer">
                    <img
                      loading="lazy"
                      src={floppy}
                      className={styles.cvIcon}
                      alt="cv"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
        <img loading="lazy" src={luigi} className={styles.luigi} alt="Luigi" />
      </div>

      <div className={styles.mountain}>
        <img loading="lazy" src={mountain} alt="Mountain" />
      </div>

      <img loading="lazy" src={flag} className={styles.flag} alt="Flag" />

      <div className={styles.cvContainer}>
        {CVEnabled && (
          <section className={styles.balloonContainer}>
            <div className={"nes-balloon from-right"}>
              <h2>Download CV</h2>
              <div>
                <a
                  href={cv}
                  target="_blank"
                  rel="noreferrer"
                  onMouseOver={playPop}
                  onClick={playClick}
                >
                  <img
                    loading="lazy"
                    src={floppy}
                    className={styles.cvIcon}
                    alt="cv"
                  />
                </a>
              </div>
            </div>
          </section>
        )}

        <img
          loading="lazy"
          src={bowser}
          className={styles.bowser}
          alt="Bowser"
        />
      </div>

      <div>
        <img
          loading="lazy"
          src={castle}
          className={styles.castle}
          alt="castle"
        />
      </div>
    </div>
  )
}
