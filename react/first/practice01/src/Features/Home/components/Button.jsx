import React, { useState } from 'react'
import './button.css'

function Button(props) {
  const [type,settype]=useState(props.stt);
  return (
    <div><button className={props.cname} >{props.btn}</button></div>
  )
}

export default Button