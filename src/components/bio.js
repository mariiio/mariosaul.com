import React, { useState } from "react"
import { OptionsPicker } from "../components/optionsPicker"
import { useSfx } from "../hooks/use-sfx.js"
import * as styles from "../styles/bio.module.css"

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
        <strong>Mario Saul</strong> is a Software Engineer
        <span style={{ display: getVisibility("easy") }}>
          {" "}
          with {yearsWorking}+ years of experience
          <span style={{ display: getVisibility("hard") }}>
            {" "}
            in building
            <span style={{ display: getVisibility("very_hard") }}>
              {" "}
              and leading
            </span>{" "}
            user-centric, high-impact solutions
          </span>
          <span style={{ display: getVisibility("very_hard") }}>
            {" "}
            for top-tier companies across a range of industries
          </span>
        </span>
        .
        <br />
      </p>

      <p>
        <span style={{ display: getVisibility("easy") }}>
          {" "}
          Currently, he works as a Team Leader at{" "}
          <a href="https://www.konnecto.com/">Konnecto</a>
          <span style={{ display: getVisibility("normal") }}>
            {" "}
            where he leads his team through technical challenges to develop
            robust solutions for complex problems
          </span>
          <span style={{ display: getVisibility("hard") }}>
            , leveraging a diverse set of technologies and tools to build big
            data applications in a distributed environment that help drive the
            company's growth
          </span>
          .
          <br />
        </span>
      </p>

      <p>
        <span style={{ display: getVisibility("normal") }}>
          {" "}
          Beyond his work, Mario is also an entrepreneur
          <span style={{ display: getVisibility("hard") }}>
            . He co-founded and built{" "}
            <a
              href="https://www.dbarato.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              dbarato
            </a>
          </span>
          <span style={{ display: getVisibility("very_hard") }}>
            , an e-commerce platform focused on providing great deals and a
            seamless shopping experience
          </span>
          .
        </span>
      </p>

      <p>
        <span style={{ display: getVisibility("normal") }}>
          {" "}
          He also enjoys solving his own problems by doing what he knows best:
          writing code!
        </span>
        <span style={{ display: getVisibility("hard") }}>
          {" "}
          Check out some of his projects like{" "}
          <a
            href="https://super-box-app.vercel.app/about.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            SuperBox
          </a>
          <span style={{ display: getVisibility("very_hard") }}>
            {" "}
            and{" "}
            <a
              href="https://github.com/mariiio/linkedin_connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Connect
            </a>
          </span>
          .
        </span>
      </p>

      <p>
        He was born in Uruguay
        <span style={{ display: getVisibility("easy") }}>
          {" "}
          and moved to Israel (Tel Aviv)
        </span>
        <span style={{ display: getVisibility("hard") }}>
          {" "}
          {yearsSinceAlyah} years ago
        </span>
        .
      </p>
    </div>
  ) : null
}

export function Bio() {
  const [bioDifficulty, setBioDifficulty] = useState("normal")
  const bioDifficulties = ["very_easy", "easy", "normal", "hard", "very_hard"]
  const { playClick, playPop } = useSfx()

  const clickHandler = difficulty => {
    setBioDifficulty(difficulty)
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainTitleContainer}>
        <i className={`${styles.titleIcon} nes-icon is-medium star`}></i>
        <h2 className={styles.mainTitle}>Mario's Bio</h2>
        <i className={`${styles.titleIcon} nes-icon is-medium star`}></i>
      </div>

      <div className={styles.sideContainer}>
        <OptionsPicker
          title="Select Difficulty"
          selectedOption={bioDifficulty}
          options={bioDifficulties}
          hoverSound={playPop}
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
