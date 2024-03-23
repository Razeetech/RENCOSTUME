import styles from './AboutUs.module.css';
// import about from '../../assets/about.png'

const AboutUs = () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.image} />
        <div className={styles.left}>
            <h3>About <span>Us</span></h3>
            <p>At RenCostume, we're passionate about transforming ordinary moments into extraordinary memories. With a commitment to quality, creativity, and customer satisfaction, we offer an extensive array of meticulously curated costumes for every occasion. Step into our world and unleash your imagination today</p>
            <button>Read more...</button>
        </div>
    </section>
  )
}

export default AboutUs