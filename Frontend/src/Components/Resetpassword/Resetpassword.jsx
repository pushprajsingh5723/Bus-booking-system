import React from 'react'
import './Reserpassword.css'
const Resetpassword = () => {
  return (
    <form>
    <div className='input-container'>
    <h2>Reset Password</h2>
    <input type='password' name='password' placeholder='Enter Password'></input> 
    <input type='password' name='password' placeholder='Enter Confirm Password'></input>    
    <button type='submit'>Reset Password</button>
    </div>
    </form>
  )
}

export default Resetpassword
