import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>maisonBeya@gmail.ca</h5>
            <a href="mailto:maisonBeya@gmail.ca" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Contact Me By Messenger</h5>
            <a href="https://m.me/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>000-000-0000</h5>
            <a href="https://api.whatsapp.com/send?phone=" target='_blank'>Send a message</a>
          </article>
      </div>
    </section>
  )
}

export default Contact