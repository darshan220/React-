import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Person {
    userId: number,
    id: number,
    title: string,
    body: string
}

const UsePost = ():Person[] => {

    const [post,setPost] = useState<Person[]>([])
  
    const getPosts = () => {
        
        axios.get<Person[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            .then(res => {
                console.log(res.data);
                setPost(res.data)
            })
            .catch(err=> {
                console.error(err);
            })
    }

    useEffect(()=> {
        getPosts()
    },[])

    return post 
}

export default UsePost;