import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    console.log('going to redirect now');
    navigate('/about');
  };

  if (status === 404) {
    return <Navigate to='/notfound ' />;
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick} className='ui button'>
        Redirect Button
      </button>
    </div>
  );
}

export default Post;
