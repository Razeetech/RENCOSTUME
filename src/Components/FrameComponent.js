import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.networkBrokerWrapper}>
        <div className={styles.networkBroker}>
          <div className={styles.networkBrokerChild} />
          <div className={styles.logicGateWrapper}>
            <div className={styles.logicGate}>
              <div className={styles.outputControllerWrapper}>
                <div className={styles.outputController}>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameContainer}>
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/group-14@2x.png"
                      />
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-18.svg"
                      />
                    </div>
                    <h3 className={styles.readyToBring}>
                      Ready to bring your dream costume to life?
                    </h3>
                  </div>
                  <div className={styles.diveIntoOur}>
                    Dive into our collection now and discover the perfect attire
                    for your next adventure. Start your journey with RenCostume
                    today and unleash your imagination
                  </div>
                </div>
              </div>
              <div className={styles.patternMatcher}>
                <b className={styles.getStarted}>Get Started</b>
              </div>
            </div>
          </div>
          <img
            className={styles.networkBrokerItem}
            alt=""
            src="/group-15.svg"
          />
        </div>
      </div>
      <FrameComponent1 group9="/group-91@2x.png" />
    </section>
  );
};

export default FrameComponent;
