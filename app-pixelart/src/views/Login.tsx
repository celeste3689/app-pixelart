import React, { useState } from 'react';
import logo from './logo.svg';
import './Login.css';

function Login() {
  const [usuario, setUsuario ] = useState("")
  const [Contraseña, setContraseña] = useState("")


  return (
    <div>

        <img src='img/fondito.jpg' alt='Logo de pix'></img>
      
        <h1>Usuario</h1>
        <form>

        <label htmlFor="usuario">Usuario</label>
        <input type="text" placeholder="Email o nombre de usuario" />
        
        <label htmlFor="contraseña">Contraseña</label>
        <input type="Contraseña" placeholder="Contraseña" />

        <input type="submit" value="Iniciar sesion"/>
    
        <a href="#">No recordas tu cuenta?</a><br></br>
        <a href="#">No estas logeado?</a><br></br>
        </form>
    </div>
  );
}

export default Login;
