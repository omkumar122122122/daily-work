import React, { useEffect, useState } from 'react'
import ProfileCard from './components/profilecard';

import Nav from '../../share/components/Nav'


function Profiles() {
  const [profilesdata,setdata]=useState([]);
  
  const fetchData = async () => {
    let response = await fetch("http://localhost:3000/api/profiles");
    setdata(await response.json());

  };
  
  
  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div>
        <Nav />
        <h2>profiles</h2>
        
        <div className="productsdiv">
        {
          profilesdata.map((pro)=>(
            <ProfileCard profile={pro}/>
            
            
          ))
        }
        </div>

    </div>
  )
}

export default Profiles