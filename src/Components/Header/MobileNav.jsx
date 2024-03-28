import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import './Header.css';
import useStore from '../../../store';

// eslint-disable-next-line react/prop-types
const MobileNav = ({ setShowMenu }) => {
  const { user } = useStore();

  return (
    <aside className=''>
      <button onClick={() => setShowMenu(false)} className='close'>
        <IoClose size={28} />
      </button>
      <div className="search-box">
        <input type="search" placeholder='What are you looking for?' />
        <CiSearch size={24} stroke='#060208' className='search-icon' />
      </div>
      <Link to='/gallery' className='rent'>Rent</Link>
      <Link to="/">Order Tracking</Link>
        <Link to='/checkout' className='login-link'>{user ? "Checkout" : "Sign In"}</Link>
    </aside>
  )
}

export default MobileNav