import React from 'react';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route
          path='/show'
          element={
            <>
              <h1>Redirect to nested elements.</h1>
              <p>
                Useful if there's something specific you want to use when user
                gets to localhost:3000/post/show
              </p>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default Post;
