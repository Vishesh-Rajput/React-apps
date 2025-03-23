import React, { useState } from "react";


function ColorPicker() {
    const [color, setcolor] = useState("#ffffff");

    function handleColor(e) {
        setcolor(e.target.value);
    }
    return (<>

        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color : {color}</p>

            </div>
            <label type="color"></label>
            <input type="color" value={color} onChange={handleColor} />

        </div>
    </>);

}

export default ColorPicker