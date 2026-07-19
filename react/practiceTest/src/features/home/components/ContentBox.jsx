import React, { useState } from 'react'
import './ContentBox.css'


function ContentBox(props) {
    const [toshow,changeshow]=useState(true)
    const [msg,changwmsg]=useState("")
    const [btnmsg,changwbtnmsg]=useState("show")

  return (
    <div>
        <div className="cotbox">
        <div className="title"> 
        <h2>{props.title}</h2>
        <button  className='btn' onClick={()=>{
            if(toshow){
                changwbtnmsg("hide")
                changwmsg(props.children)
                changeshow(false)

            }
            else{
                changwbtnmsg("show")
                changwmsg("")
                changeshow(true)

            }
        }}>{btnmsg}</button>
        </div>
        <p>{msg}</p>
        </div>
    </div>
  )
}

export default ContentBox