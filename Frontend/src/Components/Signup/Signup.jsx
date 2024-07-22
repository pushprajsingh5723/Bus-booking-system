import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className='container'>
      <div className='input-container'>
        <h2>Sign up</h2>
        <form>
          <div className='form-group'>
            
            <input  type='text' name='name' id='name' placeholder='Enter your Full name' />
          </div>

          <div className='form-group'>
            
            <input   type='text' name='email' id='email' placeholder='Enter your Email' />
          </div>

          <div className='form-group gender-group'>
            <label>Gender:</label>
            <div className='gender-options'>
              <div>
                <input type='radio' id='male' name='gender' value='male' />
                <label htmlFor='male'>Male</label>
              </div>
              <div>
                <input type='radio' id='female' name='gender' value='female' />
                <label htmlFor='female'>Female</label>
              </div>
              <div>
                <input type='radio' id='other' name='gender' value='other' />
                <label htmlFor='other'>Other</label>
              </div>
            </div>
          </div>

          <div className='form-group'>
            
            <input  type='date' name='date' id='date' />
          </div>

          <div className='form-group'>
            
            <input  type='number' name='number' id='number' placeholder='Enter your Number' />
          </div>

          <div className='form-group'>
            
            <input  type='text' name='address' id='address' placeholder='Enter your Address' />
          </div>

          <div className='form-group'>
            
            <input   type='text' name='city' id='city' placeholder='Enter your City' />
          </div>

          <div className='form-group'>
            
            <input  type='password' name='password' id='password' placeholder='Enter your Password' />
          </div>

          <button>Signup</button>
          <p>Or</p>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
