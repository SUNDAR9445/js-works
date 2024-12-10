import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='container'>
        <h3>Signgup</h3>

        <form action="">
            <input type="text" placeholder='Enter Username' className='form-control'/>
            <input type="password" placeholder='Enter Your Password ' className='form-control'/>
        </form>
        <button className='btn btn-primary'>Signup</button>
        <Link to={"/"}>back</Link>
    </div>
  );
}

export default Signup;
