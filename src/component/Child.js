import React from 'react'

function Child(props){
    return(
        <div>   
            <br/><button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}

export default Child