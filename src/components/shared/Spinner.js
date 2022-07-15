import React from 'react'
import spinner from '../assets/Spinner-2.gif'

function Spinner() {
  // margin: auto  (show in middle)
  // display: block (so margin actually works)
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}

export default Spinner
