import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      {/* auto margin left and right */}
      <div className='container mx-auto'>
        {/* add margin/padding on x-axis */}
        {/* emmet: .flex-none.px-2.mx-2 */}
        <div className='flex-none px-2 mx-2'>
          {/* inline padding right 2 because we're going to have text next to it */}
          {/* text-3xl makes it a little bigger */}
          <FaGithub className='inline pr-2 text-3xl' />
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'GithubFinder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}
export default Navbar
