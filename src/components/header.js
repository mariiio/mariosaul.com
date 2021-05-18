import React from "react"
import { useSettings } from "../context/settings.js"
import { useSfx } from "../hooks/use-sfx.js"
import { Button } from "./button.js"
import sound from "../images/sound.png"
import mute from "../images/mute.png"
import styles from "../styles/header.module.css"

export function Header() {
  const { soundEnabled, toggleSound } = useSettings()
  const { playBump, playClick } = useSfx()

  return (
    <header className={styles.header}>
      <span className={styles.home}>Mario Saul</span>

      <Button
        className={styles.settingsSoundButton}
        hoverSound={playClick}
        clickSound={playBump}
        handleClick={toggleSound}
        forceSoundEnabled={true}
      >
        <img
          className={styles.settingsSound}
          src={soundEnabled ? sound : mute }
          alt=""
        />
        <span className="visually-hidden">Turn Sound Off</span>
      </Button>
    </header>
  )
}
