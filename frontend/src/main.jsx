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
import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'
import Highlights from './components/Highlights/Highlights'
import Stories from './components/Stories/Stories'
import Saved from './components/Saved/Saved'
import Tagged from './components/Tagged/Tagged'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/signup" element={<SignUP />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/profile' element={<Profile />}>
        <Route path='highlights' element={<Highlights />}></Route>
        <Route path='stories' element={<Stories />}></Route>
        <Route path='saved' element={< Saved />}></Route>
        <Route path='tagged' element={<Tagged />}></Route>
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
