import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer.js"

function Layout({ children }) {
  return (
    <div className="global-container h-100">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
