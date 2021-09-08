// import React, { useState } from 'react';
// import jsonfile from'jsonfile';
// import fs from 'fs'
// import {writeJsonFile} from 'write-json-file';

// function Registration(props) {
    

//     const [user, setUser] = useState({
//         firstName:'',
//         email:'',
//         number:''
//     })


//     var file = './data.json'
//     var array = [{ name: 'abc', email: 'abc@gmail.com', number: 123}]

//    const sendData = () => {
//         fs.writeFile(file,JSON.stringify(array), err=>
//         {
//             if(err)
//             {
//                  console.log('Error  writing file: ',err);
//             }
//         })
//     }


//         // const sendData = (e) => {
//         //     e.preventDefault();
//         //     const info = {user}

//         //     fetch('http://localhost:3001/',{
//         //         method:'POST',
//         //         headers:{"Content-Type": "application/json"},
//         //         body:JSON.stringify(info)
//         //     }).then(()=>{
//         //         console.log('new info added');
//         //         console.log(user);
//         //     })
//         // }



//     return (
//         <div>
//             <form onSubmit={sendData}>
//                 <label htmlFor="fname">FirstName: </label>
//                 <input type='text' id='fname' value={user.firstName} 
//                     onChange ={(e) => setUser({...user,firstName: e.target.value})}/>

//                 <label htmlFor="email">Email: </label>
//                 <input type='email' id='email' value={user.email} 
//                     onChange ={(e) => setUser({...user,email: e.target.value})}/>

//                 <label htmlFor="number">Number: </label>
//                 <input type='number' id='num' value={user.number} 
//                     onChange ={(e) => setUser({...user,number: e.target.value})}/>

//                 <button id='btn'>Send Data</button>
//             </form>
//         </div>
//     );
// }

// export default Registration;