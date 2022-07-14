import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    // this class positions it to bottom left corner
    <div className='about-link'>
      {/* <a></a> tags are fine when linking offsite, but not for internal pages */}
      <Link to='/about'>
        <FaQuestion size={30}></FaQuestion>
      </Link>
    </div>
  );
}

export default AboutIconLink;
