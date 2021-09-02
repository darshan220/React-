import React, { Component } from "react";

class ClassClick extends Component {


    ClassHandler(){
        console.log('Click the button');
    }

    render(){
        return (
            <div>
                <br/><button onClick={this.ClassHandler}>CLick me </button>
            </div>
        )
    }
}

export default ClassClick