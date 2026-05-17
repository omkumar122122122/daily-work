import React, { useState } from 'react'
import Form from '../form/Form'
import Card from './components/Card'
import Nav from '../Nav'

const Home = () => {
    const [student,setstudent]=useState([])
    function addstud(nstudent){
        // console.log("recived"+nstudent+"total student"+student)
        setstudent(prev=>[...prev,nstudent])
    }
  return (
    <div>
     
        <Form  addstu={addstud}/>
        <p>total student</p>{student.map(stu=>
            <Card name={stu.name} age={stu.age}/>
        )}

        
    </div>
  )
}

export default Home