import axios from "axios";

const initialState = [
    // {
    //     id:0,
    //     name:"darshan",
    //     number:1234567890,
    //     email:"dan@gmail.com"
    // },
    // {
    //     id:1,
    //     name:"test name",
    //     number:9876543210,
    //     email:"text123@gmail.com"
    // },
    axios.get('http://localhost:3000/data')
     .then((response)=> {
         console.log(response.data);
     })
];

const ContactReducer = (state =initialState,action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state,action.payload]
            return state
        break;

        case "UPDATE_CONTACT":
            const updateState = state.map(contact=> contact.id === action.payload.id? action.payload: contact)
            state = updateState
            return state
        
        case "DELETE_CONTACT":
            const filterContact = state.filter(contact=> contact.id !== action.payload && contact)
            state= filterContact;
            return state 
        default:
        return state
    }
}

export default ContactReducer