import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ContentBox from './components/ContentBox'
import './home.css'
import Form from './components/Form'
function Home() {
  return (
    <div>
        <Nav />
        <Hero />
        <div className='content'>
            <ContentBox title="Skills ">
                <p>My skills are :
                    Graphic Designing ,java......
                </p>
            </ContentBox>
            <ContentBox title="projects ">
                <p>working on.......
                    
                </p>
            </ContentBox>
            <ContentBox title="projects ">
                <p>working on.......
                    
                </p>
            </ContentBox>
            <ContentBox title="projects ">
                <p>working on.......
                    
                </p>
            </ContentBox>


        </div>
        <Form />

    </div>
  )
}

export default Home