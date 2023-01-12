import React from "react"
import NavBar from "./navbar"
import Footer from "./footer"
import "../assets/css/main.css"


const layout = ({ children }) => {

	return(
      <>
        <NavBar />
        {children}
        <Footer />
      </>
    )
}

export default layout