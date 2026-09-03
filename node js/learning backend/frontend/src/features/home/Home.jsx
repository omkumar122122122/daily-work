import React from 'react'
import { useState,useEffect } from 'react';

function Home() {
    const[usersdata,setdata]=useState({ name: '', roll: '', branch: '', phone: '', id: -1 })
    const id=localStorage.getItem("id")

    const fetchData = async () => {
        try {
    
          const response = await fetch(`http://localhost:3000/user/${id}`);
    
          const data = await response.json();
    
          setdata(data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
          setdata([]);
          
        }
      };
    
      
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <div>
        <p>{usersdata.name}</p>
        <p>hii</p>


    </div>
  )
}

export default Home