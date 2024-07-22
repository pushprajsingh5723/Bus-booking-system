import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <form>
      <div className='container'>
        <div className='input-container'>
          <h2>Login</h2>
          <input type='text' placeholder='Username' className='input' />
          <input type='password' placeholder='Password' className='input' />
          <button className='btn'>Login</button>
          <div className='footer-container'>
            <p>Forgot password? <Link to='/forgotpassword'>Forgot Password</Link></p>
            <p>Create New Account <Link to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
