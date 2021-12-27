import { Link } from 'react-router-dom';


const Register=()=>{

    return(
<div className="register">
    <h1>Register a new account</h1>
<div className="register-form">
<label>First Name</label>
    <input type="text"  />
    <label>Last Name</label>
    <input type="text"  />
    <label>Username</label>
    <input type="text"  />
   <label>Email</label>
    <input type="text"  />
    <label>Password</label>
    <input type="password" />
   </div>
   <label>Bio</label>
    <textarea type="text"
    cols='30' rows='10'></textarea>
   <div >
       <button className="reg-btn">Register
       </button>
   </div> 
   <p>Already have an account?</p> 
  <Link to='/' className='reg-link'>Login here</Link>
</div>
    );
}

export default Register;