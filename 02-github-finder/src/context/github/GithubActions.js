import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// create instance of axios
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// searchUsers
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  const response = await github.get(`/search/users?${params}`)
  return response.data.items
}

// Get user and respos
export const getUserAndRepos = async (login) => {
  // since requesting multiple things, use promise.all, and use array to make a request
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}
