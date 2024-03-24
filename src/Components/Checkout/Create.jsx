import { useState } from 'react';
import styles from '../../Pages/CheckoutPage/Checkout.module.css';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Create = () => {
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);

  return (
    <div className={styles.create}>
        <input type="text" placeholder='First Name*' />
        <input type="text" placeholder='Last Name*' />
        <input type="tel" placeholder='Phone*' />
        <input type="email" placeholder='Email*' />
        <div>
          <input type={showP1 ? "text" : "password"} placeholder='Create Password' />
          {
            showP1 ? 
            <IoEyeOutline className={styles.eye} size={24} onClick={() => setShowP1(false)} />
            : <IoEyeOffOutline className={styles.eye} size={24} onClick={() => setShowP1(true)} />
          }
        </div>

        <div>
          <input type={showP2 ? "text" : "password"} placeholder='Confirm Password' />
          {
            showP2 ? 
            <IoEyeOutline className={styles.eye} size={24} onClick={() => setShowP2(false)} />
            : <IoEyeOffOutline className={styles.eye} size={24} onClick={() => setShowP2(true)} />
          }
        </div>

        <span className={styles.remember}>
          <input type="checkbox" name="" className={styles.rem} />
          <label htmlFor="">
            I would love to receive email about future promotions and new stocks
          </label>
        </span>

        <button>Create Account</button>
    </div>
  )
}

export default Create