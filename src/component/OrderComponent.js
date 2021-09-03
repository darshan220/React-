//Lifiting State up

import React, { Component } from 'react'


class OrderComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            quantity:'',
            address: ''
        }
    }

    orderInfoChanged=(event)=>{
        this.setState({
            quantity:event
        })
    }
    addressChanged=(event)=>{
        this.setState({
            address:event
        })
    }

    render(){
        return(
            <div>
                <h1>Product order screen..</h1>
                <ProductComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged}></ProductComponent>
                <AddressComponent address={this.state.address} onAddressChange={this.addressChanged}></AddressComponent>
                <SummaryComponent quantity={this.state.quantity}  onQuantityChange={this.orderInfoChanged} address={this.state.address}></SummaryComponent>
                
            </div>
        )
    }
}

class ProductComponent extends Component{

    constructor(props){
        super(props)
        
    }

    handleChange =(event) => {
        this.props.onQuantityChange(event.target.value)
    }

    render(){
        return(
            <div>
                <h2>Product Information:</h2>
                <p>
                    <label>Product Name:
                        <select>
                            <option value="P-1">A</option>
                            <option value="P-2">B</option>
                            <option value="P-3">C</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
                </p>
            </div>
        )
    }
}

class AddressComponent extends Component{

    constructor(props){
        super(props)
        
    }

    handleChange = (event) =>
    {
        this.props.onAddressChange(event.target.value)
    }

    render(){
        return(
            <div>
                <h2>Address Information:</h2>
                <p>
                    <label>Address: <textarea value={this.props.address} onChange={this.handleChange}></textarea></label>
                </p>
            </div>
        )
    }
}

class SummaryComponent extends Component{

    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div>
                <h2>Summary Infromation: </h2>
                <p>
                    <label>Product Name: <b>A</b></label>
                </p>
                <p>
                    <label>Enter Quantity: <input type="text" value={this.props.quantity}></input></label>
                </p>
                <p>
                    <label>
                        Address: <b>{this.props.address}</b>
                    </label>
                </p>
                <button>Place Order</button>
            </div>
        )
    }
}


export default OrderComponent