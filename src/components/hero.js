import React, { useState } from "react"
import cursor from "../images/cursor.png"
import styles from "../styles/hero.module.css"
import Img from "gatsby-image"
import stand from "../images/stand.png"
import jump from "../images/jump.png"
import { useStaticQuery, graphql } from "gatsby"

const taglines = [
  {
    size: "5.1vw",
    "size-lg": "43px",
    text: `
      was born in 🇺🇾 and lives in 🇮🇱
    `,
    "margin-top": "13px",
  },
  {
    size: "7vw",
    "size-lg": "55px",
    text: `
      can't live without ☕️
    `,
    "margin-top": "8px",
  },
  {
    size: "6.3vw",
    "size-lg": "48px",
    text: `
      is a software engineer
    `,
    "margin-top": "12px",
  },
  {
    size: "5.8vw",
    "size-lg": "46px",
    text: `
      has 6 beautiful nephews
    `,
    "margin-top": "12px",
  },
  {
    size: "8vw",
    "size-lg": "62px",
    text: `
      plays soccer okay
    `,
  },
  {
    size: "8vw",
    "size-lg": "65px",
    text: `
      is a Beatlemaniac
    `,
  },
]

const Tagline = ({ active, setActive, clickHandler }) => {
  const [clickedMario, setClickedMario] = useState(false)

  const handleClick = event => {
    event.preventDefault()

    setClickedMario(true)
    setActive(true)
    setTimeout(() => setActive(false), 450)

    clickHandler()
  }

  const marioImages = { stand, jump }
  const images = useStaticQuery(graphql`
    query {
      pipe: file(relativePath: { eq: "pipe.png" }) {
        childImageSharp {
          fixed(width: 150, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <div>
        <a
          href="#mario"
          onClick={handleClick}
          className={`${styles.mario} ${active ? styles.active : ""} noselect`}
        >
          <img
            src={marioImages["stand"]}
            style={{display: `${active ? "none" : "block"}`}}
            alt="it's a me! Mario!"
          />
          <img
            src={marioImages["jump"]}
            style={{display: `${active ? "block" : "none"}`}}
            alt="it's a me! Mario jumping!"
          />
        </a>
        {!clickedMario && (
          <img
            className={`${styles.clickIndicator} noselect`}
            src={cursor}
            onClick={handleClick}
            alt="click indicator"
          />
        )}
      </div>

      <div className={styles.pipe}>
        <Img
          className="noselect"
          fixed={images.pipe.childImageSharp.fixed}
          alt="pipe"
        />
      </div>
    </div>
  )
}

export function Hero() {
  const [active, setActive] = useState(false)
  const [taglineIndex, setTaglineIndex] = useState(0)
  const tagline = taglines[taglineIndex]

  function changeTagline() {
    const index = taglineIndex + 1
    setTimeout(() => setTaglineIndex(index < taglines.length ? index : 0), 200)
  }

  return [
    <h1 className={styles.hero}>
      <span className={styles.box}>Mario Saul</span>
      <span
        className={`${styles.tagline} ${active ? styles.active : ""}`}
        style={{
          "--margin-top": tagline["margin-top"] || "6px",
          "--size": tagline.size || "11vw",
          "--size-lg": tagline["size-lg"] || "45px",
        }}
        dangerouslySetInnerHTML={{ __html: tagline.text }}
      />
    </h1>,
    <Tagline
      active={active}
      setActive={setActive}
      clickHandler={changeTagline}
    />,
  ]
}
