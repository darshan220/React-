import React, { useState } from 'react';

function UseState() {

    const i= 0;
    const [count,setCount]= useState(i)
    
    const increMent = () => {

        for(let i=0;i<5;i++)
        {
            setCount(prevCount => prevCount + 1)
        }
        
    }

    return (
        <div>
                count: {count}
                <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increment</button>
                <button onClick={()=> setCount(prevCount => prevCount - 1)}>Decrement</button>
                <button onClick={()=> setCount(i)}>Reset</button>

                {/* Increment value by using function */}
                <button onClick={increMent}>Increment 5</button>
        </div>
    );
}

export default UseState;