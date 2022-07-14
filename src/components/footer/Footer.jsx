import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">Maison Beya</a>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#produit">Produit</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Maison.Beya.1/" target="_blank"><BsFacebook className='footer__socials-icon'/></a>
        <a href="" target="_blank"><BsInstagram className='footer__socials-icon'/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Maison Beya 2022</small>
      </div>

    </footer>
  )
}

export default Footer