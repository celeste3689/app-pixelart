import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()
  const usuarioH = 'Maria'
  const contraseñaH = '1234'

  function Iniciar(usuario: string, contraseña:string){
    if (usuario === usuarioH && contraseña === contraseñaH) 
    {
      navigate('/Homepage')
      
    }
  }


  return (
    <div>
      <form>
        
      <label htmlFor="Usuario">Usuario</label>
      <input type="text" onChange={e => setUsuario(e.target.value)} placeholder='Enter usuario' id='Usuario' />
      <label htmlFor="Contraseña">Contraseña</label>
      <input type="text" onChange={e => setContraseña(e.target.value)} placeholder='Enter contraseña'/>
      <button type='submit' onClick={e => Iniciar(usuario, contraseña)}>Iniciar sesion</button>
      <button type='submit'>No tenes cuenta?</button>
      </form>


    </div>
  );
}

export default Login;
