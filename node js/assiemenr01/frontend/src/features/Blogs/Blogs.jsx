import React, { useEffect, useState } from 'react'
import BlogCard from './components/Blogcard';

import Nav from '../../share/components/Nav'


function Blogs() {
  const [blogdata,setdata]=useState([]);
  
  const fetchData = async () => {
    let response = await fetch("http://localhost:3000/api/blogs");
    setdata(await response.json());

  };
  
  
  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div>
        <Nav />
        <h2>blogs</h2>
        
        <div className="productsdiv">
        {
          blogdata.map((blog)=>(
            <BlogCard blog={blog}/>
            
            
          ))
        }
        </div>

    </div>
  )
}

export default Blogs