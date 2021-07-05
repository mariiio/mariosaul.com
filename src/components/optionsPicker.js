import React from "react"
import styles from "../styles/optionsPicker.module.css"

export function OptionsPicker({
  title,
  selectedOption,
  options,
  hoverSound = () => {},
  clickSound = () => {},
  clickHandler,
}) {
  const handleClick = event => {
    event.preventDefault()
    clickSound()
    clickHandler(event.target.innerHTML.replace(/\s/, "_").toLowerCase())
  }

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
                  />
                  <span onMouseOver={hoverSound} onClick={handleClick}>
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
