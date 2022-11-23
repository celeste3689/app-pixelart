import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [isRegisted, setRegisted] = useState(true)
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()
  const usuarioH = 'Maria'
  const contraseñaH = '1234'


  function Iniciar(usuario: string, contraseña: string) {
    if (usuario === usuarioH && contraseña === contraseñaH) {
      navigate('/home-page')

    }else
      {
        setRegisted(false)
      }  
  }


  return (
    <div className='login'>
      <div id='login'>
        <h1 id='title'>Iniciar sesion</h1>
        <form className='login-form'>
          <label htmlFor="Usuario" className='form-component'>Usuario</label>
          <input type="text" onChange={e => setUsuario(e.target.value)} placeholder='Enter usuario' id='Usuario' className='form-component'/>
          <label htmlFor="Contraseña" className='form-component'>Contraseña</label>
          <input type="password" onChange={e => setContraseña(e.target.value)} placeholder='Enter contraseña' className='form-component'/>
          <button onClick={e => Iniciar(usuario, contraseña)} className='form-component'>Iniciar sesion</button>
          <button onClick={e => navigate('/register')} id='form-last' type='submit' className='form-component' >No tenes cuenta?</button>
        </form>
        <div className={['mensaje', isRegisted ? '' : 'error'].join(' ')}>
          <h1>Usuario o contraseña incorrecto</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
