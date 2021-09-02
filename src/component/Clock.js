import React from 'react'
import ReactDOM from 'react-dom'

function Clock(props) {

    return(
        <div>
            <h1>Time:{props.date.toLocaleTimeString()}</h1>
        </div>
    );
}

// function tick(){
//     return(
//         <div>
//             <Clock date={new Date()}/>
//         </div>
//     )
// }

function tick(){
  
        ReactDOM.render( <Clock date={new Date()}/>, document.getElementById('clock'))
}

setInterval(tick,1000);

// export default Clock