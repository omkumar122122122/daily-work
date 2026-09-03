import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    
    const [name,setname]=useState("")
    const [roll,setroll]=useState("")
    const [branch,setbranch]=useState("")
    const [phone,setphone]=useState("")


    async function handlesubmit(e){
        e.preventDefault();
     try {
        const newuser={
            name,
            roll,
            branch,
            phone,
        }
        setbranch("")
        setname("")
        setphone("")
        setroll("")

        const responce= await axios.post("http://localhost:3000/login",newuser)
        console.log(responce.data.user.id)

        localStorage.setItem("id",responce.data.user.id)
        navigate("/home");
        

        
     } catch (error) {
        console.log(error)
        
     }
        
    }



  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" value={name} name='name' placeholder='enter name'onChange={(e)=>{setname(e.target.value)}}/>
            <input type="text" value={roll} name='roll' placeholder='enter roll' onChange={(e)=>{setroll(e.target.value)}} />
            <input type="text" value={branch} name='branch' placeholder='enter branch' onChange={(e)=>{setbranch(e.target.value)}} />
            <input type="text" value={phone} name='phone' placeholder='enter phone number' onChange={(e)=>{setphone(e.target.value)}} />
            <button type="submit">submit</button>
        </form>
        <p>heee</p>
    </div>
  )
}

export default Login