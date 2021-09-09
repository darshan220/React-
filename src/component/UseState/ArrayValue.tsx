import React, { useState } from 'react';

function ArrayValue() {

    const [arr,setArr] = useState<number[]>([])
    const [name,setName] = useState<string>('darshan')
    
    return (
        <div>
            <button onClick={()=> setArr([...arr,arr.length + 1])}>Add to array</button>
            {JSON.stringify(arr)}

        <div>
            <button onClick={()=> setName("patel")} >Set Name</button>
            {JSON.stringify(name)}
        </div>

        </div>
    );
}

export default ArrayValue;