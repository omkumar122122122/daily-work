import React from 'react'
import {Link}  from "react-router-dom";

function Nav() {
  return (
    <div>
        <Link to="/">home</Link>
        <Link to="/form">fpre</Link>
    </div>
  )
}

export default Nav