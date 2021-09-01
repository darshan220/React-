//Used State method to change text by cliking button  
import React, {Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: "Hello"
        }
    }

    changeMessage(){
        this.setState({
            message:'Peter'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Click</button>
            </div>
        ) 
    }
}

export default Message