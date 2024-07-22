import React,{ useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import './App.css'
import Forgotpassword from './Components/Forgotpassword/Forgotpassword'
import Resetpassword from './Components/Resetpassword/Resetpassword'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='forgotpassword' element={<Forgotpassword/>}/>
      <Route path='resetpassword' element={<Resetpassword/>}/>

      </Routes>
      </Router>
    </>   
  )
}

export default App
