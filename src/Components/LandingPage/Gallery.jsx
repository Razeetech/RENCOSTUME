import styles from './Gallery.module.css';
import lin from '../../assets/lines.svg';
import lin2 from '../../assets/lines-hor.svg';
import slide1 from '../../assets/slide-1.png';
import slide2 from '../../assets/slide-2.png';
import slide3 from '../../assets/slide-3.png';

const Gallery = () => {
  return (
    <section className={styles.gallery}>
        <div className={styles.top}>
            <h3>Gallery</h3>
            <img src={lin} alt="" className={styles.lin1} />
            <img src={lin2} alt="" className={styles.lin2} />
            <div>
                <p>Explore our captivating gallery showcasing a myriad of enchanting costumes, each meticulously crafted to inspire and delight. From timeless classics to contemporary favorites, our gallery offers a glimpse into the endless possibilities awaiting you at  RenCostume</p>
                <button>View All</button>
            </div>
        </div>
        <div className={styles.slide}>
            <div>
                <img src={slide1} alt="" />
            </div>
            <div>
                <img src={slide2} className={styles.middle} alt="" />

            </div>
            <div>
                <img src={slide3} alt="" />

            </div>
        </div>
    </section>
  )
}

export default Gallery