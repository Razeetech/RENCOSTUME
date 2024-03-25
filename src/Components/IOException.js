import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IOException.module.css";

const IOException = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/productlist");
  }, [navigate]);

  return (
    <section className={styles.iOException}>
      <img
        className={styles.path282Icon}
        loading="lazy"
        alt=""
        src="/path282.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.galleryParent}>
            <h1 className={styles.gallery}>Gallery</h1>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-11.svg"
            />
            <div className={styles.outputFormatter}>
              <div className={styles.exploreOurCaptivating}>
                Explore our captivating gallery showcasing a myriad of
                enchanting costumes, each meticulously crafted to inspire and
                delight. From timeless classics to contemporary favorites, our
                gallery offers a glimpse into the endless possibilities awaiting
                you at RenCostume
              </div>
              <div
                className={styles.viewAllWrapper}
                onClick={onFrameContainerClick}
              >
                <b className={styles.viewAll}>View All</b>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-36@2x.png"
            />
            <div className={styles.rectangleGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-35@2x.png"
              />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-37@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.carbonnextOutlineParent}>
          <img
            className={styles.carbonnextOutlineIcon}
            loading="lazy"
            alt=""
            src="/carbonnextoutline.svg"
          />
          <img
            className={styles.carbonnextOutlineIcon1}
            alt=""
            src="/carbonnextoutline-1.svg"
          />
        </div>
      </div>
      <img className={styles.path282Icon1} alt="" src="/path282-1.svg" />
    </section>
  );
};

export default IOException;
