import { useMemo } from "react";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = ({ prop, propPadding, propGap, propMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.mdinairaParent} style={frameDiv1Style}>
        <img className={styles.mdinairaIcon} alt="" src="/mdinaira.svg" />
        <div className={styles.div} style={divStyle}>
          {prop}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
