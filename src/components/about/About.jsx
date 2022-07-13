import React from 'react'
import './about.css';

function About() {
  return (
    <section id='about'>
      <div className="container about__container">
           <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Illum sed eius aspernatur libero reprehenderit veniam delectus
          </h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora 
            exercitationem suscipit molestiae magni rem, recusandae inventore nisi, velit, 
            ipsa natus eaque ipsam. Architecto sapiente alias consectetur fugiat veniam earum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque eligendi omnis 
            assumenda ut doloribus mollitia repudiandae, eveniet nostrum. Tempore autem nemo 
            veritatis sint. Officia omnis ipsam illo laudantium enim!
          </h5>
          <a href="#contact" className="btn btn-primary">Contact-Me</a>
      </div>
    </section>
  )
}

export default About