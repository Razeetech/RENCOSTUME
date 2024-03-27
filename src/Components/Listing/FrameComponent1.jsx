import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ group9, propMarginTop }) => {
  const frameFooterStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const navigate = useNavigate();

  const onMyCartTextClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <footer className={styles.rectangleParent} style={frameFooterStyle}>
      <div className={styles.frameChild} />
      <div className={styles.dataMerge}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.truthTableParent}>
              <div className={styles.truthTable}>
                <img className={styles.truthTableChild} alt="" src={group9} />
                <div className={styles.logicCombiner}>
                  <b className={styles.rencostume}>RENCOSTUME</b>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-25.svg"
                />
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-26.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-27.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.parallelProcessor}>
            <div className={styles.dataSynchronizer}>
              <div className={styles.about}>About</div>
              <div className={styles.dataTransmitter}>
                <div className={styles.ourMission}>Our Mission</div>
                <div className={styles.ourVision}>Our Vision</div>
                <div className={styles.teamMembers}>Team members</div>
              </div>
            </div>
            <div className={styles.dataSynchronizer1}>
              <div className={styles.support}>Support</div>
              <div className={styles.faqsParent}>
                <div className={styles.faqs}>FAQs</div>
                <div className={styles.helpCentre}>Help Centre</div>
                <div className={styles.contactUs}>Contact Us</div>
              </div>
            </div>
          </div>
          <div className={styles.dataMapper}>
            <div className={styles.resources}>Resources</div>
            <div className={styles.errorCorrector}>
              <div className={styles.costumeListing}>Costume Listing</div>
              <div className={styles.gallery}>Gallery</div>
              <div className={styles.myCart} onClick={onMyCartTextClick}>
                My Cart
              </div>
              <div className={styles.myWishlist}>My Wishlist</div>
            </div>
          </div>
          <div className={styles.patternRecognizer}>
            <div className={styles.security}>Security</div>
            <div className={styles.flowRegulator}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsAndCondition}>
                Terms and Condition
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.lineDiv} />
        <div className={styles.dataProcessor}>
          <div className={styles.copyrightAllRights}>
            2023 Copyright, All rights reserved to Componify
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent1;
