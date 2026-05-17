import React, { useState } from 'react'
import Card from './Components/card'

function Home() {
    const [toActive,setactive]=useState(-1);
  return (
    <div>
        <Card toactive={toActive===0}
        show={()=>setactive(0)}

        setdefault={()=>{setactive(-1)}}
         >
            hiiiiiiiii logoooooooo
        </Card>
        <Card toactive={toActive===1}
        setdefault={()=>{setactive(-1)}}
         show={()=>setactive(1)}>
            hiiiiiiiii logoooooooo
        </Card>
        <Card toactive={toActive===2}
        setdefault={()=>{setactive(-1)}}
         show={()=>setactive(2)}>
            hiiiiiiiii logoooooooo
        </Card>
        <Card toactive={toActive===3}
        setdefault={()=>{setactive(-1)}}
         show={()=>setactive(3)}>
            hiiiiiiiii logoooooooo
        </Card>
        <Card toactive={toActive===4}
        setdefault={()=>{setactive(-1)}}
         show={()=>setactive(4)}>
            hiiiiiiiii logoooooooo
        </Card>
        <Card toactive={toActive===5}
        setdefault={()=>{setactive(-1)}}
         show={()=>setactive(5)}>
            hiiiiiiiii logoooooooo
        </Card>
        
    </div>
  )
}

export default Home