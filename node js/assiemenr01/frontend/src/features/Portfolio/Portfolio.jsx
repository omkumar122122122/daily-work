import React, { useEffect, useState } from 'react'
import Nav from '../../share/components/Nav'



function Portfolio() {

  const [portfolioData,setdata]=useState({});

const fetchData = async () => {
  let response = await fetch("http://localhost:3000/api/portfolio");
  setdata(await response.json());
};


useEffect(()=>{
  fetchData();
},[])

  return (
    
    <div>
        <Nav />
       <h3>name:</h3> <h4>{portfolioData.name}</h4>

       <p>{portfolioData.bio}</p>


       <h4>skills</h4>
       
       
       {
       portfolioData.skills && portfolioData.skills.map((skill) => (
        <p key={skill}>{skill}</p>
      ))
      }
      
      <h4>
        projects
      </h4>

      {
       portfolioData.projects && portfolioData.projects.map((proj) => (
        <div>
          <p >name : {proj.name}</p>
          <p>description : {proj.description}</p>
          <p>{`click here to see => ${proj.link}`}</p>
        </div>
      ))
      }
       
    </div>
  )
}

export default Portfolio