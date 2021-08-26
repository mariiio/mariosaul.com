import React, { useState, useEffect } from "react"
import { useSfx } from "../hooks/use-sfx.js"
import { NavBar } from "./navbar.js"
import { Main } from "./main.js"
import { Footer } from "./footer.js"
import { Button } from "./button.js"
import styles from "../styles/layout.module.css"

export function Layout({ scrollUpSentinelRef, children }) {
  const { playClick, playPop } = useSfx()
  const [scrollUp, setScrollUp] = useState(false)

  useEffect(() => {
    if (!scrollUpSentinelRef) return

    const handleIntersect = (entries, _observer) => {
      const sentinel = entries[0]
      setScrollUp(sentinel.boundingClientRect.bottom < 0)
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    }
    const observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(scrollUpSentinelRef.current)
  }, [])

  return (
    <div className={"outer"}>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
      <Button
        className={`nes-btn is-error ${styles.goUpButton}`}
        style={{ bottom: `${scrollUp ? 20 : -60}px` }}
        clickSound={playClick}
        hoverSound={playPop}
        handleClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }}
        forceSoundEnabled={true}
      >
        <span className={styles.chevron}>&lt;</span>
      </Button>
    </div>
  )
}
