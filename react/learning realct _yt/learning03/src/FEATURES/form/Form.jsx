import React, { useState } from 'react'
import Nav from '../Nav'

const Form = (props) => {
    const [name,setname]=useState("")
    const [age,setage]=useState("")

    function handelclick(e){
        e.preventDefault();
        const newStudent={
            "name":name,
            "age":age
        }
        props.addstu(newStudent)
        setage("")
        setname("")

    }
  return (
    <div>
        <Nav/>
        <form onSubmit={handelclick}>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="text" value={age} onChange={(e)=>setage(e.target.value)}/>

            <button type="submit">submit</button>

        </form>
    </div>
  )
}

export default Form