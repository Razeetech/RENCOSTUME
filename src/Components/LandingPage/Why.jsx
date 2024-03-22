import styles from './Why.module.css';
import variety from '../../assets/variety.svg';
import prize from '../../assets/prize.svg';
import free from '../../assets/free.svg';
import natural from '../../assets/natural.svg';

const Why = () => {
  return (
    <section className={styles.why}>
      <h2>Why <span>RenCostume</span></h2>
      <p>Unlock boundless creativity with RenCostume! Our vast selection of high-quality costumes ensures you'll stand out at any event. We provide values far beyond your order, few of which are:</p>
      <div className={styles.reasons}>
        <article className={styles.reason}>
          <span>
            <img src={variety} alt="" />
          </span>
          <div>
            <h5>Variety</h5>
            <p>Dive into our costume vault. Find the perfect attire for every event, era or theme for any occasions.</p>
          </div>
        </article>
        <article className={styles.reason}>
          <span>
            <img src={prize} alt="" />
          </span>
          <div>
            <h5>Quality</h5>
            <p>Dive into our costume vault. Find the perfect attire for every event, era or theme for any occasions.</p>
          </div>
        </article>
        <article className={styles.reason}>
          <span>
            <img src={free} alt="" />
          </span>
          <div>
            <h5>Affordability</h5>
            <p>Cut costs with our costume rentals, offering affordable options for your ideal outfit at any occasion.</p>
          </div>
        </article>
        <article className={styles.reason}>
          <span>
            <img src={natural} alt="" />
          </span>
          <div>
            <h5>Convenience</h5>
            <p>Enjoy the convenience of hassle-free rentals, with easy online booking, flexible rental periods, and simple returns.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Why