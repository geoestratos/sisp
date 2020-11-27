import React, {useState, useEffect} from 'react'
import userAvatar from '../assets/static/user-avatar.png'
import logo from '../assets/static/logo-small.png'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Header =()=>{
    const logoStyle = {
        width:"100px",
       
    }

    return (
        <header>
            <nav className="navbar shadow navbar-expand navbar-dark bg-primary py-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="El aguila" style= {logoStyle} />
                    </Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={userAvatar} alt="user"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Cambiar contraseña</a>
                                <a className="dropdown-item" href="#">Cerrar sesión</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
)}

export default Header