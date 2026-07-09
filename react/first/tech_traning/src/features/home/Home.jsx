import React from 'react'
import Nav from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'


const Home = () => {
  return (
    <div>
      <Nav  link="home"/>
      <Hero />
      <Features />

    </div>
  )
}

export default Home