import React, { useState } from 'react'

function Home_btn() {
  const [message ,setmessage]=useState("hii");
  return (
    <div><button style={{ border: "1px solid black", padding: "8px 16px" }} onClick={()=>{
      setmessage("you had started")

      

    }}>Get
    Started</button>
    <p>{message}</p>
    </div>
  )
}

export default Home_btn