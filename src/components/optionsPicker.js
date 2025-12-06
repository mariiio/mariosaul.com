import React from "react"
import * as styles from "../styles/optionsPicker.module.css"

export function OptionsPicker({
  title,
  selectedOption,
  options,
  hoverSound = () => {},
  clickSound = () => {},
  clickHandler,
}) {
  return (
    <div className={styles.optionsContainer}>
      <div className="nes-container with-title is-centered">
        <p className={`title ${styles.title}`}>{title}</p>
        <div className={styles.options}>
          {options.map(option => {
            return (
              <div key={option} className={styles.option}>
                <label>
                  <input
                    type="radio"
                    className="nes-radio"
                    name="difficulty"
                    checked={selectedOption === option}
                    onChange={() => {
                      clickSound()
                      clickHandler(option)
                    }}
                  />
                  <span onMouseEnter={hoverSound}>
                    {option.replace(/_/, " ").toUpperCase()}
                  </span>
                </label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
