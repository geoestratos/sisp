import React from 'react'
import '../assets/styles/components/NotFound.scss'
import logo from '../assets/static/logo.png'

const NotFound = () =>(
    <section className="notfound__container">
        <div className="notfound__container-logo">
            <img src={logo} alt="El aguila"/>
        </div>
        <div className="notfound__container-text">
            <h2>Oops!</h2>
            <h1>Error 404</h1> 
            <h2>Pagina no encontrada</h2>  
        </div>
    </section>
)

export default NotFound