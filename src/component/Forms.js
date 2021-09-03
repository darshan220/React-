import React, { Component } from 'react'

class Form extends Component
{

    constructor(props)
    {
        super(props)
        this.state=
        {
              username: '',
              comments: '',
              topic: 'html'
        }
    }

    handleUserNameChange = (event) => {

        this.setState({
            username : event.target.value
        })

    }

    handleCommentChange = (event) => {

        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange =(event) =>{

        this.setState({
            topic: event.target.value
        })
    }
     
    handleSubmit =(event) =>{

        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render()
    {
        return(
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName: </label>
                <input type="text" value={this.state.username} onChange={this.handleUserNameChange}></input>
            </div>
            <br/>
            <div>
                <label> Comments: </label>
                <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
            </div>
            <br/>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="html">HTML</option>
                    <option value="javascript">JAVASCRIPT</option>
                    <option value="react">REACT</option>
                </select>
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
        )
    }
}


export default Form