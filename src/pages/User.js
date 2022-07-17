import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import { useParams } from 'react-router-dom'

import React from 'react'

function User() {
  const { getUser } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])
  return <div>USER</div>
}

export default User
