import React from 'react';
import './Forgotpassword.css';

const Forgotpassword = () => {
  return (
    <div className='input-container'>
      <form>
        <h1>Forgot Password</h1>
        <input type="text" placeholder="Enter Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forgotpassword;
