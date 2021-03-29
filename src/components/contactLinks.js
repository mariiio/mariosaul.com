import React from "react"
import luigi from "../images/luigi.png"
import castle from "../images/castle.png"
import styles from "../styles/contactLinks.module.css"

export function ContactLinks({ color, children, id, ...props }) {
  return (
    <div className={styles.container}>
      <div>
        <section className={styles.balloonContainer}>
          <div class="nes-balloon from-left">
            <h2>Connect with Mario!</h2>

            <a
              href="https://github.com/mariiio"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              <i class="nes-icon github is-large"></i>
              <span>/mariiio</span>
            </a>
            <a
              href="https://www.instagram.com/mario_saul"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              <i class="nes-icon instagram is-large"></i>
              <span href="https://www.instagram.com/mario_saul" target="_blank">
                @mario_saul
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mario-saul/"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              <i class="nes-icon linkedin is-large"></i>
              <span>/mario-saul</span>
            </a>
            <a
              href="https://medium.com/@mariiosaul"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              <i class="nes-icon medium is-large"></i>
              <span>@mariiosaul</span>
            </a>
            <a
              href="https://twitter.com/mario_saul"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              <i class="nes-icon twitter is-large"></i>
              <span>@mario_saul</span>
            </a>
          </div>
        </section>
        <img
          loading="lazy"
          src={luigi}
          className={styles.luigi}
          alt="it's a me! Mario!"
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
