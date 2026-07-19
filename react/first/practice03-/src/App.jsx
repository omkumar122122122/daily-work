import React from 'react'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Home from './features/home/Home'
import About from './features/About/About'
import Nav from './shared/components/Nav'


function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    </Routes>
     </BrowserRouter>
     <Nav />
    </div>
  )
}

export default App