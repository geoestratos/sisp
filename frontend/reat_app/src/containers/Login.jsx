import React from 'react'

import loginBackground from '../assets/static/login-background.jpg'
import logo from '../assets/static/logo-small.png'

const Login = () => (
  <section className="container-login" style={{backgroundImage: `url(${loginBackground})`}}>
			<section className="wrap-login">
				<form className="login-form validate-form">
          <div className='login-form-logo' > 
            <img src={logo} alt="El aguila"/>
          </div>
					<span className="login-form-title">
						Iniciar Sesión
					</span>

					<div className="wrap-input validate-input" data-validate = "Username is required">
						<input className="input" type="text" name="username" placeholder="Username"/>
						<span className="focus-input"></span>
						<span className="symbol-input">
							<i className="fa fa-user"></i>
						</span>
					</div>

					<div className="wrap-input validate-input" data-validate = "Password is required">
						<input className="input" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input"></span>
						<span className="symbol-input">
							<i className="fa fa-lock"></i>
						</span>
					</div>

					<div className="container-login-form-btn">
						<button className="login-form-btn">
							Login
						</button>
					</div>
				</form>
			</section>
		</section>
)

export default Login

