import React, { useState } from "react"
import HeaderImage from "../assets/images/header_img_01.png"
import Icon from "../assets/images/icon.png"
import { Link } from "gatsby"
import{FiAlignJustify} from "react-icons/fi"

const NavBar = () => {
	 const[show, setShow] = useState(false)

  return(

    <nav className="nav-container">
      <div className="nav-main">
        <div className="nav-icons">
          <Link to="/"><img src={Icon} alt="home icon" className="home-icon" /></Link>
          <button className="nav-btn" onClick={() => setShow(!show)} >
            <FiAlignJustify />
          </button>
        </div>
  
        <div className={show ? "nav-links show-links" : "nav-links"} >
          <Link 
            to="/" 
            className="nav-link" 
            activeClassName="active-link"
            onClick={() => setShow(false)}>
              Home
          </Link>
          <Link 
            to="/about" 
            className="nav-link" 
            activeClassName="active-link" 
            onClick={() => setShow(false)}>
            About
          </Link>
          <Link 
            to="/tags" 
            className="nav-link" 
            activeClassName="active-link" 
            onClick={() => setShow(false)}>
            Tags
          </Link>
          <Link 
            to="/recipes" 
            className="nav-link" 
            activeClassName="active-link" 
            onClick={() => setShow(false)}>
            Recipes
          </Link>

        </div>
      </div>
      <img src={HeaderImage} alt="cutting board" className="header_img" />
              <div>
          <div className="index-contianer">
            <h1 className="heading_one center">Claire Makes</h1>
          </div>
        </div>
    </nav>

		)
}
/*className={show ? "nav-links show-links" : "nav-links"}*/
export default NavBar
