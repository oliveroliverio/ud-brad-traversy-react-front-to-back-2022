import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'

// create environment variable accessible anywhere (github API token)

function App() {
  return (
    <GithubProvider>
      {/* // emmet: .flex.flex-col.justify-between.h-screen // flex.flex-col: create
      flex column, // justify-between: align space in between each thing
      (navbar, main content, footer) // h-screen: take up entire screen height
      vertically */}
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          {/* have main content in a container so it's not all the way to the side */}
          {/* emmet: main.container.mx-auto.px-3.pb-12 */}
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  )
}
export default App
