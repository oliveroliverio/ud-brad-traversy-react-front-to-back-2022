import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';

// global level state vs component level state

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    // if (window.confirm("Are you sure you want to delete?")) {
    //   // set feedback to new array filtering the item with the id that user clicked on
    //   // keep all the items that DON"T match the id (clicked)
    //   setFeedback(feedback.filter((item) => item.id !== id));
    // }
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
  };
  return (
    <>
      <Header text='hello world'></Header>
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList
          handleDelete={deleteFeedback}
          feedback={feedback}
        ></FeedbackList>
      </div>
    </>
  );
}
export default App;
