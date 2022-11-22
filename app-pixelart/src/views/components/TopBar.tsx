import { useState } from 'react';
import './topBar.css';
import { useNavigate } from 'react-router-dom';

const ipcRenderer = window.require("electron").ipcRenderer


const TopBar = () => {
  const navigate = useNavigate();
  const [isMaximized, setIsMaximized] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  ipcRenderer.on('maximized', () => {
    setIsMaximized(true);
  });
  ipcRenderer.on('restored', () => {
    setIsMaximized(false);
  });

  ipcRenderer.on('focused', () => {
    setIsBlur(false);
  });
  ipcRenderer.on('inactived', () => {
    setIsBlur(true);
  });

  return (
    <div className={['top-bar', isBlur ? 'blur' : ''].join(' ')}>
      <span className="title">Titulo</span>
      <div>
        <button
          onClick={(e) => ipcRenderer.send('minimize')}
          className="minimize"
        />
        <button
          title={isMaximized ? 'Restore' : 'Maximize'}
          onClick={(e) => ipcRenderer.send('max-res')}
          className={isMaximized ? 'maximized' : 'restored'}
        />
        <button onClick={(e) => ipcRenderer.send('close')} className="close" />
      </div>
    </div>
  );
};

export default TopBar;
