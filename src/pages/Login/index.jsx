import React, { useState } from 'react'
import './index.css'
import ShowImage from '../../assets/images/show_icon.webp'
import HideImage from '../../assets/images/hide_icon.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { registerApi } from '../../axios'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [passwordOne, setPasswordOne] = useState(false)
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

        if (!password) {
            alert("Please Enter Password!")
            return false
        }

        return true
    }

    function handleLogin(event) {
        event.preventDefault()

        const isValid = validate()
        if (!isValid) {
            return
        }

        const user = {
            username: username,
            password: password
        }

        setLoading(true)

        registerApi.post(`auth/signin`, user, {
            headers: {
                "Content-Type": 'application/json'
            }
        })

        .then(response => {
            if (response.status == 200) {
                localStorage.setItem('user', JSON.stringify(response.data))
                localStorage.setItem('token', response.data.accessToken)
                navigate('/', {state: {token: response.data.accessToken}})
            }
        })

        .catch(error => {
            if (error.status == 404 || error.status == 401) {
                alert(error.message)
            }
        })

        .finally(() => {
            setLoading(false)
        })
    }

    return (
        <div className='container-login-register'>
            <h2>Login</h2>

            <form className="form">
                <label htmlFor="username">Enter Your Username</label>
                <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" name="username" id="username" placeholder='Enter your username...' />

                <label htmlFor="password">Enter Your Password</label>
                <div className="password">
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type={passwordOne ? "text" : "password"} name="password" id="password" placeholder='Enter your password...' />
                    <img src={passwordOne ? HideImage : ShowImage} onClick={() => setPasswordOne(!passwordOne)} alt="" />
                </div>

                <button onClick={handleLogin} className="btn" type='submit' disabled={loading}>
                    {loading ? "LOADING..." : "LOGIN"}
                </button>

                <NavLink className="link" to='/register'>Enter to Register page</NavLink>
            </form>
        </div>
    )
}

export default Login
