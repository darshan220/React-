import React from 'react'

function  FunctionClick()
{
    function clickHandler(){
        console.log("Button Clicked");
    }

    return(
        <div>
            <br/><button onClick={clickHandler}>Click Event</button>
        </div>
    )
}

export default FunctionClick

