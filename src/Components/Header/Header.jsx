import './Header.css'
import logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import MobileNav from './MobileNav';
import { useState } from 'react';
import useStore from '../../../store';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { count } = useStore();
  const totalQty = count();

  return (
    <header>
      <div>
        <HiMenu className='ham' size={20} onClick={() => setShowMenu(true)} />
        <a href="/" className='logo'>
          <img src={logo} alt="" />
        </a>
      </div>
      <Link to='/gallery' className='rent'>Rent</Link>
      <div className="search-box">
        <input type="search" placeholder='What are you looking for?' />
        <CiSearch size={24} stroke='#060208' className='search-icon' />
      </div>
      <nav>
        <Link to="/">Order Tracking</Link>
        <Link to='login' className='login-link'>Sign In</Link>
        <Link>
          <CiHeart size={24} stroke='#060208' />
        </Link>
        <Link to="/shopping-cart" className='cart'>
          <IoCartOutline size={24} stroke='#060208' />
          {
            totalQty !== 0 ? <p>{totalQty}</p> : <></>
          }
        </Link>
      </nav>
      <div className='mob-nav'>
        <Link>
          <CiHeart size={24} stroke='#060208' />
        </Link>
        <Link to="/shopping-cart">
          <IoCartOutline size={24} stroke='#060208' />
          <p style={{ padding: '2px 4px', background: 'red', color: 'white' }}>{count}</p>
        </Link>
      </div>
      <div className={`${showMenu ? 'show' : 'hide'} overlay`}>
        <MobileNav setShowMenu={setShowMenu} />
      </div>
    </header>
  )
}

export default Header