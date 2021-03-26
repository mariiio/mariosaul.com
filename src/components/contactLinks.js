import React from "react"
import stand from "../images/stand.png"
import castle from "../images/castle.png"
import styles from "../styles/contactLinks.module.css"

export function ContactLinks({ color, children, id, ...props }) {
  return (
    <div className={styles.container}>
      <div>
        <section className={styles.balloonContainer}>
          <div class="nes-balloon from-left">
            <h2>Connect with Mario!</h2>

            <div className={styles.contactLink}>
              <i class="nes-icon github is-large"></i>
              <a href="https://github.com/mariiio" target="_blank">
                /mariiio
              </a>
            </div>
            <div className={styles.contactLink}>
              <i class="nes-icon instagram is-large"></i>
              <a href="https://www.instagram.com/mario_saul" target="_blank">
                @mario_saul
              </a>
            </div>
            <div className={styles.contactLink}>
              <i class="nes-icon linkedin is-large"></i>
              <a href="https://www.linkedin.com/in/mario-saul/" target="_blank">
                /mario-saul
              </a>
            </div>
            <div className={styles.contactLink}>
              <i class="nes-icon medium is-large"></i>
              <a href="https://medium.com/@mariiosaul" target="_blank">
                @mariiosaul
              </a>
            </div>
            <div className={styles.contactLink}>
              <i class="nes-icon twitter is-large"></i>
              <a href="https://twitter.com/mario_saul" target="_blank">
                @mario_saul
              </a>
            </div>
          </div>
        </section>
        <img src={stand} className={styles.mario} alt="it's a me! Mario!" />
      </div>

      <div>
        <img src={castle} className={styles.castle} alt="castle" />
      </div>
    </div>
  )
}
