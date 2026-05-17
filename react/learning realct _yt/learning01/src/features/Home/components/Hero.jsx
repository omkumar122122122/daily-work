import React from 'react'
import Skillcard from './Skillcard'
import { useState } from 'react'

function Hero() {
    const [toshow ,setshow]=useState(true);
   
  return (
    <div>
        
        
        <h2>
            
            <Skillcard show={toshow} onshow={()=>(toshow)?setshow(false):setshow(true)}/>
                <p></p>
               
            
        </h2>
    </div>
  )
}

export default Hero