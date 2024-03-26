import styles from "./FrameComponent31.module.css";

const FrameComponent31 = ({ prop }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.mdinairaParent}>
        <img
          className={styles.mdinairaIcon}
          loading="lazy"
          alt=""
          src="/mdinaira.svg"
        />
        <div className={styles.div}>{prop}</div>
      </div>
    </div>
  );
};

export default FrameComponent31;
