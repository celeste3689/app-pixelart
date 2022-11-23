import { useState } from "react";
import { ColorResult } from "react-color";
import ColorPiker from "../../components/ColorPicker";
import DrawingPanel from "../../components/DrawingPanel";
import './DrawView.css';

function DrawView(){

    const [colorSelected, setColorSelected] = useState('');
    const handleChangeComplete = (color: ColorResult) => {
        setColorSelected(color.hex);
    };
    return(
        <div className="Draw-container">
            <div style={{ 
                    margin: 15
                 }} className='Color-panel'>
                <ColorPiker colorSelected={colorSelected} handleChangeComplete={handleChangeComplete} />
            </div>
            <div className='DrawPanel'>
                <DrawingPanel colorSelected={colorSelected} />
            </div>
        </div>
    );
};

export default DrawView;