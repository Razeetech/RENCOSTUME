import { useState } from 'react';
import styles from '../../Pages/CheckoutPage/Checkout.module.css';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import supabase from '../../supaBaseClient';

const SignIn = () => {
  const [showP, setShowP] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  async function signInWithEmail(e) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (!error) {
      toast.success("Sign in Successful.");
      supabase.auth.setSession(data.session);
    } else {
      toast.error(error.message);
    }
    setLoading(false);
  }

  return (
    <form className={styles.signIn} onSubmit={(e) => signInWithEmail(e)}>
        <input type="email" placeholder='Email*' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <input type={showP ? "text" : "password"} name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          {
            showP ? 
            <IoEyeOutline className={styles.eye} size={24} onClick={() => setShowP(false)} />
            : <IoEyeOffOutline className={styles.eye} size={24} onClick={() => setShowP(true)} />
          }
        </div>

        <span className={styles.remember}>
          <input type="checkbox" name="remember" className={styles.rem} value={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          <label htmlFor="">
            Remember me
          </label>
        </span>
        <a href="/">Forget Password?</a>
        <button onClick={(e) => signInWithEmail(e)} disabled={loading}>{loading ? "Loggging in..." : "Login"}</button>
    </form>
  )
}

export default SignIn