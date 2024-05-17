import React from 'react'
import { NavLink } from 'react-bootstrap'
import "./login.css"

const Login = () => {
  return (
    <div className='wrapper-container'>
        
        <div class="col1">


        <div id="logMarvel">
            <div className='marvel-login'>
                <h1 className='marvel-login'>
                    MARVEL
                </h1>
            </div>
        </div>


        <div className='logForm'>

            <h2 id='form-title'>
                Bem vindo(a) de volta!
            </h2>
            <form >
                <div className='input'>
                    <input type='text' name='user' placeholder='Usuário' className='input-text' />
                    <input type='password' name='password' placeholder='Senha' className="input-text"/>
                </div>

                <div>
                    <div className='forgot'>
                        <input type='checkbox' name='save-login' className='save-login'/>
                        <label className='save-login' htmlFor="save-login">Salvar login</label>
                        <a href='#' type='' name='forgot-password'>                
                        <label className='save-login' htmlFor="forgot-password" id="save-login">Esqueci a senha</label>
                        </a>
                    </div>
                <div>
                    <NavLink id='entrar' className='.btn-large' href="filmes">Entrar</NavLink>
                </div>

                <p className='save-login'>
                    Ainda não tem o login? <a href="#" class="cadastreSe">Cadastre-se</a>
                </p>

                </div>
            </form>
                </div>

        </div>



        <div id="logImage" className='col2'>
        <div className='image-container'>
            <div className='black-gradient'/>
         <img src='/image/avengers.jpg' />
        </div>
        </div>
    </div>
  )
};
export default Login