//Used Function component 
//Props component

import React from 'react'

// function Greet(){
//     return <h1>Hello Darshan</h1>
// }

const Greet = (props) => {
    console.log(props);
    return  (
    
    <div>
        <h1>I am {props.name}</h1>
        {props.children}
    </div>
)
}


export default Greet