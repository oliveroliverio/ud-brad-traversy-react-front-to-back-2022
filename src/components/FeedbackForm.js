import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
// for each input in form, you need state
function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  // set as arrow function that takes in an event paramter
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
      // see if text contains something and is at least 10 characters
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Entry needs to be more than 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    // since it's a form submit need to prevent default and refreshing page
    e.preventDefault();
    // double checking text requirements since there's ways around it in chrome
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      // note, the above is shorthand for
      // const newFeedback = {
      //   text: text,
      //   rating: rating,
      // }
      console.log(newFeedback);
    }
  };
  return (
    <Card reverse={false}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        <div className='input-group'>
          <input
            value={text}
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
          />
          <Button isDisabled={btnDisabled} type='submit'>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
//
