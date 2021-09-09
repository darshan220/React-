import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import UsePost, { Person } from './UsePost';

const Show:FunctionComponent = () => {

    const post:Person[] = UsePost()
    return (
        <div>
            <h1>Post Title</h1>

            {post.length > 0 && ( 
                <ul>
                    { post.map((p)=> ( <li key={p.id}>{p.title}</li> ))}
                </ul>
                )}
        </div>
    );
    
}

export default Show;