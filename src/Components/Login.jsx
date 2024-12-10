import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container'>
        <h3>Login</h3>

        <form action="">
            <input type="text" placeholder='Enter Username' className='form-control'/>
            <input type="password" placeholder='Enter Your Password ' className='form-control'/>
        </form>
        <button className='btn btn-primary'>Login</button>  {/* Added Bootstrap button class */}
        <p>Don't you have an account <Link to='/signup'>Signup</Link></p>
    </div>
  );
}

export default Login;
