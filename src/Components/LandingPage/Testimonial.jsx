import styles from './Testimonial.module.css';
import next from '../../assets/next.svg'
import test from '../../assets/testimonial.png';

const Testimonial = () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.title}>
            <span><img src={next} alt="" /></span>
            <h4>Testimonial</h4>
        </div>
        <div className={styles.mid}>
          <img src={test} alt="" />
          <div className={styles.info}>
              <h3>ANGEL WILLIAM</h3>
              <div>
                  <p>RenCostume exceeded my expectations! The costume selection was vast and impressive, and the quality was outstanding. The online booking process was smooth and convenient, and the customer service was exceptional. I received numerous compliments at my event and felt confident and comfortable in my chosen attire. I highly recommend RenCostume for anyone in search of top-notch costume rentals</p>
              </div>
          </div>
        </div>
        <span><img src={next} alt="" /></span>
    </section>
  )
}

export default Testimonial