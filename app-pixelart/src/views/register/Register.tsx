import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
const ipcRenderer = window.require("electron").ipcRenderer

function Register() {
  const navigate = useNavigate()
  return (
      <div className='register'>
        <div id='register'>
          <h1 id='title'>Registrarse</h1>
          <form className='register-form'>
            <label htmlFor="Usuario" className='form-component'>Usuario</label>
            <input type="text" placeholder='Enter usuario' id='Usuario' className='form-component'/>
            <label htmlFor="Contraseña" className='form-component'>Contraseña</label>
            <input type="password" placeholder='Enter contraseña' className='form-component'/>
            <label htmlFor="Contraseña" className='form-component'>Confirmar Contraseña</label>
            <input type="password" placeholder='Enter contraseña' className='form-component'/>
            <button className='form-component'>Registrarse</button>
            <button onClick={e => navigate('/')} id='form-last' type='submit' className='form-component' >Iniciar sesion</button>
          </form>
        </div>
      </div>
    
  );
}

export default Register;