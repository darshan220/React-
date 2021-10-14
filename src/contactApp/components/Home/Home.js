import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

function Home() {
    
    const contacts = useSelector((state) => state)
    const dispatch = useDispatch()

    const deleteContact = (id) => {
        dispatch({type: "DELETE_CONTACT",payload:id})
        toast.success("contact deleted successfully")
    }
    
    return (
        <div className="container ">  
                <div className="row d-flex justify-content-center">
                    <div className="col-md-20 text-right d-flex justify-content-end pt-5">
                        <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
                    </div>
                    <div className="col-md-6 max-auto r">
                        <table className="table table-hover">
                            <thead className="text-white bg-dark text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // axios.get('http://localhost:3000/data')
                                    // .then((response)=> {
                                    // })
                                    // console.log(response.data);
                                    contacts.map((contact,id)=>(
                                        <tr key={id}>
                                            <td>{id+1}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.number}</td>
                                            <td className="d-flex justify-content-around">
                                                <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary">Edit</Link>
                                                <button type="delete" onClick={()=> deleteContact(contact.id)} className="btn btn-small btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
}

export default Home;