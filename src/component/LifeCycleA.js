import React, { Component } from 'react'
import LifeCycleB from './LifiCycleB';

class LifeCycle extends Component{

    constructor(props){
        super(props)
        this.state={
            name:'Ravan'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStsteFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }

    render(){
        console.log('LifeCycleA render')
        return(
            <div>
                LifeCycle A
                <LifeCycleB/>
            </div>
        )
    }    

}

export default LifeCycle