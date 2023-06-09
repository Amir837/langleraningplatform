// 1st changeColor function with useState hook

import React, { useState } from 'react';

// 2nd color indicator shows when color value is changed
var colorIndicator3: string = 'red';

function ColorText() {
    const [color, setColor] = useState<string>('red');

    var colorIndicator2: string;

    colorIndicator2 = color;

    function changeColor() {
        if (color === 'red') {
            setColor('green');
        }
        else {
            setColor('red');
        }
        //

        colorIndicator3 = color;
    }

    return (
        <div>
            <div style={{ color: color }}>Text</div>
            <div>Current color: {color}</div>
            <div>Color indicator 2: {colorIndicator2}</div>
            <div>Color indicator 3: {colorIndicator3}</div>
            <button onClick = {changeColor}>Change Color</button>
        </div>
    );
}

export {ColorText};