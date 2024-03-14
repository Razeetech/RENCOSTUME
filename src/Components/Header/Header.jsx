import './Header.css'
import logo from '../../assets/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="left-block">
        <a href="/" className='logo'>
          <img src={logo} alt="" />
        </a>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/rent'>
                Rent
              </NavLink>
            </li>
            <li>
              <NavLink to='/gallery'>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to='/track'>
                Track Order
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-block">
        <CiSearch size={24} stroke='#060208' />
        <CiHeart size={24} stroke='#060208' />
        <IoCartOutline size={24} stroke='#060208' />
        <Link to='login' className='login-link'>Login</Link>
        <button>Sign Up</button>
      </div>
    </header>
  )
}

export default Header