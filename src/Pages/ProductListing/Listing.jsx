import FrameComponent5 from "../../Components/Listing/FrameComponent5";
import LoopControl from "../../Components/Listing/LoopControl";
import FrameComponent1 from "../../Components/Listing/FrameComponent1";
import styles from "./Listing.module.css";
import mynaui from '../../assets/mynauisearch.svg'
import carbon from '../../assets/carbonnextoutline-1.svg'

const Listing = () => {
  return (
    <div className={styles.productlist}>
      <section className={styles.productlistInner}>
        <div className={styles.costumeListingParent}>
          <h1 className={styles.costumeListing}>Costume Listing</h1>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.frame}>
                <img
                  className={styles.mynauisearchIcon}
                  alt=""
                  src={mynaui}
                />
                <div className={styles.searchWrapper}>
                  <div className={styles.search}>Search</div>
                </div>
              </div>
              <div className={styles.expressDeliveryIs}>
                Express delivery is available for payments made before 11am in
                Lagos and Abuja.
              </div>
            </div>
          </div>
          <FrameComponent5 />
        </div>
      </section>
      <LoopControl />
      <div className={styles.carbonnextOutlineWrapper}>
        <img
          className={styles.carbonnextOutlineIcon}
          loading="lazy"
          alt=""
          src={carbon}
        />
      </div>
      <FrameComponent1 group9="/group-91@2x.png" propMarginTop="unset" />
    </div>
  );
};

export default Listing;
