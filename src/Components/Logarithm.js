import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "./FrameComponent5";
import styles from "./Logarithm.module.css";

const Logarithm = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/productlist");
  }, [navigate]);

  return (
    <section className={styles.logarithm}>
      <div className={styles.sineCosine}>
        <img
          className={styles.path662Icon}
          loading="lazy"
          alt=""
          src="/path662.svg"
        />
        <img className={styles.path284Icon} alt="" src="/path284-1.svg" />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ourCategoriesParent}>
              <h1 className={styles.ourCategories}>
                <span>{`Our `}</span>
                <span className={styles.categories}>Categories</span>
              </h1>
              <div className={styles.exploreOurDiverse}>
                Explore our diverse selection of themed categories, offering
                everything from historical attire to fantastical creatures. Find
                the perfect costume for any event or occasion, all conveniently
                organized for easy browsing.
              </div>
            </div>
            <div
              className={styles.seeAllListingWrapper}
              onClick={onFrameContainer1Click}
            >
              <b className={styles.seeAllListing}>See all listing</b>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-32@2x.png"
                />
                <div className={styles.clothingParent}>
                  <div className={styles.clothing}>Clothing</div>
                  <img className={styles.frameItem} alt="" src="/arrow-1.svg" />
                </div>
              </div>
              <div className={styles.frameParent1}>
                <FrameComponent5
                  subtract="/subtract.svg"
                  accessories="Accessories"
                />
                <FrameComponent5
                  subtract="/subtract-1.svg"
                  accessories="Head Attires"
                  propMinWidth="122px"
                  propHeight="30px"
                />
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-33@2x.png"
              />
              <div className={styles.footwearsParent}>
                <div className={styles.footwears}>Footwears</div>
                <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logarithm;
