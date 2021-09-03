import React, { Component } from 'react'


class Composition extends Component{

    render(){
        return(
            <div>
            
                <h2>Student Name: {this.props.name}</h2>
                <h3>EnRoll no: {this.props.roll}</h3>
                <h4>Class: {this.props.class}</h4>
                <h5>Email: {this.props.email}</h5>
            
            </div>
        )
    }
}

export default Composition

rsf