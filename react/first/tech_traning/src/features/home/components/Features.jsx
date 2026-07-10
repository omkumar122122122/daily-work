import React from 'react'
import Featrs_cards from './Featrs_cards'


function Features() {
  return (
    <div><div style={{ border: "1px solid black", padding: "24px" }}>
    <h2>Our Features</h2>
    <div style={{ display: "flex", gap: "16px" }}>
        <Featrs_cards hed="Fast" decp="Everything loads quickly." im={image01}/>
        <Featrs_cards hed="Simple" decp="Easy to use for everyone." im={image01}/>
        <Featrs_cards hed="Reliable" decp="Everything loads quicklyWorks the same, every time." im={image01}/>

    </div>
    </div></div>
  )
}

export default Features