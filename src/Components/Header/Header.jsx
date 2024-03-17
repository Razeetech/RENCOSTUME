import './Header.css'
import logo from '../../assets/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <a href="/" className='logo'>
        <img src={logo} alt="" />
      </a>
      <select name="categories" id="categories">
        <option value="categories">Categories</option>
        <option value="categories">Categories</option>
        <option value="categories">Categories</option>
      </select>
      <div className="search-box">
        <input type="search" placeholder='What are you looking for?' />
        <CiSearch size={24} stroke='#060208' className='search-icon' />
      </div>
      <Link tp="/">Order Tracking</Link>
      <Link to='login' className='login-link'>Sign In</Link>
      <CiHeart size={24} stroke='#060208' />
      <Link to="/shopping-cart">
        <IoCartOutline size={24} stroke='#060208' />
      </Link>
    </header>
  )
}

export default Header