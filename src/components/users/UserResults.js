import { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/github/GithubContext'

// refactor UserResults to bring in

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext)
  useEffect(() => {
    // below was just for testing, this useEffect will be used for searching
    fetchUsers()
  }, [])

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}
export default UserResults
