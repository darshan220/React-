//In this program Mouse coordinate will change when user hover mouse 
import React, { useEffect, useState } from 'react';

function UseEffect(props) {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log('useEffect Called');
        window.addEventListener('mousemove', logMousePosition)

        return() => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>
            Hooks X - {x} Y - {y}        
        </div>
    );
}

export default UseEffect;