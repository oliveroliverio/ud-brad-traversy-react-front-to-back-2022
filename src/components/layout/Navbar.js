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
          <FaGithub />
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
