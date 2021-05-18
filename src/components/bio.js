import React, { useState } from "react"
import { OptionsPicker } from "../components/optionsPicker"
import { useSfx } from "../hooks/use-sfx.js"
import styles from "../styles/bio.module.css"

function BioText({ bioDifficulty }) {
  const getVisibility = group => {
    const mappings = {
      very_easy: [],
      easy: ["easy"],
      normal: ["easy", "normal"],
      hard: ["easy", "normal", "hard"],
      very_hard: ["easy", "normal", "hard", "very_hard"],
    }

    const visibility = mappings[bioDifficulty]

    return visibility.includes(group) ? "inline" : "none"
  }
  const yearsSinceAlyah = new Date().getFullYear() - 2019
  const yearsWorking = new Date().getFullYear() - 2016

  return bioDifficulty ? (
    <div>
      <p>
        <strong>Mario Saul</strong> is a{" "}
        <span style={{ display: getVisibility("very_hard") }}>passionate </span>
        Software Engineer
        <span style={{ display: getVisibility("easy") }}>
          {" "}
          with {yearsWorking}+ years of experience
          <span style={{ display: getVisibility("hard") }}>
            {" "}
            in building user-centric, high-impact solutions
          </span>
          <span style={{ display: getVisibility("very_hard") }}>
            {" "}
            for leading companies from San Francisco in different fields
          </span>
        </span>
        .
        <br />
      </p>

      <p>
        <span style={{ display: getVisibility("easy") }}>
          {" "}
          He currently works as a Team Leader at{" "}
          <a href="https://imgn.media/">IMGN Media (Warner Music Group)</a>
          <span style={{ display: getVisibility("normal") }}>
            {" "}
            where he guides his teams through technical challenges to build
            robust solutions to complex problems
          </span>
          <span style={{ display: getVisibility("hard") }}>
            , using a broad set of technologies and tools to build real time,
            big data applications in a distributed environment that reaches
            millions of people
          </span>
          .
          <br />
        </span>
      </p>

      <p>
        <span style={{ display: getVisibility("very_hard") }}>
          {" "}
          The multi-faceted nature of developing software and the drive to
          always learn something new is what excites him most about the
          profession.
          <br />
        </span>{" "}
        He was born in Uruguay
        <span style={{ display: getVisibility("easy") }}>
          {" "}
          and moved to Israel
        </span>
        <span style={{ display: getVisibility("hard") }}>
          {" "}
          {yearsSinceAlyah} year{yearsSinceAlyah > 1 ? "s" : ""} ago
        </span>
        .
      </p>
    </div>
  ) : null
}

export function Bio() {
  const [bioDifficulty, setBioDifficulty] = useState("normal")
  const bioDifficulties = ["very_easy", "easy", "normal", "hard", "very_hard"]
  const { playClick } = useSfx()

  const clickHandler = difficulty => {
    setBioDifficulty(difficulty)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideContainer}>
        <OptionsPicker
          title="Select Bio Difficulty"
          selectedOption={bioDifficulty}
          options={bioDifficulties}
          clickSound={playClick}
          clickHandler={clickHandler}
        />
      </div>
      <div
        className={`nes-container is-rounded is-dark ${styles.sideContainer} ${styles.bio}`}
      >
        <BioText bioDifficulty={bioDifficulty} />
      </div>
    </div>
  )
}
