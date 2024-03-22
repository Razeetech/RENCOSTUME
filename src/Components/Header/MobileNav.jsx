import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const MobileNav = ({ setShowMenu }) => {
  return (
    <aside className=''>
      <button onClick={() => setShowMenu(false)}>close</button>
      <div className="search-box">
        <input type="search" placeholder='What are you looking for?' />
        <CiSearch size={24} stroke='#060208' className='search-icon' />
      </div>
      <Link to='/gallery' className='rent'>Rent</Link>
      <Link to="/">Order Tracking</Link>
        <Link to='login' className='login-link'>Sign In</Link>
    </aside>
  )
}

export default MobileNav