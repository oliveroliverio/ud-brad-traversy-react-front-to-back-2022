import React from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  return (
    <Card reverse={false}>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input type="text" placeholder="Write a review" />
          <button className="ui button" type="submit">
            Send
          </button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
