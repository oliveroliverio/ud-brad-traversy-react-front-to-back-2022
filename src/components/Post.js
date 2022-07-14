import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const params = useParams();
  return (
    // now I want to show the slug or ID of the post
    // a more common use case is have the slug/id passed in programmatically {slug/id} then make a request to a backend to get that specific post
    <div>
      <h1>Post {params.slug}</h1>
    </div>
  );
}

export default Post;
