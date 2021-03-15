import React, { useState } from "react"
import styles from "../styles/bio.module.css"

function DifficultyChooser({ bioDifficulty, bioDifficulties, clickHandler }) {
  const handleClick = event => {
    event.preventDefault()
    clickHandler(event.target.innerHTML.replace(/\s/, "_").toLowerCase())
  }

  return (
    <div className={styles.optionsContainer}>
      <div class="nes-container with-title is-centered">
        <p class="title">Select Bio Difficulty</p>
        <div className={styles.options}>
          {bioDifficulties.map(d => {
            return (
              <div className={styles.option}>
                <span
                  className={`${
                    bioDifficulty === d ? styles.selected : styles.notSelected
                  }
                    noselect`}
                  id={`difficulty-${d}`}
                  name="difficulty"
                >
                  &#9658;
                </span>
                <a
                  href={`#difficulty-${d}`}
                  className={styles.label}
                  onClick={handleClick}
                >
                  {d.replace(/_/, " ").toUpperCase()}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

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
    <p>
      <strong>Mario Saul</strong> is a{" "}
      <span style={{ display: getVisibility("normal") }}>passionate </span>
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
          for leading companies in different fields
        </span>
      </span>
      .
      <br />
      <span style={{ display: getVisibility("easy") }}>
        {" "}
        He currently works as a Team Leader at{" "}
        <a href="https://imgn.media/">IMGN Media</a>
        <span style={{ display: getVisibility("normal") }}>
          {" "}
          where he guides his teams through technical issues and challenges to
          build robust solutions to complex problems
        </span>
        <span style={{ display: getVisibility("hard") }}>
          , using a broad set of technologies and tools to build real time, big
          data applications in a distributed environment that reaches
          millions of people.
        </span>
        .
        <br />
      </span>
      <span style={{ display: getVisibility("very_hard") }}>
        {" "}
        The multi-faceted nature of developing software and the drive to always
        learn something new is what excites him most about the profession.
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
  ) : null
}

export function Bio() {
  const [bioDifficulty, setBioDifficulty] = useState("normal")
  const bioDifficulties = ["very_easy", "easy", "normal", "hard", "very_hard"]

  const clickHandler = difficulty => {
    if (bioDifficulties.includes(difficulty)) {
      setBioDifficulty(difficulty)
    }
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.sideContainer}`}>
        <DifficultyChooser
          bioDifficulty={bioDifficulty}
          bioDifficulties={bioDifficulties}
          clickHandler={clickHandler}
        />
      </div>
      <div className={`nes-container is-rounded is-dark ${styles.sideContainer} ${styles.bio}`}>
        <BioText bioDifficulty={bioDifficulty} />
      </div>
    </div>
  )
}