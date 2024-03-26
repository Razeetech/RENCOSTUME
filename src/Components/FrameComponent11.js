import { useMemo } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = ({
  shadowEffect,
  nefertitiWovenCrown,
  rent,
  quantities,
  prop,
  propWidth,
  propPadding,
  propWidth1,
  propFlex,
  propOverflow,
  propMinWidth,
  propPadding1,
  propMinWidth1,
  propAlignSelf,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const shadowEffectIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
      overflow: propOverflow,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propFlex, propOverflow, propMinWidth]);

  const opacityControlStyle = useMemo(() => {
    return {
      padding: propPadding1,
      minWidth: propMinWidth1,
    };
  }, [propPadding1, propMinWidth1]);

  const nefertitiWovenCrownStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.gradientFillWrapper} style={frameDiv3Style}>
      <div className={styles.gradientFill}>
        <img
          className={styles.shadowEffectIcon}
          loading="lazy"
          alt=""
          src={shadowEffect}
          style={shadowEffectIconStyle}
        />
        <div className={styles.opacityControl} style={opacityControlStyle}>
          <div className={styles.borderEffect}>
            <div
              className={styles.nefertitiWovenCrown}
              style={nefertitiWovenCrownStyle}
            >
              {nefertitiWovenCrown}
            </div>
            <div className={styles.brightnessControl}>
              <div className={styles.rent}>{rent}</div>
              <div className={styles.quantities}>{quantities}</div>
            </div>
            <div className={styles.days}>2 Days</div>
            <div className={styles.imageFilters}>
              <img className={styles.mdinairaIcon} alt="" src="/mdinaira.svg" />
              <div className={styles.div}>{prop}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
