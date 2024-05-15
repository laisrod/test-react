import React from 'react'
import { NavLink } from 'react-bootstrap'
import "./login.css"

const Login = () => {
  return (
    <div className='wrapper-container'>
        <div className='login-container'>
        <div className='marvel-login'>
            <h1>
                Marvel
            </h1>
        </div>

        <div className='login-form'>
        <h2 id='form-title'>
            Bem vindo(a) de volta
        </h2>
        <form >
            <div className='input'>
                <input type='text' name='user' placeholder='Usuário' className='input-text' />
                <input type='password' name='password' placeholder='Senha' className="password"/>
            </div>
            <div>
                <NavLink id='entrar' className='.btn-large' href="filmes">Entrar</NavLink>
            </div>
            <div>
                <div>
                    <input type='checkbox' name='save-login'/>
                    <label className='save-login' htmlFor="save-login">Salvar login</label>
                </div>
                <div className='forgot'>
                    <a href='#' type='' name='forgot-password'>                
                        <label className='save-login' htmlFor="forgot-password">Esqueci a senha</label>
                    </a>
                </div>
                <p>
                Ainda não tem o login? <a href="#">Cadastre-se</a>
                </p>
            </div>
        </form>
        </div>
        </div>
        <div className='image-container'>
            <div className='black-gradient'/>
         <img src='/image/avengers.jpg' />
        </div>
    </div>
  )
}

export default Login