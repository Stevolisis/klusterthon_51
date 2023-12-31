import React, { useState, useContext } from 'react'
import { useSignup } from "../hooks/useSignup"
import { AlertContext } from '../context/AlertContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [phone, setPhone] = useState('')
    const {signup, error, isLoading} = useSignup()
    const {showAlert} = useContext(AlertContext);
    const [showPassword, setShowPassword] = useState(false)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== cpassword){
          showAlert("error", "Password fields do not match!")
          return
        }
        await signup(username, email, password, phone)
    }

  return (
    <div className='signup_main'>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <style>
          {`body{
              min-height: 100vh;
              background: url('/signup_bg.svg') center bottom / cover no-repeat;
            }
            .pages{
              padding: 0 20px;
              min-height: 100vh;
              max-width: none;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
        `}</style>
          <a href='/' className='home_link'>
            <img className="logo" src="/logo.png" alt="" /> 
            <h1>KlustMedics</h1> 
          </a>
          <h3 className='form_headings'>Health Provider Signup</h3>
          <div className="signup_field">
            <label>Fullname:</label>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username} required={true}/>
          </div>
          <div className="signup_field">
            <label>Email:</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required={true} placeholder='example@gmail.com'/>
          </div>
          <div className="signup_field">
            <label>Phone:</label>
            <input type="tel" onChange={(e)=> setPhone(e.target.value)} value={phone} required={true} placeholder='+234 123 456 7890'/>
          </div>
          <div className="signup_field">
            <label>Password:</label>
            <input type={showPassword ? "text" : "password"} onChange={(e)=> setPassword(e.target.value)} value={password} required={true} minLength={8} placeholder='Minimum of 8 characters'/>
            <div className='show_pword' onClick={() => setShowPassword((prevState)=> !prevState)}>
              {!showPassword? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
          <div className="signup_field">
            <label>Confirm Password:</label>
            <input type={showPassword ? "text" : "password"} onChange={(e)=> setCpassword(e.target.value)} value={cpassword} required={true}/>
            <div className='show_pword' onClick={() => setShowPassword((prevState)=> !prevState)}>
              {!showPassword? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
          <button className='signup_frm_btn' style={isLoading?{cursor:"wait", background:"#8a8a8a"}:{}}>{isLoading? 'Loading...' : 'Register!'}</button>
          <p className='login_redirect'>Already have an account? <br/> <a href='/login'>Login Instead</a></p>
      </form>
      <img src="/logo.png" alt="kluster_logo" className='signup_img'/>
    </div>
  )
}
