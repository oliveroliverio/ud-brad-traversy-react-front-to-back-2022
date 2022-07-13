import React from "react";
import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({ feedback }) {
  // conditionally show feed back if empty case
  // if no feedback or feed back is zero

  // Note right now, data is hardcoded 
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>
  }

  return <div className='feedback-list'>
    {feedback.map((i, index) => (
      <FeedbackItem key={i.id} item={i}></FeedbackItem>
    ))}
  </div>;
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    
    })
  )
}

export default FeedbackList