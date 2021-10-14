import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find((contact) => contact.email === email);
    const checkNumber = contacts.find((contact) => contact.number === number);

    console.log(checkEmail);
    console.log(checkNumber);

    if (checkEmail) {
      return toast.error("Email already Exists!!");
    }

    if (checkNumber) {
      return toast.error("Number already Exists!!");
    }

    if (!email || !number || !name) {
      return toast.warning("Please Fill up your data");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    axios.post('http://localhost:3000/data',{
      "name": `${data.name}`, 
      "number": `${data.number}`,
      "email": `${data.email}`,
    })
    .then(function(response){
      dispatch({ type: "ADD_CONTACT", payload: data });
      toast.success("Student added successfully!");
      history.push("/");
      console.log(response);
    })
    // console.log(data);
  };

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center my-4">
        <h1 className=" text-center">Add Student</h1>
        <div className="col-md-6 shadow max-auto p-4 mb-4 my-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group p-2 mb-4">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group p-2 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group d-flex justify-content-center">
              <input
                type="Submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
