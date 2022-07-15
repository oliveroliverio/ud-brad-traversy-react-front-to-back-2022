import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

// need to create a providor and wrap all the prop passing into it similar to how we wrapped everything in Router

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData)

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	const [feedbackEditState, setFeedbackEditState] = useState({
		item: {},
		// by default, false, if clicked, set to true (edit mode)
		edit: false,
	})

	const deleteFeedback = (id) => {
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
		console.log(id, updItem)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEditState,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{/* chilren are the components we wrap around FeedbackProvider
     Any values like state or fucntions to use (used to be props) would be in value*/}
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
