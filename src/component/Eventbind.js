import React, { Component } from 'react'

class EventBind extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            message:'hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'Good bye'
        })
        console.log(this);
    }

    render(){
        return (
            <div>
                <br/><div>{this.state.message}
                {/* <button onClick={this.clickHandler.bind(this)}>Change State</button> */}
                {/* <button onClick={() => this.clickHandler()}>Change State</button> */}
                <button onClick={this.clickHandler}>Change State</button>
            </div>
            </div>
        )
    }
}


export default EventBind