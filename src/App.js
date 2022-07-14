import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';

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
    // here's the different part, you want to add to the array, not overwrite
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header text='hello world'></Header>
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                <FeedbackStats feedback={feedback}></FeedbackStats>
                <FeedbackList
                  handleDelete={deleteFeedback}
                  feedback={feedback}
                />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />}>
            About Page
          </Route>
        </Routes>
      </div>
      <AboutIconLink></AboutIconLink>
      <Card>
        <NavLink to='/' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
          About
        </NavLink>
      </Card>
    </Router>
  );
}
export default App;
