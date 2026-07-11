import React from 'react';

const PostDetailsPage = async ({ params }) => {
    
    const { postId } = await params;

    
   

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json()



    return (
        <div>
            <h1>{post.title}</h1> 
            <h1>{post.body}</h1> 
        </div>
    );
};

export default PostDetailsPage;