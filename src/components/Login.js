import { Link } from 'react-router-dom';

const Login=()=>{

    return(
<div className="login">
    <h1>Login to your account</h1>
   <div className="login-form">
   <label>Email</label>
    <input  />
    <label>Password</label>
    <input />

       <button className='reg-btn'>Login
       </button>
       </div>
  <p>You don't have an account?</p> 
  <Link to='/register' className='reg-link'>Register here</Link>
</div>
    );
}

export default Login;