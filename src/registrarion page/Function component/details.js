import React, { useEffect, useState } from 'react';

function Details() {

    const [user,setUser] = useState({
        firstName: '',
        lastName:'',
        age:'',
        gender:'',
    })
    
    const OnSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        alert(`Thank you for registration: ${user.firstName} ${user.lastName} `)
    }

    useEffect(()=> {
        // console.log("successfully Registered");
        var a = document.forms['form']['_fname'].value;
        var b = document.forms['form']['_lname'].value;
        var c = document.forms['form']['_age'].value;
        // console.log(a,b,c);

        if(a === null || a === "", b === null || b === "", c === null || c === "")
        {
            alert("Enter your information")
        }
        else{
            alert(`Thank you for registration: ${this.state.fname} ${this.state.lname} `)
        }
    },[])

    const deleteEvent = () => 
    {
        var d = document.getElementById('FirstName')
        d.document.getElementById('LastName')
        d.document.getElementById('Age')
        d.remove();
    }

    return (
        <div> 
         <form name="form" id="info">
            <label htmlFor='fname'>Enter your First name:</label>
                    <input 
                        type="text" 
                        id='FirstName' 
                        value={user.firstName} 
                        onChange={(e)=> setUser({...user,firstName: e.target.value})} 
                        name="_fname"/>
                    <br></br>

                    <label htmlFor='lname'>Enter your Last name:</label>
                    <input 
                        type="text" 
                        id='LastName' 
                        value={user.lastName} 
                        onChange={(e)=> setUser({...user,lastName: e.target.value})} 
                        name="_lname"/>
                    <br></br>

                    <label htmlFor="age">Enter your age:</label>
                    <input 
                        type="text" 
                        id="Age" 
                        value={user.age} 
                        onChange={(e)=> setUser({...user,age: e.target.value})} 
                        name="_age"/>
                    <br></br>

                    <label htmlFor="gender">Gender: </label>
                    <select 
                        value={user.gender} 
                        onChange={(e)=> setUser({...user,gender: e.target.value})} 
                        name="_gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option> 
                    </select>

                    <button type="submit" id="" onClick={(e)=> OnSubmit(e,user)}>Submit</button>
                    <button type="delete" id="btndelete" onClick={(e)=> deleteEvent(e,user)}>Delete</button>
            </form>
        </div>
    );
}

export default Details;