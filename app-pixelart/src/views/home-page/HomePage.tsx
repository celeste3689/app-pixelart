import { Link, Navigate, useNavigate } from 'react-router-dom';
import './homePage.css';
const ipcRenderer = window.require("electron").ipcRenderer
 


function HomePage() {
  const navigate = useNavigate()

  return (
    <div className='home'>
      <h1 id='title'>App-Pixelart</h1>
    <button className='boton'>Iniciar</button>

    <button className='boton'>Opciones</button>

    <button onClick={(e) => navigate('/')} className="boton">Cerrar sesion </button> 

    <button onClick={(e) => ipcRenderer.send('close')} className="boton">Cerrar aplicacion </button> 
    </div>
  );
}

export default HomePage;
