import React from "react";

export default function FeedbackList({ feedback }) {
  // conditionally show feed back if empty case
  // if no feedback or
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>
  }

  return <div className='feedback-list'>
    {feedback.map((i, index) => (
      <div>{i.rating}, {index}</div>
    ))}
  </div>;
}
