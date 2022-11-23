import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()
  const usuarioH = 'Maria'
  const contraseñaH = '1234'

  function Iniciar(usuario: string, contraseña: string) {
    if (usuario === usuarioH && contraseña === contraseñaH) {
      navigate('/Homepage')

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
          <input type="text" onChange={e => setContraseña(e.target.value)} placeholder='Enter contraseña' className='form-component'/>
          <button type='submit' onClick={e => Iniciar(usuario, contraseña)} className='form-component'>Iniciar sesion</button>
          <button id='form-last' type='submit' className='form-component' >No tenes cuenta?</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
