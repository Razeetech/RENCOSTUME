import { useState } from 'react';
import styles from '../../Pages/CheckoutPage/Checkout.module.css';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import supabase from '../../supaBaseClient';

const Create = () => {
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isSubscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signUp(e) {
    e.preventDefault();
    if (password !== password2) return toast.error("Passwords don't match");
    if (password.length < 6) return toast.error("Password should be at least 6 characters long");
    
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          phone,
          isSubscribed
        }
      }
    });
    console.log({ data, error });
    if (!error) {
      toast.success("Create Account Successful");
      supabase.auth.setSession(data.session);
    } else {
      toast.error(error.message);
    }
    setLoading(false);
  }


  return (
    <form className={styles.create} onSubmit={(e) => signUp(e)}>
        <input type="text" name='firstName' placeholder='First Name*' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" name='lastName' placeholder='Last Name*' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="tel" name='phone' placeholder='Phone*' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="email" name='email' placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <input type={showP1 ? "text" : "password"} name='password' placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          {
            showP1 ? 
            <IoEyeOutline className={styles.eye} size={24} onClick={() => setShowP1(false)} />
            : <IoEyeOffOutline className={styles.eye} size={24} onClick={() => setShowP1(true)} />
          }
        </div>

        <div>
          <input type={showP2 ? "text" : "password"} name='confirmPassword' placeholder='Confirm Password' value={password2} onChange={(e) => setPassword2(e.target.value)} />
          {
            showP2 ? 
            <IoEyeOutline className={styles.eye} size={24} onClick={() => setShowP2(false)} />
            : <IoEyeOffOutline className={styles.eye} size={24} onClick={() => setShowP2(true)} />
          }
        </div>

        <span className={styles.remember}>
          <input type="checkbox" name="subscribed" className={styles.rem} value={isSubscribed} onChange={(e) => setSubscribed(e.target.checked)} />
          <label htmlFor="">
            I would love to receive email about future promotions and new stocks
          </label>
        </span>

        <button onClick={(e) => signUp(e)} disabled={loading}>{loading ? "Creating Account" : "Create Account"}</button>
    </form>
  )
}

export default Create