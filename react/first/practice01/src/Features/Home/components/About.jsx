import React from 'react'
import './About.css'
import img01 from'./assets/img01.jpeg'
import img02 from'./assets/img02.jpeg'
import img03 from'./assets/img03.jpeg'
import img04 from'./assets/img04.jpeg'
import AboutCard from './AboutCard'
import Button from './Button'

function About() {
  return (
    <div className='main'>
      <div className="text_contener01">
        <h1>Frontend proctice provides you with the inspiration and resources to create beautifull websight </h1>
      </div>
      <div className='text_contener02'>
        <h2>here are some way you can benifit from using our platform</h2>

      </div>
      <div className='carddiv'>
      <AboutCard img={img01} pra="Enhance your skills by building real websites selected for their educational value."/>
      <AboutCard img={img02} pra="Test and improve your frontend knowledge through various challenges"/>
      <AboutCard img={img03} pra="Use the provided color palettes for each project to save time."/>
      <AboutCard img={img04} pra="Find helpful, curated resources to tackle challenging elements."/>



      </div>
      <h2>Ready to become a better frontend developer? </h2>
      <Button cname="btn02" btn="start now"/>

    </div>
  )
}

export default About