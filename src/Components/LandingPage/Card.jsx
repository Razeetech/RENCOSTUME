import styles from './Card.module.css';
import jen from '../../assets/jennifer.png';

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <h5>Ready to bring your dream costume to life?</h5>
      <p>Dive into our collection now and discover the perfect attire for your next adventure. Start your journey with RenCostume today and unleash your imagination</p>
      <button>Get Started</button>
      <img src={jen} alt="" />
    </div>
  )
}

export default Card