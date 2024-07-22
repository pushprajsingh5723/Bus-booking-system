import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'


const Home = () => {
  return (
    <div className='container'>
    <input type='text' name='location' placeholder='Pick up Location' className='home-container'></input>
    <input type='text' name='location' placeholder='Destination' className='home-container'></input>
    <input type='date' name='date' placeholder='Date' className='home-container'></input>
      <button className='home-container' >🔍 Search</button>
   
    </div>
  )
}

export default Home
