import React from 'react'
import './Hero.css'
import himg from './image.png'
import Button from './Button'

function Hero() {
  return (
    <div>
        <section className="hero">
                
                <div className="txt">
                  <h1 className="hero-heading">Become a better frontend developer.</h1>
                  <p id="p1">Take your frontend skills to the next level by recreating <b>real websites</b> from <b>real companies.</b></p>
                  <p id="p2">The perfect type of practice for developers of all skill levels. Are you up for the challenge?</p>
                  <div className="btns">
                  <Button btn="view project"/>
                  <Button btn="learn more"/>
                    

                  </div>
                </div>
                <img src={himg} alt="" />
              </section>
    </div>
  )
}

export default Hero