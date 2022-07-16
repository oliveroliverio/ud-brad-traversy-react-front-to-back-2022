import { useState } from 'react'
import React from 'react'

function UserSearch() {
	const [text, setText] = useState('')
	const handleChange = (e) => setText(e.target.value)

	return (
		// in grid: search form + button -> one item. then clear button
		// grid-cols-1: small screen
		<div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			{/* Div containing form */}
			<div>
				<form action=''>
					<div className='form-control'>
						<div className='relative'>
							<input
								type='text'
								className='w-full pr-40 bg-gray-200 input input-lg text-black'
								placeholder='search'
								value={text}
								onChange={handleChange}
							/>
							<button
								type='submit'
								className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{/* Div containing clear button */}
			<div>
				<button className='btn btn-ghost btn-large'>Clear</button>
			</div>
		</div>
	)
}

export default UserSearch
