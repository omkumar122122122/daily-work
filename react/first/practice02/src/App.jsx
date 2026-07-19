import { useState,useEffect } from 'react'


function App() {
  const [count,setcount]=useState(0);
  const [count2,cutount]=useState(0);
  useEffect(() => {
    console.log('useEffect called and count: ', count,count2)
  }, [count])


 
  
  

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>count:{count}</p>
      <button onClick={() => cutount(count2 + 2)}>Increment 2</button>
      <p>count2: {count2}</p>

    </div>
  )
}

export default App
