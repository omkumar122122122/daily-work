import React from 'react'
import './button.css'

function Button(props) {
  return (
    <div><button id="btn1">{props.btn}</button></div>
  )
}

export default Button