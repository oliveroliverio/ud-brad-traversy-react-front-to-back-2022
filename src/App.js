import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    // emmet: .flex.flex-col.justify-between.h-screen
    // flex.flex-col: create flex column,
    // justify-between: align space in between each thing (navbar, main content, footer)
    // h-screen: take up entire screen height vertically

    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        {/* have main content in a container so it's not all the way to the side */}
        {/* emmet: main.container.mx-auto.px-3.pb-12 */}
        <main className='container mx-auto px-3 pb-12'>Content</main>
        <Footer />
      </div>
    </Router>
  )
}
export default App
