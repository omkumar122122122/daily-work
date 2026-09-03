import React from 'react'
import Login from './features/login/Login';
import Home from './features/home/Home';
import Profiles from './features/profile/Profiles';



import {createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const route=createBrowserRouter([
    {
      path: "/",
      element:<Login/>
    },
    {
      path: "/home",
      element:<Home/>
    },
    {
      path: "/profiles",
      element:<Profiles/>
    }
  ])


  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App