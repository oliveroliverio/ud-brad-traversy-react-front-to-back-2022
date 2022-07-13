import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

// global level state vs component level state

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // set feedback to new array filtering the item with the id that user clicked on
      // keep all the items that DON"T match the id (clicked)
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header text="hello world"></Header>
      <div className="container">
        <h1>My app</h1>
      </div>
      <FeedbackList
        handleDelete={deleteFeedback}
        feedback={feedback}
      ></FeedbackList>
    </>
  );
}
export default App;
