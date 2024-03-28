/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from '../../Pages/CheckoutPage/Checkout.module.css';
import { toast } from 'react-toastify';
// import supabase from '../../supaBaseClient';
import useStore from '../../../store';

const Guest = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser } = useStore();

  async function signInWithEmail(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setUser({ email });
      toast.success("Sign in Successful.");
    }, 3000);
    setLoading(false);
  }

  return (
    <form className={styles.guest} onSubmit={(e) => signInWithEmail(e)}>
        <h4>You can create an account later</h4>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>We need your email to process your bookings</p>
        <button onClick={(e) => signInWithEmail(e)} disabled={loading}>{loading ? "Signing In" : "Continue as guest"}</button>
        {/* <ToastContainer /> */}
    </form>
  )
}

export default Guest