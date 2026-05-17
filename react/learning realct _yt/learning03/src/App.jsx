import { useState } from 'react'
import './App.css'
import Home from './FEATURES/Home/Home'
import Form from './FEATURES/form/Form';
import Nav from './FEATURES/Nav';
import {createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const route=createBrowserRouter(
    [
      {path:"/",
        element:<Home/>
      },
      {
        path:"/form",
        element:<Form/>
      }
    ]
  )



  return (
    <>
      <RouterProvider router={route}/>
      
    </>
  )
}

export default App
