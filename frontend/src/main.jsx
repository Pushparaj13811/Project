import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import SignUP from './components/SignUp/SignUP'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import ForgotPassword from './components/Forgotpassword/ForgotPassword'
import NotFound from './components/Notfound/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/signup" element={<SignUP />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
