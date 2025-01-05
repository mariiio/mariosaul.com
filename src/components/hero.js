import React, { useState, useEffect } from "react"
import cursor from "../images/cursor.png"
import styles from "../styles/hero.module.css"
import Img from "gatsby-image"
import stand from "../images/mario-stand.png"
import jump from "../images/mario-jump.png"
import { useSfx } from "../hooks/use-sfx.js"
import { useStaticQuery, graphql } from "gatsby"
import { useRef } from "react"

const taglines = [
  {
    size: "6.6vw",
    "size-lg": "51px",
    text: `
      is a software engineer
    `,
    "margin-top": "10px",
  },
  {
    size: "7.2vw",
    "size-lg": "56px",
    text: `
      can't live without ☕️
    `,
    "margin-top": "10px",
  },
  {
    size: "6.2vw",
    "size-lg": "49px",
    text: `
      has 7 beautiful nephews
    `,
    "margin-top": "10px",
  },
  {
    size: "5.5vw",
    "size-lg": "43px",
    text: `
      was born in 🇺🇾 and lives in 🇮🇱
    `,
    "margin-top": "10px",
  },
  {
    size: "8.6vw",
    "size-lg": "67px",
    text: `
      is a gym rat 🏋🏽
    `,
    "margin-top": "7px",
  },
  {
    size: "6.5vw",
    "size-lg": "52px",
    text: `
      doesn't like spicy food
    `,
    "margin-top": "10px",
  },
  {
    size: "8.6vw",
    "size-lg": "67px",
    text: `
      is a Beatlemaniac
    `,
    "margin-top": "7px",
  },
  {
    size: "7.0vw",
    "size-lg": "55px",
    text: `
      ❤️s playing 🏐 at the 🏖
    `,
    "margin-top": "10px",
  },
]

const GameBar = ({ coins }) => {
  const [time, setTime] = useState(150)
  const { playTimeWarning, playDie, stopThemeSong } = useSfx()

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time > 0 ? time - 1 : "-")
      if (time === 50) playTimeWarning()
      if (time === 0) playDie() && stopThemeSong()
    }, 1000)

    return () => clearTimeout(timer)
  }, [time])

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

const Tagline = ({
  clickedMario,
  setClickedMario,
  active,
  setActive,
  enteringPipe,
  clickHandler,
}) => {
  const { playJump } = useSfx()

  const handleClick = event => {
    event.preventDefault()
    if (enteringPipe) return

    if (!clickedMario) setClickedMario(true)
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
      <div className={styles.marioContainer}>
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
        {!clickedMario && !enteringPipe && (
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
  const [clickedMario, setClickedMario] = useState(false)
  const [active, setActive] = useState(false)
  const [enteringPipe, setEnteringPipe] = useState(false)
  const [taglineIndex, setTaglineIndex] = useState(0)
  const tagline = taglines[taglineIndex]
  const { playCoin, playLiveUp } = useSfx()
  const stickySentinelRef = useRef()

  const changeTagline = () => {
    const index = taglineIndex + 1
    setTimeout(() => {
      const newCoins = coins + 1
      playCoin()
      if (newCoins % taglines.length === 0) playLiveUp()
      setCoins(newCoins)
      setTaglineIndex(index < taglines.length ? index : 0)
    }, 200)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        setEnteringPipe(e.intersectionRatio < 1)
      },
      {
        threshold: [1],
      }
    )
    observer.observe(stickySentinelRef.current)
  }, [])

  return [
    <GameBar coins={coins} />,
    <h1 className={styles.hero}>
      <span className={styles.box}>Mario Saul</span>
      <span ref={stickySentinelRef}></span>
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
      setClickedMario={setClickedMario}
      clickedMario={clickedMario}
      active={active}
      setActive={setActive}
      enteringPipe={enteringPipe}
      clickHandler={changeTagline}
    />,
  ]
}
