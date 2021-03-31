import React from "react"
import { Layout } from "../components/layout.js"
import { Block } from "../components/block.js"
import styles from "../styles/404.module.css"

export default () => {
  return [
    <Layout>
      <Block background="clouds">
        <div className={styles.container}>
          <h1>404 — Page Not Found</h1>
          <p>How did you even get here?</p>

          <a href="/">&larr; take me back</a>
        </div>
      </Block>
    </Layout>,
  ]
}
