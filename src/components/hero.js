import React, { useState, useEffect } from "react"
import cursor from "../images/cursor.png"
import styles from "../styles/hero.module.css"
import Img from "gatsby-image"
import stand from "../images/stand.png"
import jump from "../images/jump.png"
import { useSfx } from "../hooks/use-sfx.js"
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
      has 7 beautiful nephews
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

const GameBar = ({ time, coins }) => {
  return (
    <div className={styles.gameBar}>
      <div className={styles.timer}>
        TIME
        <br />
        {time}
      </div>

      <div className={styles.coins}>
        <i className={`${styles.coin} nes-icon coin`}></i>x{coins}
      </div>
    </div>
  )
}

const Tagline = ({ active, setActive, clickHandler }) => {
  const [clickedMario, setClickedMario] = useState(false)
  const { playJump } = useSfx()

  const handleClick = event => {
    event.preventDefault()

    setClickedMario(true)
    setActive(true)
    playJump()
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
            style={{ display: `${active ? "none" : "block"}` }}
            alt="it's a me! Mario!"
          />
          <img
            src={marioImages["jump"]}
            style={{ display: `${active ? "block" : "none"}` }}
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
  const [coins, setCoins] = useState(0)
  const [time, setTime] = useState(200)
  const [active, setActive] = useState(false)
  const [taglineIndex, setTaglineIndex] = useState(0)
  const tagline = taglines[taglineIndex]
  const { playCoin, playTimeWarning, playDie, playLiveUp } = useSfx()

  function changeTagline() {
    const index = taglineIndex + 1
    setTimeout(() => {
      const newCoins = coins + 1
      playCoin()
      if (newCoins % 10 === 0) playLiveUp()
      setCoins(newCoins)
      setTaglineIndex(index < taglines.length ? index : 0)
    }, 200)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time > 0 ? time - 1 : "-")
      if (time === 100) playTimeWarning()
      if (time === 0) playDie()
    }, 1000)

    return () => clearTimeout(timer)
  }, [time])

  return [
    <GameBar time={time} coins={coins} />,
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
