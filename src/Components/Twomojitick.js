import { useMemo } from "react";
import styles from "./Twomojitick.module.css";

const Twomojitick = ({
  twomojistar,
  twomojieyes,
  twomojitriangle,
  propWidth,
  propPadding,
  propPadding1,
  propAlignSelf,
}) => {
  const twomojitickStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const twomojisquareStyle = useMemo(() => {
    return {
      padding: propPadding1,
      alignSelf: propAlignSelf,
    };
  }, [propPadding1, propAlignSelf]);

  return (
    <div className={styles.twomojitick} style={twomojitickStyle}>
      <div className={styles.twomojisquare} style={twomojisquareStyle}>
        <div className={styles.twomojicircle}>
          <img
            className={styles.twomojistarIcon}
            loading="lazy"
            alt=""
            src={twomojistar}
          />
        </div>
        <div className={styles.twomojieyes}>{twomojieyes}</div>
        <div className={styles.twomojidotcircle}>
          <img
            className={styles.twomojitriangleIcon}
            loading="lazy"
            alt=""
            src={twomojitriangle}
          />
        </div>
      </div>
    </div>
  );
};

export default Twomojitick;
