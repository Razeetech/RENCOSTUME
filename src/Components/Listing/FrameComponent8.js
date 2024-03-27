import { useMemo } from "react";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({
  solardeliveryOutline,
  delivery,
  deliveryWillGetToYourLoca,
  propPadding,
  propMinWidth,
  propHeight,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const deliveryStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const deliveryWillGetStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.solardeliveryOutlineIcon}
            alt=""
            src={solardeliveryOutline}
          />
        </div>
      </div>
      <div className={styles.deliveryParent}>
        <b className={styles.delivery} style={deliveryStyle}>
          {delivery}
        </b>
        <div className={styles.deliveryWillGet} style={deliveryWillGetStyle}>
          {deliveryWillGetToYourLoca}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
