import React, { useState } from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {AiFillContacts} from 'react-icons/ai'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

function Nav() {

  const [activeNav, setActiveNav] = useState('');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#produit" onClick={() => setActiveNav('#produit')} className={activeNav === '#produit' ? 'active' : ''}><MdOutlineProductionQuantityLimits /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts /></a>
      <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><BsFillArrowDownCircleFill /></a>
    </nav>
  )
}

export default Nav