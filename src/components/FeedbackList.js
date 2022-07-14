import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {/* feedback now coming from FeedbackContext, NOT app.js file */}
        {feedback.map((i, index) => (
          <motion.div
            key={i.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={i.id}
              item={i}
              handleDelete={handleDelete}
            ></FeedbackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //Without animation
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((i, index) => (
  //       <FeedbackItem
  //         key={i.id}
  //         item={i}
  //         handleDelete={handleDelete}
  //       ></FeedbackItem>
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
