import React, {Component} from 'react'

class form extends Component {

    constructor (props){
        
        super(props)

            this.state =
            {   
                fname: '',
                lname: '',
                age: '',
                gender: '',
            }
    }
    
    handleChangeFName = (event) => {
        this.setState ({ fname: event.target.value})
    }

    handleChangeLName = (event) => {
        this.setState ({ lname: event.target.value})
    }

    handleChangeAge = (event) => {
        this.setState ({ age: event.target.value})
    }

    handleChangeGender = (event) => {
        this.setState ({ gender: event.target.value})
    }

    // onSubmit = (event) => {
    //     event.preventDefault()
    //     alert(`Thank you for registration: ${this.state.fname} ${this.state.lname} `)
    //     const data = {Fname: this.state.fname, Lname: this.state.lname, Age: this.state.age, Gender: this.state.gender}
    //     console.log(data);
    // }

    onSubmit = () => 
    {
        var a = document.forms['form']['_fname'].value;
        var b = document.forms['form']['_lname'].value;
        var c = document.forms['form']['_age'].value;
    
        // console.log(a,b,c);
        const data = {Fname: this.state.fname, Lname: this.state.lname, Age: this.state.age, Gender: this.state.gender}
        console.log(data);

        if(a === null || a === "", b === null || b === "", c === null || c === "")
        {
            alert("please fill up the Required Field")
        }
        else{
            alert(`Thank you for registration: ${this.state.fname} ${this.state.lname} `)
        }
    }


    deleteEvent = () => {
        var d = document.getElementById('FirstName')
        d.document.getElementById('LastName')
        d.document.getElementById('Age')
        d.remove();
    
    }

    render(){

        return(
            <div>
                <form name="form" id="info">
                    
                    {/* <label for='id'>Id: </label>
                    <input type='age' id="id" value={this.state.id} onChange={this.handleChangeId} name="_id"/>
                    <br></br> */}

                    <label htmlFor='fname'>Enter your First name:</label>
                    <input type="text" id='FirstName' value={this.state.fname} onChange={this.handleChangeFName} name="_fname"/>
                    <br></br>

                    <label htmlFor='lname'>Enter your Last name:</label>
                    <input type="text" id='LastName' value={this.state.lname} onChange={this.handleChangeLName} name="_lname"/>
                    <br></br>

                    <label htmlFor="age">Enter your age:</label>
                    <input type="text" id="Age" value={this.state.age} onChange={this.handleChangeAge} name="_age"/>
                    <br></br>

                    <label htmlFor="gender">Gender: </label>
                    <select value={this.state.gender} onChange={this.handleChangeGender} name="_gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option> 
                    </select>

                    <button type="submit" id="" onClick={this.onSubmit}>Submit</button>
                    <button type="delete" id="btndelete" onClick={this.deleteEvent}>Delete</button>
                </form>
            </div>
        )
    }
}

export default form 