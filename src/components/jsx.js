//JSX method 

import React from 'react'
import ReactDOM from 'react-dom';

function formatName(user){
    return user.firstname + ' ' + user.lastname;
}

const user = {
    firstname: 'sanji',
    lastname: 'vinsmoke',
}

let element = (

    <h1>hello {formatName(user)}!!</h1>
    // <h1>hello !!</h1>

)

ReactDOM.render(element,document.getElementById('root2'))

    //---------------------------//
    //without using JSX 
    
    // return React.createElement(
    //     'div',
    //     {className: 'hello'},
    //     React.createElement('h1',null,'React example'))


// export default element
