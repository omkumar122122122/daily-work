import React from 'react'
import Home from './features/home/Home'
import Portfolio from './features/Portfolio/Portfolio'
import Products from './features/Products/Products'
import ProductDetail from './features/ProductDetail/ProductDetail'
import Blogs from './features/Blogs/Blogs'
import BlogDetail from './features/BlogDetail/BlogDetail'
import Profiles from './features/Profiles/Profiles'

import {createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Portfolio",
    element: <Portfolio />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:id",
    element: <ProductDetail />
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/blogs/:id",
    element: <BlogDetail />
  },
  {
    path: "/profiles",
    element: <Profiles />
  }
]);



function App() {
  return (
    <div>
    <RouterProvider router={route}/>
    
      

    </div>
  )
}

export default App