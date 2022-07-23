import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
  return (
    // color of icon will vary depending on if use is on page
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem'>
            <ExploreIcon fill='#2c2c2c' width='36px' height='36px' />
            <p>Explore</p>
          </li>
          <li className='navbarListItem'>
            <OfferIcon fill='#2c2c2c' width='36px' height='36px' />
            <p>Offer</p>
          </li>
          <li className='navbarListItem'>
            <PersonOutlineIcon fill='#2c2c2c' width='36px' height='36px' />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
