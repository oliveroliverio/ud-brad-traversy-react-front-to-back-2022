import { useEffect, useState } from 'react'

function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchUsers()
  }, [])

  // create fetchUsers async/await function to run within useEffect
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })

    const data = await response.json()
    setUsers(data)
    console.log(users)
    setLoading(false)
  }
  return <div>UserResults</div>
}
export default UserResults
