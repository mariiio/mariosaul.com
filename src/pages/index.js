import React, { useEffect, useRef } from "react"
import { SettingsProvider } from "../context/settings.js"
import { SEO } from "../components/seo.js"
import { Layout } from "../components/layout.js"
import { Block } from "../components/block.js"
import { Hero } from "../components/hero.js"
import { Clouds } from "../components/clouds.js"
import { Bio } from "../components/bio.js"
import { Skills } from "../components/skills.js"
import { Projects } from "../components/projects.js"
import { ContactLinks } from "../components/contactLinks.js"
import { MusicPlayer } from "../components/musicPlayer.js"
import "@fontsource/work-sans/400.css"
import "@fontsource/work-sans/900.css"
import "@fontsource/press-start-2p"
import "../styles/global.css"

const ANIMATE_CLASS_NAME = "animateSection"

const animate = element => element.classList.add(ANIMATE_CLASS_NAME)

export default function Home() {
  if (process.env.NODE_ENV === "development") {
    console.log(
      "%c HEY THERE!",
      `
        font-size: 5vw;
        color: transparent;
        background-image: url(https://mario.nintendo.com/static/c3dae4617cec36bb6591b8f935bd7b21/e49c4/character-3.png);
        background-blend-mode: multiply;
        background-size: contain;
        line-height: 1;
      `
    )
  }

  const elRefs = useRef([])
  const scrollUpSentinelRef = useRef()
  elRefs.current = Array(2)
    .fill()
    .map((_, i) => elRefs.current[i] || React.createRef())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(entry.target)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    )

    for (const ref of elRefs.current) {
      if (ref.current) {
        observer.observe(ref.current)
      }
    }
  }, [])

  return (
    <SettingsProvider>
      <Layout scrollUpSentinelRef={scrollUpSentinelRef}>
        <Block background="clouds">
          <Hero />
        </Block>
        <Clouds previousColor="blue">
          <span ref={scrollUpSentinelRef} />
          <div>
            <Bio />
          </div>
          <hr />
          <div className="unanimatedSection" ref={elRefs.current[0]}>
            <Skills />
          </div>
          <hr />
          <div className="unanimatedSection" ref={elRefs.current[1]}>
            <Projects />
          </div>
        </Clouds>
        <Clouds
          inverted="true"
          background="blue"
          previousColor="blue"
          customStyle="noTopPadding"
        >
          <ContactLinks />
        </Clouds>
      </Layout>
      <MusicPlayer />
    </SettingsProvider>
  )
}

export function Head() {
  return <SEO />
}
