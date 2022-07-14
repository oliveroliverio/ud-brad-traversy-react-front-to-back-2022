import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
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

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
