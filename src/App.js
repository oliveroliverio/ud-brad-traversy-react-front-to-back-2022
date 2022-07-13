import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

// global level state vs component level state

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log("App", id);
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
