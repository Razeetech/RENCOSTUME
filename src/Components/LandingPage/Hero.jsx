import styles from './Hero.module.css';
import support from '../../assets/support.svg';
import styles2 from '../../Pages/Home/Home.module.css';
import jar from '../../assets/cloth-jar.svg';
import people from '../../assets/people.svg';
import reviews from '../../assets/reviews.svg';
import { BsBriefcase } from "react-icons/bs";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Every Costume Tells a Story, Unleash your Imagination.</h1>
        <p>Browse our diverse collection of costumes for any occasion. Rent hassle-free and unleash your imagination today</p>
        <button>CRAFT YOUR PERFECT LOOK</button>
      </div>

      <button>
        <img src={support} alt="" />
      </button>

      <div className={styles2.stats}>
        <article className={styles2.stat}>
          <span>
            <img src={jar} alt="" />
          </span>
          <div>
            <h5>500+</h5>
            <p>Costumes Rented</p>
          </div>
        </article>
        <article className={styles2.stat}>
          <span>
            <img src={people} alt="" />
          </span>
          <div>
            <h5>100+</h5>
            <p>Clients Served</p>
          </div>
        </article>
        <article className={styles2.stat}>
          <span>
            <img src={reviews} alt="" />
          </span>
          <div>
            <h5>80+</h5>
            <p>Client Reviews</p>
          </div>
        </article>
        <article className={styles2.stat}>
          <span>
            <BsBriefcase size={40} color='#ffffff' />
          </span>
          <div>
            <h5>3+</h5>
            <p>Years of service</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero