import React, { Component } from 'react'

class LifeCycleB extends Component{

    constructor(props){
        super(props)
        this.state={
            name:'Darshan'
        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStsteFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount');
    }

    render(){
        console.log('LifeCycleB render')
        return(
            <div>
                LifeCycle B
            </div>
        )
    }    

}

export default LifeCycleB