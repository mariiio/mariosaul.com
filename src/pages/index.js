import React from "react"
import { SEO } from "../components/seo.js"
import { Layout } from "../components/layout.js"
import { Block } from "../components/block.js"
import { Hero } from "../components/hero.js"
import { Clouds } from "../components/clouds.js"
import { Bio } from "../components/bio.js"
import { ContactLinks } from "../components/contactLinks.js"
import "../styles/global.css"

export default function Home() {
  console.log(
    "%c HEY THERE!",
    `
      background-color: #0058bc;
      color: white;
      font-size: 2.8vw;
      line-height: 1;
      padding: 4rem 5vw;
    `
  )

  return [
    <SEO />,
    <Layout>
      <Block background="clouds">
        <Hero />
      </Block>
      <Clouds previousColor="blue">
        <Bio />
      </Clouds>
      <Clouds inverted="true" background="blue" previousColor="blue">
        <ContactLinks />
      </Clouds>
    </Layout>,
  ]
}
