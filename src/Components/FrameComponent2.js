import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.iconParkOutlinenextParent}>
        <img
          className={styles.iconParkOutlinenext}
          loading="lazy"
          alt=""
          src="/iconparkoutlinenext.svg"
        />
        <img
          className={styles.iconParkOutlinenext1}
          alt=""
          src="/iconparkoutlinenext-1.svg"
        />
        <div className={styles.carbonnextOutlineParent}>
          <img
            className={styles.carbonnextOutlineIcon}
            alt=""
            src="/carbonnextoutline1.svg"
          />
          <img className={styles.frameChild} alt="" src="/group-17.svg" />
        </div>
      </div>
      <div className={styles.testimonialParent}>
        <h1 className={styles.testimonial}>Testimonial</h1>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/rectangle-40@2x.png"
          />
          <div className={styles.angelWilliamParent}>
            <h3 className={styles.angelWilliam}>ANGEL WILLIAM</h3>
            <div className={styles.frameWrapper}>
              <div className={styles.dataFlowControllerParent}>
                <div className={styles.dataFlowController}>
                  <img
                    className={styles.biquoteIcon}
                    alt=""
                    src="/biquote.svg"
                  />
                  <div className={styles.rencostumeExceededMy}>
                    RenCostume exceeded my expectations! The costume selection
                    was vast and impressive, and the quality was outstanding.
                    The online booking process was smooth and convenient, and
                    the customer service was exceptional. I received numerous
                    compliments at my event and felt confident and comfortable
                    in my chosen attire. I highly recommend RenCostume for
                    anyone in search of top-notch costume rentals
                  </div>
                </div>
                <img
                  className={styles.biquoteIcon1}
                  alt=""
                  src="/biquote-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/group-21@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
