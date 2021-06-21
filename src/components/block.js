import React from "react"
import styles from "../styles/block.module.css"

export function Block({
  background,
  color,
  customStyle,
  children,
  id,
  ...props
}) {
  return (
    <div
      id={id}
      className={`${styles.block} ${styles[background]} ${styles[color]} ${styles[customStyle]}`}
      {...props}
    >
      {children}
    </div>
  )
}
