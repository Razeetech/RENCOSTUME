import { useState } from 'react';
import styles from '../../Pages/CheckoutPage/Checkout.module.css';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignIn = () => {
  const [showP, setShowP] = useState(false);

  return (
    <div className={styles.signIn}>
        <input type="email" placeholder='Email*' />
        <div>
          <input type={showP ? "text" : "password"} placeholder='Password' />
          {
            showP ? 
            <IoEyeOutline className={styles.eye} size={24} onClick={() => setShowP(false)} />
            : <IoEyeOffOutline className={styles.eye} size={24} onClick={() => setShowP(true)} />
          }
        </div>

        <span className={styles.remember}>
          <input type="checkbox" name="" className={styles.rem} />
          <label htmlFor="">
            Remember me
          </label>
        </span>
        <a href="/">Forget Password?</a>
        <button>Login</button>
    </div>
  )
}

export default SignIn