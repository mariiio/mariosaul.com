import React from "react"
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
import "../styles/global.css"

export default function Home() {
  console.log(
    "%c HEY THERE!",
    `
      font-size: 5vw;
      color: transparent;
      background-image: url(https://mariosaul.netlify.app/static/jump-d872183963adf9062b228c74c5515b76.png);
      background-blend-mode: multiply;
      background-size: contain;
      line-height: 1;
    `
  )

  return [
    <SettingsProvider>
      <SEO />
      <Layout>
        <Block background="clouds">
          <Hero />
        </Block>
        <span id="scroll-up-interception-sentinel" />
        <Clouds previousColor="blue">
          <Bio />
          {/* <hr/>
          <Skills /> */}
          <hr />
          <Projects />
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
    </SettingsProvider>,
  ]
}
