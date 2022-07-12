import React from 'react'

function App() {
	const title = 'Blog post!'
	const body = 'This is my blog post!'

	const comments = [
		{ id: 1, text: 'comment one' },
		{ id: 2, text: 'comment two' },
		{ id: 3, text: 'comment three' },
	]

	const loading = false
	if (loading) return <h1>loading...</h1>

	const showComments = true

	const commentBlock = (
		<div className='comments'>
			<h3>Comments ({comments.length})</h3>
			<ul>
				{comments.map((comment, index) => (
					<li key={index}>{comment.text}</li>
				))}
				<li></li>
			</ul>
		</div>
	)

	return (
		<>
			<h1>{title.toUpperCase()}</h1>
			<p>{body}</p>

			{showComments && commentBlock}
		</>
	)
}
export default App
