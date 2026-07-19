import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div>
        <div className='nav'>
            <div className="logo">
                <h2>OM</h2>
            </div>
            <div className="link">
                <a href="">Home</a>
                <a href="">Profile</a>
                <a href="">About</a>
            </div>
        </div>
    </div>
  )
}

export default Nav