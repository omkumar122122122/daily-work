import React from 'react'
import { useState } from 'react'

function Skillcard(props) {
    const[btnshow,setbtnshow]=useState("show")
  return (
    <div>
        
       <button type="button" onClick={()=>{
        if(props.show){
            <p>hiiiii</p>
        }
        props.onshow
       }}>click me</button>
    </div>
  )
}

export default Skillcard