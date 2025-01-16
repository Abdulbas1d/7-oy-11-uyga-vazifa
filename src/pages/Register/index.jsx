import React, { useState } from 'react'
import './index.css'
import { registerApi } from '../../axios'
import { NavLink, useNavigate } from 'react-router-dom'
import HideImage from '../../assets/images/hide_icon.png'
import ShowImage from '../../assets/images/show_icon.webp'

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [passwordOne, setPasswordOne] = useState(false)
  const [passwordTwo, setPasswordTwo] = useState(false)
  const navigate = useNavigate()

  function validate() {
    if (!username) {
      alert("Please Enter username!")
      return false
    }

    if (username.length < 3) {
      alert("Username must be at least 3 characters long")
      return false
    }

    if (!email) {
      alert("Please Enter email!")
      return false
    }

    if (!email.endsWith("@gmail.com")) {
      alert(`Email address must end with "@gmail.com"`)
      return false
    }

    if (!password) {
      alert("Please Enter Password!")
      return false
    }

    if (!rePassword) {
      alert("Please Enter RePassword!")
      return false
    }

    if (password !== rePassword) {
      alert("Password and RePassword must be the same");
      return false;
    }

    return true
  }

  function handleRegister(event) {
    event.preventDefault()

    const isValid = validate()
    if (!isValid) {
      return
    }

    const user = {
      username: username,
      email: email,
      password: password
    }

    setLoading(true)

    registerApi.post(`auth/signup`, user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status == 200) {
          navigate('/login')
        }
      })

      .catch(error => {
        if (error.status == 400) {
          alert("Email or Username already registered")
        }
      })

      .finally(() => {
        setLoading(false)
      })

    setUsername("")
    setEmail("")
    setPassword("")
    setRePassword("")
  }

  return (
    <div className='container-login-register'>
      <h2>Register</h2>
      <form className="form">
        <label htmlFor="username">Enter Your Username</label>
        <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" name="username" id="username" placeholder='Enter your username...' />

        <label htmlFor="email">Enter Your Email</label>
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" placeholder='Enter your email...' />

        <label htmlFor="password">Enter Your Password</label>
        <div className="password">
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} type={passwordOne ? "text" : "password"} name="password" id="password" placeholder='Enter your password...' />
          <img src={passwordOne ? HideImage : ShowImage} onClick={() => setPasswordOne(!passwordOne)} alt="" />
        </div>

        <label htmlFor="rePassword">Enter Your Re-Password</label>
        <div className="rePassword">
          <input value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} type={passwordTwo ? "text" : "password"} name="rePassword" id="rePassword" placeholder='Re-Enter your password...' />
          <img src={passwordTwo ? HideImage : ShowImage} onClick={() => setPasswordTwo(!passwordTwo)} alt="" />
        </div>

        <button onClick={handleRegister} className="btn" type='submit' disabled={loading}>
          {loading ? "LOADING..." : "REGISTER"}
        </button>

        <NavLink className="link" to='/login'>Enter to Login page</NavLink>
      </form>
    </div>
  )
}

export default Register
