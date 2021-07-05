import React from "react"
import { useSettings } from "../context/settings.js"
import { useSfx } from "../hooks/use-sfx.js"
import { Button } from "./button.js"
import sound from "../images/sound.png"
import muteSound from "../images/mute-sound.png"
import music from "../images/music.png"
import muteMusic from "../images/mute-music.png"
import styles from "../styles/navbar.module.css"

export function NavBar() {
  const { soundEnabled, toggleSound, musicEnabled, toggleMusic } = useSettings()
  const { playClick, playPop } = useSfx()

  return (
    <header className={styles.navbar}>
      <span className={styles.home}>Mario Saul</span>

      <div className={styles.settings}>
        <Button
          className={styles.settingsButton}
          hoverSound={playPop}
          clickSound={playClick}
          handleClick={toggleMusic}
          forceSoundEnabled={true}
        >
          <img
            className={styles.settingsSound}
            src={musicEnabled ? music : muteMusic}
            alt=""
          />
          <span className="visually-hidden">Turn Music On/Off</span>
        </Button>

        <Button
          className={styles.settingsButton}
          hoverSound={playPop}
          clickSound={playClick}
          handleClick={toggleSound}
          forceSoundEnabled={true}
        >
          <img
            className={styles.settingsSound}
            src={soundEnabled ? sound : muteSound}
            alt=""
          />
          <span className="visually-hidden">Turn Sound On/Off</span>
        </Button>
      </div>
    </header>
  )
}
