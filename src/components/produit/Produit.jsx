import React from 'react'
import './produit.css'
import PIC0 from '../../assets/item0.jpeg'
import PIC1 from '../../assets/item1.jpeg'
import PIC2 from '../../assets/item2.jpeg'

const data = [
  {
    id: 0,
    image: PIC0,
    title: 'testTitle',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  ratione aut asperiores laborum quam perferendis nam rem at, nesciunt sapiente minus error omnis, quod in beatae, id veritatis harum ipsa!",
    instagram: "https://www.instagram.com/maison.beya.1/"
  },
  {
    id: 1,
    image: PIC1,
    title: 'testTitle',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  ratione aut asperiores laborum quam perferendis nam rem at, nesciunt sapiente minus error omnis, quod in beatae, id veritatis harum ipsa!",
    instagram: "https://www.instagram.com/maison.beya.1/"
  },
  {
    id: 2,
    image: PIC2,
    title: 'testTitle',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  ratione aut asperiores laborum quam perferendis nam rem at, nesciunt sapiente minus error omnis, quod in beatae, id veritatis harum ipsa!",
    instagram: "https://www.instagram.com/maison.beya.1/"
  }
]

function Produit() {
  return (
    <section id='produit'>
      <div className="container produit__container">
        {data.map(({id, image, title, description, instagram}) => {
          return (
            <article className="produit__item">
            <div className="produit__item-img">
             <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <small>{description}</small>
            <div className="produit__item-cta">
              <a href={instagram} className="btn btn-primary">View</a>
            </div>
            </article>
          )
        })}
        
       
      </div>
    </section>
  )
}

export default Produit