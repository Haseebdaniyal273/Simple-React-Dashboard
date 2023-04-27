import React, {useState} from 'react'
import './ecomcss.css';


const Register = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const colletData = () =>{
        console.warn(name,email,password)
    }

  return (
    <div className='register'>
      <h1>Register</h1>
      <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name'></input>
      <input className='inputBox' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'></input>
      <input className='inputBox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'></input>
      <button onClick={colletData} className='abc' type="button">Sign Up</button>
    </div>
  )
}

export default Register
