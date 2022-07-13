import React, { useState }  from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

// global level state vs component level state

function App() {
	const [feedback, setFeedback] = useState()
	return (
		<>
			<Header text='hello world'></Header>
			<div className='container'>
				<h1>My app</h1>
			</div>
			<FeedbackItem></FeedbackItem>
		</>
	)
}
export default App 
