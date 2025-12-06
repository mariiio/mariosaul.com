import React from "react"
import { SettingsProvider } from "../context/settings.js"
import { Layout } from "../components/layout.js"
import { Block } from "../components/block.js"
import "@fontsource/work-sans/400.css"
import "@fontsource/work-sans/900.css"
import "@fontsource/press-start-2p"
import "../styles/global.css"
import * as styles from "../styles/404.module.css"

export default function NotFoundPage() {
  return (
    <SettingsProvider>
      <Layout>
        <Block background="clouds">
          <div className={styles.container}>
            <h1>404 — Page Not Found</h1>
            <p>How did you even get here?</p>

            <a href="/">&larr; take me back</a>
          </div>
        </Block>
      </Layout>
    </SettingsProvider>
  )
}
