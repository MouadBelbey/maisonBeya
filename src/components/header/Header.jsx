import React from 'react'
import './header.css'
import BGIMG from '../../assets/BGIMG.jpeg'

function Header() {
  return (
    <header id='#'>
      <div className="container header__container background">
          <img src={BGIMG} alt="" />
          <h1>Maison Beya</h1>
      </div>
    </header>
  )
}

export default Header