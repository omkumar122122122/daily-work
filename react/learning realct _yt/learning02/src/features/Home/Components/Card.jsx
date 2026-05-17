import React, { useState } from 'react'

function Card(props) {

    
  return (
    <div>
        <h2>title</h2>
        {props.toactive && <p>props.children</p>}
        <button onClick={()=>{
            if(props.toactive){
                props.setdefault()
            }
            else{
                props.show()
            }
        }}> show</button>

    </div>
  )
}

export default Card