import React from 'react'
import Header from './components/Header'

function App() {
	return (
		<>
			<Header bgColor='green' textColor='purple' text='hello world'></Header>
			<div className='container'>
				<h1>My app</h1>
			</div>
		</>
	)
}
export default App
