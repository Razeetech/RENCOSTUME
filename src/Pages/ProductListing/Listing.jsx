
const Listing = () => {
  return (
    <div>Listing</div>
  )
}

export default Listing

import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent51 from "../components/FrameComponent51";
import LoopControl from "../components/LoopControl";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Listing.module.css";

const Listing = () => {
  return (
    <div className={styles.productlist}>
      <FrameComponent12 />
      <section className={styles.productlistInner}>
        <div className={styles.costumeListingParent}>
          <h1 className={styles.costumeListing}>Costume Listing</h1>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.frame}>
                <img
                  className={styles.mynauisearchIcon}
                  alt=""
                  src="/mynauisearch.svg"
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
          <FrameComponent51 />
        </div>
      </section>
      <LoopControl />
      <div className={styles.carbonnextOutlineWrapper}>
        <img
          className={styles.carbonnextOutlineIcon}
          loading="lazy"
          alt=""
          src="/carbonnextoutline1.svg"
        />
      </div>
      <FrameComponent1 group9="/group-91@2x.png" propMarginTop="unset" />
    </div>
  );
};

export default Listing;
