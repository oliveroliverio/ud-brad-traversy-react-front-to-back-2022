import React from 'react'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
  return (
    <>
      <div>RepoLIst</div>
      {repos.map((i) => {
        return <div>{i.name}</div>
      })}
    </>
  )
}

export default RepoList
