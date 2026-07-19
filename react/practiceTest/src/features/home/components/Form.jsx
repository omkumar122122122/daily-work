import React, { useState } from 'react'

function Form() {
    const [name,chngename]=useState("")
    const [msg,changemsg]=useState("");
  return (
    
    <div>
        <form action="">
            <h3>Say hiii....</h3>
            <label htmlFor=""></label>
            <input type="text" placeholder='enter your name' onChange={(e)=>chngename(e.target.value)} />

        </form>
        <p>{msg}</p>
        <button onClick={()=>changemsg("your message summited sucesfully")}>summit</button>
    </div>
  )
}

export default Form