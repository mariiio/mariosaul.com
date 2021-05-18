import React from "react"

export function Button({
  children,
  handleClick,
  hoverSound = () => {},
  clickSound = () => {},
  forceSoundEnabled = false,
  ...props
}) {
  return (
    <button
      className={props.class}
      onKeyPress={event => {
        if (event.key !== "Enter") return
        handleClick(event)
        clickSound({ forceSoundEnabled })
      }}
      onMouseDown={event => {
        event.preventDefault()
        event.stopPropagation()
        handleClick(event)
        clickSound({ forceSoundEnabled })
      }}
      onMouseEnter={hoverSound}
      onFocus={hoverSound}
      {...props}
    >
      {children}
    </button>
  )
}
