import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

// for each input in form, you need state
function FeedbackForm() {
	const [text, setText] = useState('')
	const [rating, setRating] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const { addFeedback, feedbackEditState, updateFeedback } =
		useContext(FeedbackContext)

	useEffect(() => {
		// check to see if something in feedbackEditState first
		if (feedbackEditState.edit === true) {
			setBtnDisabled(false)
			setText(feedbackEditState.item.text)
			setRating(feedbackEditState.item.rating)
		}
	}, [feedbackEditState])

	// set as arrow function that takes in an event paramter
	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null)
			// see if text contains something and is at least 10 characters
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true)
			setMessage('Entry needs to be more than 10 characters')
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			}
			if (feedbackEditState.edit === true) {
				updateFeedback(feedbackEditState.item.id, newFeedback)
			} else {
				addFeedback(newFeedback)
			}

			setText('')
		}
	}
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
	)
}

export default FeedbackForm
//
