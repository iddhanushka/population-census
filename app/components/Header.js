import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <Link to="/" className="header__link-bar">
          <ul className="header__list">
            <li>
              <img className="header__logo" src="./images/logo.png" alt="" />
            </li>
            <li>
              <h3 className="header__tag">Welcome to the population census</h3>
            </li>
          </ul>
        </Link>
      </div>
    </header>
  )
}

export default Header
