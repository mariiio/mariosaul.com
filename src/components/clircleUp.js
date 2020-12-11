import React from "react"
import { Block } from "./block.js"
import styles from "../styles/circleUp.module.css"

export function CircleUp({ color, children, id, ...props }) {
  return (
    <div>
      <svg
        className={`${styles.circleUp} ${styles[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C40 0 60 0 100 100 Z" />
      </svg>
      <Block id={id} children={children} color={color} {...props} />
    </div>
  )
}
