import React, { useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditContact(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state)=> state)
 const dispatch = useDispatch()
  const currentContact = contacts.find((contact)=> contact.id === parseInt(id))
  
  useEffect(()=>{
    if(currentContact){
      setName(currentContact.name)
      setEmail(currentContact.email)
      setNumber(currentContact.number)
    }
  },[currentContact])

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find((contact) => contact.id !== id && contact.email === email);
    const checkNumber = contacts.find((contact) => contact.id !== id && contact.number === number);

    console.log(checkEmail);
    console.log(checkNumber);
      
    // if(checkEmail)
    // {
    //   return toast.error("Email already Exists!!")
    // }

    // if(checkNumber)
    // {
    //   return toast.error("Number already Exists!!")
    // }

    if (!email || !number || !name) {
      return toast.warning("Please Fill up your data")
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    } 

    dispatch({type: "UPDATE_CONTACT" , payload: data})
    toast.success("Student updated successfully!")
    // history.push('/')
    // console.log(data);

  };

  return (
    <div className="container ">
      {currentContact? (
      <>
      <div className="row d-flex justify-content-center my-4">
        <h1 className=" display-3 text-center">Edit Student {id}</h1>
        <div className="col-md-6 shadow max-auto p-4 mb-4 my-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2 mb-4">
              <input 
                className="form-control"
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} />
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
                type="number"
                placeholder="Phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group d-flex justify-content-evenly">
              <input
                type="Submit"
                value="Update Student"
                className="btn btn-block btn-dark"
              />
              <Link to="/" className="btn btn-danger mr-5">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      </>
        ) : (
          <h1 className="display-3 my-5 text-center">
              StudentContact with id {id} not exists 
          </h1>
        )
      }
    </div>
  );
}

export default EditContact;
