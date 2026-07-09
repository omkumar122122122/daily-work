import React from 'react'

function Featrs_cards(props) {
  return (
    <div>
      <div style={{ border: "1px solid black", padding: "16px", width:
    "200px" }}>
    <h3>{props.hed}</h3>
    <p>{props.decp}</p>
    </div>
    </div>
  )
}

export default Featrs_cards