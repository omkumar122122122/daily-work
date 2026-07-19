import React from 'react'
import './AboutCard.css'

function AboutCard(props) {
  return (
    <div className='mainbox'>
        <div className="img">
        <img src={props.img} alt="" />
        </div>
        <div className="para">
            <p>{props.pra}</p>
        </div>

    </div>
  )
}

export default AboutCard