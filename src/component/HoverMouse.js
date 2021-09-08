import React, { useState } from 'react';
import UseEffect from './UseEffect';

function HoverMouse(props) {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle display</button>
            {display && <UseEffect/>}
        </div>
    );
}

export default HoverMouse



