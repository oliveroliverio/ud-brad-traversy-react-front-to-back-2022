import { createContext, useState } from 'react';

const FeedbackContext = createContext();

// need to create a providor and wrap all the prop passing into it similar to how we wrapped everything in Router

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'default item from context',
      rating: 10,
    },
  ]);
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {/* chilren are the components we wrap around FeedbackProvider 
     Any values like state or fucntions to use (used to be props) would be in value*/}
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
