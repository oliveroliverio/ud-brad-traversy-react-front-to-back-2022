import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers, clearUsers } from '../../context/github/GithubActions'

//stopped at lec 67

function UserSearch() {
  const [text, setText] = useState('')

  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = async (e) => {
    e.preventDefault()
    // validation
    if (text === '') {
      setAlert('Please enter something (now from alert context)', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const users = await searchUsers(text)
      dispatch({ type: 'GET_USERS', payload: users })
      setText('')
    }
  }

  return (
    // in grid: search form + button -> one item. then clear button
    // grid-cols-1: small screen
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      {/* Div containing form */}
      <div>
        <form onSubmit={handleSubmit}>
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
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* this came from Github context */}
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
            className='btn btn-ghost btn-large'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
