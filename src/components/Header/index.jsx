import React from 'react'
import './index.css'
import LogoPicture from '../../assets/images/logo-picture.jpg'
import LogOutPicture from '../../assets/images/logout.svg'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='container-header'>
            <header className="header">
                <NavLink to="/createArticle">
                    <img src={LogoPicture} alt="" />
                </NavLink>
                <div className="pages">
                    <NavLink className="link" to='/'>Home</NavLink>
                    <NavLink className="link" to='/createArticle'>Create Article</NavLink>
                </div>
            </header>
        </div>
    )
}

export default Header
