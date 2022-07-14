import React, { useState } from "react";
import Card from "./shared/Card";
// for each input in form, you need state
function FeedbackForm() {
  const [text, setText] = useState("");

  // set as arrow function that takes in an event paramter
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card reverse={false}>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <button className="ui button" type="submit">
            Send
          </button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
