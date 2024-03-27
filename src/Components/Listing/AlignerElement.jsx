import { useMemo } from "react";
import styles from "./AlignerElement.module.css";

const AlignerElement = ({
  containerElement,
  boysCrown,
  propWidth,
  propHeight,
  propFlex,
  propMinWidth,
  propFlex1,
  propHeight1,
}) => {
  const alignerElementStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propHeight, propFlex, propMinWidth]);

  const spacerElementStyle = useMemo(() => {
    return {
      flex: propFlex1,
      height: propHeight1,
    };
  }, [propFlex1, propHeight1]);

  return (
    <div className={styles.alignerElement} style={alignerElementStyle}>
      <div className={styles.spacerElement} style={spacerElementStyle}>
        <img
          className={styles.containerElementIcon}
          alt=""
          src={containerElement}
        />
        <div className={styles.stackElement}>
          <div className={styles.bookmarkFavoriteFavouriteHe}>
            <img
              className={styles.imageElementIcon}
              alt=""
              src="/vector11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.shapeElement}>
        <div className={styles.boysCrown}>{boysCrown}</div>
        <div className={styles.mdinairaParent}>
          <img className={styles.mdinairaIcon} alt="" src="/mdinaira1.svg" />
          <div className={styles.div}>5,000</div>
        </div>
        <div className={styles.addToCartParent}>
          <b className={styles.addToCart}>Add to Cart</b>
          <div className={styles.iconShoppingCart}>
            <img
              className={styles.symbolElementIcon}
              alt=""
              src="/vector-12.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlignerElement;
