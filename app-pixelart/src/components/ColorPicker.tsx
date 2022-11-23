import React, { useState } from 'react';
import { CirclePicker, ColorResult } from 'react-color';

interface Props {
    handleChangeComplete: (color: ColorResult) => void,
    colorSelected: string
}
function ColorPiker({ handleChangeComplete, colorSelected }: Props){
    return (
        <div>
            <CirclePicker
                color={colorSelected}
                onChangeComplete={handleChangeComplete}
            />
        </div >
    );
}

export default ColorPiker;