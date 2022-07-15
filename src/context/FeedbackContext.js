import { createContext, useState, useEffect } from 'react'
// don't need this anymore, going to get from json-server
// import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

// need to create a providor and wrap all the prop passing into it similar to how we wrapped everything in Router

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  // need useEffect because we want to run this right when the component loads
  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()
    setFeedback([data, ...feedback])
  }

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    // by default, false, if clicked, set to true (edit mode)
    edit: false,
  })

  const deleteFeedback = async (id) => {
    await fetch(`/feedback/${id}`, { method: 'DELETE' })
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEditState({
      item,
      edit: true,
    })
  }

  // update feedback item
  const updateFeedback = (id, updItem) => {
    // As soon as it's edited, call feedback array with newly updated item.
    // Take current feedback array, call map, takes in an arrow function,
    // For each feedbcack were calling 'item', is this item 'id' the same that was clicked?
    // If yes, then spread operate each item and updated item, else (if it doesn't match the id that the user clicked, then just return current item)
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEditState,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {/* chilren are the components we wrap around FeedbackProvider
     Any values like state or fucntions to use (used to be props) would be in value*/}
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
