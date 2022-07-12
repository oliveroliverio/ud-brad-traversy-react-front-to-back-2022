import React, { useState } from 'react'


function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item text')

  const handleClick = () => {
    // refactor so setRating takes in a function when need to know the previous state
    setRating((prev) => {
      return prev + 1
    }) 
  }

  return (
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default FeedbackItem
