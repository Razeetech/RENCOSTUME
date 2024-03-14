import './Footer.css';
import logo from '../../assets/Logo-white.svg';
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="top">
          <div className='socials'>
            <img src={logo} alt="" />
            <ul>
              <li>
                <a href="/"><RiInstagramFill size={30} fill='white' /></a>
              </li>
              <li>
                <a href="/"><RiInstagramFill size={30} fill='white' /></a>
              </li>
              <li>
                <a href="/"><RiInstagramFill size={30} fill='white' /></a>
              </li>
            </ul>
          </div>

          <div className='about'>
            <h3>About</h3>
            <ul>
              <li>Our Mission</li>
              <li>Our Vision</li>
              <li>Team members</li>
            </ul>
          </div>

          <div className='support'>
            <h3>Support</h3>
            <ul>
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className='resources'>
            <h3>Resources</h3>
            <ul>
              <li>Costume Listing</li>
              <li>Gallery</li>
              <li>My Cart</li>
              <li>My WishList</li>
            </ul>
          </div>

          <div className='security'>
            <h3>Security</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <hr />
      </section>
      <p>2023 Copyright, All rights reserved to Componify</p>
    </footer>
  )
}

export default Footer