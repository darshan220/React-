import React, { useEffect, useState } from 'react';
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id,setId] = useState(1)  
    const [idclick,setIdClick] = useState(1)

    const handleClick = () => {
        setIdClick(id)
    }

    useEffect (()=> {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idclick}`)
        .then(res=> 
            {
                console.log(res);
                setPost(res.data)
            })
        .catch(err=> {
            console.log(err);
        })
    },[idclick]) 

    return ( 
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => (<li key={post.id}>{post.title}</li>))
                }
            </ul> */}
        </div>
    );
}

export default DataFetching;