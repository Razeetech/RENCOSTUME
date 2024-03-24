import styles from '../../Pages/CheckoutPage/Checkout.module.css';

const Guest = () => {
  return (
    <div className={styles.guest}>
        <h4>You can create an account later</h4>
        <input type="email" placeholder='Email' />
        <p>We need your email to process your bookings</p>
        <button>Continue as guest</button>
    </div>
  )
}

export default Guest