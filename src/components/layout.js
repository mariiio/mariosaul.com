import React from "react"
import { NavBar } from "./navbar.js"
import { Main } from "./main.js"
import { Footer } from "./footer.js"

export function Layout({ children }) {
  return (
    <div className={"outer"}>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
