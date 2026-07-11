import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json()
   
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
        <Link href={`/posts/${post.id}`}>
          <button className="btn btn-info">Show details</button>
        </Link>
          </div>
        ))}
      </div>
    );
};

export default PostsPage;