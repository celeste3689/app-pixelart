import React, { useRef, useState } from "react";

interface Props {
    colorSelected: string
}

function DrawingPanel({ colorSelected }: Props){
    const widthPanel = 20;
    const heightPanel = 20;
    const sizePixel = 480 / widthPanel;




    const canvasRef = useRef<HTMLCanvasElement>(null!)
    function getCursorPosition(event: React.MouseEvent<HTMLCanvasElement>) {
        if(!canvasRef.current) return;

        const handleClick = (event: MouseEvent) => {
            console.log('Submit button clicked!');
        };

        console.log(event);
        const rect = canvasRef.current.getBoundingClientRect()
        const y = event.clientY - rect.top
        const x = event.clientX - rect.left
        console.log("x: " + x + " y: " + y)
        const pixelEnX = Math.floor(x / sizePixel) * sizePixel;
        const pixelEnY = Math.floor(y / sizePixel) * sizePixel;

        const ctx = canvasRef.current.getContext("2d");
        if(!ctx) return;
        ctx.fillStyle = colorSelected;
        ctx.fillRect(pixelEnX, pixelEnY, sizePixel, sizePixel)
    }
    
    
    return <canvas ref={canvasRef} onClick={getCursorPosition} width={480} height={heightPanel*sizePixel}
    style={{ border: '1px solid' }}    />
}

export default DrawingPanel;