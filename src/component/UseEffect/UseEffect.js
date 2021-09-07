import React, { useEffect, useState } from 'react';

function UseEffect() {

    const [count,setCount] = useState(0)

    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Click {count} times</button>
            {
                 useEffect(()=> {
                    document.title = `You clicked ${count} times`
                })
            }
        </div>
    );

}

export default UseEffect