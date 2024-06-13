import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import SignUP from './components/SignUp/SignUP'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/signup" element={<SignUP />}></Route>

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router} />
  
  </React.StrictMode>,
)
