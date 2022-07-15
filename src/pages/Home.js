function Home() {
  return (
    <>
      <h1 className='text-6xl'>Welcome</h1>
      {process.env.REACT_APP_REACT_GITHUB_TOKEN}
    </>
  )
}
export default Home
