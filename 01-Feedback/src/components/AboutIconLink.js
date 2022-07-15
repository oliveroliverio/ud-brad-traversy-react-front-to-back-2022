import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    // this class positions it to bottom left corner
    <div className='about-link'>
      {/* more advanced link to: query params */}
      <Link
        to={{
          pathname: '/about',
          search: '?sort=name',
          hash: '#hello',
        }}
      >
        <FaQuestion size={30}></FaQuestion>
      </Link>
    </div>
  );
}

export default AboutIconLink;
