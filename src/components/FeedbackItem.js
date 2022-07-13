import { useState } from "react";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  const [reverse, setReverse] = useState(true)

  const clickHandler = () => {
    setReverse(!true)
  }

  return (
    <Card reverse={reverse}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={clickHandler}>toggle</button>
    </Card>
  );
}

export default FeedbackItem;
