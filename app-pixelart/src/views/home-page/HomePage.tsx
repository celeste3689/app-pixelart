import { Link, Navigate } from 'react-router-dom';
const ipcRenderer = window.require("electron").ipcRenderer


function Homepage() {
  return (
    <div>
      <h1>App-Pixelart</h1>
    <button> Iniciar </button>

    <button>Opciones</button>

    <button onClick={(e) => ipcRenderer.send('close')} className="close" /> 
    </div>
  );
}

export default Homepage;
