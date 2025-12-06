import React, { useState, useEffect, useRef, useCallback } from "react"
import cursor from "../images/cursor.png"
import * as styles from "../styles/hero.module.css"
import stand from "../images/mario-stand.png"
import jump from "../images/mario-jump.png"
import die from "../images/mario-die.png"
import pipe from "../images/pipe.png"
import coinImg from "../images/coin.png"
import { useSfx } from "../hooks/use-sfx.js"

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
    size: "5.5vw",
    "size-lg": "43px",
    text: `
      was born in 🇺🇾 and lives in 🇮🇱
    `,
    "margin-top": "10px",
  },
  {
    size: "7vw",
    "size-lg": "56px",
    text: `
      is addicted to 🏖🏐
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
      has 8 beautiful nephews
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
    size: "7.2vw",
    "size-lg": "56px",
    text: `
      drinks 🧉 every day
    `,
    "margin-top": "10px",
  },

]

const GameBar = ({ coins, time, setTime, onDeath, isDead }) => {
  const { playTimeWarning, playDie, stopThemeSong } = useSfx()

  // Use refs to keep callbacks stable and avoid resetting the timer
  const callbacksRef = useRef({ playTimeWarning, playDie, stopThemeSong, onDeath })
  useEffect(() => {
    callbacksRef.current = { playTimeWarning, playDie, stopThemeSong, onDeath }
  })

  useEffect(() => {
    if (isDead) return

    const timer = setTimeout(() => {
      setTime(prevTime => {
        if (prevTime === 50) callbacksRef.current.playTimeWarning()
        if (prevTime === 0) {
          callbacksRef.current.playDie()
          callbacksRef.current.stopThemeSong()
          callbacksRef.current.onDeath()
        }
        return prevTime > 0 ? prevTime - 1 : "-"
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [time, isDead, setTime])

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
  jumping,
  setJumping,
  enteringPipe,
  clickHandler,
  isDead,
  isVisible,
  onInsertCoin,
}) => {
  const { playJump, playCoin, playThemeSong } = useSfx()

  const handleClick = event => {
    event.preventDefault()
    if (enteringPipe || isDead || active) return

    if (!clickedMario) setClickedMario(true)
    setActive(true)
    setJumping(true)
    playJump()
    setTimeout(() => setJumping(false), 400)
    setTimeout(() => setActive(false), 950)

    clickHandler()
  }

  const handleInsertCoin = () => {
    playCoin()
    playThemeSong()
    onInsertCoin()
  }

  const getMarioClass = () => {
    if (isDead) return `${styles.mario} ${styles.dead} noselect`
    if (active) return `${styles.mario} ${styles.active} noselect`
    return `${styles.mario} noselect`
  }

  const getMarioImage = () => {
    if (isDead) return die
    if (jumping) return jump
    return stand
  }

  const getMarioWrapperClass = () => {
    const classes = [getMarioClass()]
    if (!isVisible) classes.push(styles.marioHidden)
    return classes.join(" ")
  }

  const getMarioContainerClass = () => {
    // Use static positioning when showing INSERT COIN (no sticky scroll behavior)
    if (isDead && !isVisible) {
      return `${styles.marioContainer} ${styles.marioContainerStatic}`
    }
    return styles.marioContainer
  }

  return (
    <div>
      <div className={getMarioContainerClass()}>
        <a
          href="#mario"
          onClick={handleClick}
          className={getMarioWrapperClass()}
        >
          <img
            src={getMarioImage()}
            alt={isDead ? "Mario died!" : active ? "Mario jumping!" : "It's a me! Mario!"}
          />
        </a>
        {!clickedMario && !enteringPipe && !isDead && isVisible && (
          <img
            className={`${styles.clickIndicator} noselect`}
            src={cursor}
            onClick={handleClick}
            alt="click indicator"
          />
        )}
        {isDead && !isVisible && !enteringPipe && (
          <div className={styles.insertCoin} onClick={handleInsertCoin}>
            INSERT COIN
          </div>
        )}
      </div>

      <div className={styles.pipe}>
        <img className="noselect" src={pipe} alt="pipe" />
      </div>
    </div>
  )
}

export function Hero() {
  const [coins, setCoins] = useState(0)
  const [clickedMario, setClickedMario] = useState(false)
  const [active, setActive] = useState(false)
  const [jumping, setJumping] = useState(false)
  const [enteringPipe, setEnteringPipe] = useState(false)
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [time, setTime] = useState(100)
  const [isDead, setIsDead] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const tagline = taglines[taglineIndex]
  const { playCoin, playLiveUp } = useSfx()
  const stickySentinelRef = useRef()

  const handleDeath = useCallback(() => {
    setIsDead(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 1500)
  }, [])

  const restartGame = () => {
    setTime(100)
    setIsDead(false)
    setIsVisible(true)
  }

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
    <GameBar
      key="gamebar"
      coins={coins}
      time={time}
      setTime={setTime}
      onDeath={handleDeath}
      isDead={isDead}
    />,
    <h1 key="hero" className={styles.hero}>
      <span className={styles.box}>Mario Saul</span>
      <span ref={stickySentinelRef}></span>
      <span
        className={`${styles.tagline} ${active ? styles.active : ""}`}
        style={{
          "--margin-top": tagline["margin-top"] || "6px",
          "--size": tagline.size || "11vw",
          "--size-lg": tagline["size-lg"] || "45px",
        }}
      >
        {tagline.text.trim()}
      </span>
      {active && (
        <img
          className={styles.coinPop}
          src={coinImg}
          alt="coin"
        />
      )}
    </h1>,
    <Tagline
      key="tagline"
      setClickedMario={setClickedMario}
      clickedMario={clickedMario}
      active={active}
      setActive={setActive}
      jumping={jumping}
      setJumping={setJumping}
      enteringPipe={enteringPipe}
      clickHandler={changeTagline}
      isDead={isDead}
      isVisible={isVisible}
      onInsertCoin={restartGame}
    />,
  ]
}
