import React, { useState } from 'react';

function ArrayUseState() {

    const data = [
    {
        id: 0, name: 'darshan', age:22
    },
    {
        id: 1, name: 'Hiren', age:22
    },
    {
        id: 2, name: 'Hitesh', age:30
    },
    {
        id: 3, name: 'sahil', age:28
    },
]
    const [Arr, SetArray] = useState(data)
    
    const clear = () => {
        SetArray([]);
    }

    return (
    
        <div>
            {
                Arr.map((value)=> {
                    return <h1 key={value.id}>Name: {value.name} & Age: {value.age}</h1>
                })
            }
            <button onClick={clear}>Clear</button>
        </div>
    );
}

export default ArrayUseState;