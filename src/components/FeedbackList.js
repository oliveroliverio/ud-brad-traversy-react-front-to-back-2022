import React from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ feedback }) {
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
