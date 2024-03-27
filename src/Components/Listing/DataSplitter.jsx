import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DataSplitter.module.css";

const DataSplitter = () => {
  const navigate = useNavigate();

  const onCheckoutTextClick = useCallback(() => {
    navigate("/checkout-1");
  }, [navigate]);

  return (
    <div className={styles.dataSplitter}>
      <div className={styles.dataMerger}>
        <h3 className={styles.cartSummary}>Cart Summary</h3>
        <div className={styles.filterBank}>
          <div className={styles.signalRouter}>
            <div className={styles.signalRouterChild} />
            <div className={styles.timingSequencer}>
              <div className={styles.dataQueue}>
                <div className={styles.errorCorrector}>
                  <div className={styles.expressDelivery}>Express Delivery</div>
                </div>
                <div className={styles.valueSieve}>
                  <img
                    className={styles.mdinairaIcon}
                    alt=""
                    src="/mdinaira.svg"
                  />
                  <div className={styles.outputMultiplexer}>2,000</div>
                </div>
              </div>
              <div className={styles.dataQueue1} />
              <div className={styles.dataQueue2}>
                <div className={styles.itemTotalWrapper}>
                  <div className={styles.itemTotal}>Item Total</div>
                </div>
                <div className={styles.mdinairaParent}>
                  <img
                    className={styles.mdinairaIcon1}
                    alt=""
                    src="/mdinaira.svg"
                  />
                  <div className={styles.div}>118,000</div>
                </div>
              </div>
              <div className={styles.dataQueue3} />
              <div className={styles.dataQueue4}>
                <div className={styles.totalWrapper}>
                  <div className={styles.total}>Total</div>
                </div>
                <div className={styles.mdinairaGroup}>
                  <img
                    className={styles.mdinairaIcon2}
                    alt=""
                    src="/mdinaira.svg"
                  />
                  <div className={styles.div1}>120,000</div>
                </div>
              </div>
              <div className={styles.dataQueue5} />
              <div className={styles.dataCollector}>
                <div className={styles.haveACouponContainer}>
                  <span>{`Have a coupon? `}</span>
                  <span className={styles.enterTheCode}>Enter the code</span>
                </div>
                <div className={styles.dataCascadeWithErrorHandli}>
                  <div className={styles.dataCascadeWithErrorHandliChild} />
                  <div className={styles.apply}>Apply</div>
                </div>
              </div>
              <div className={styles.dataQueue6} />
              <div className={styles.dataQueue7}>
                <div className={styles.newTotalWrapper}>
                  <div className={styles.newTotal}>New Total</div>
                </div>
                <div className={styles.mdinairaContainer}>
                  <img
                    className={styles.mdinairaIcon3}
                    alt=""
                    src="/mdinaira.svg"
                  />
                  <div className={styles.div2}>120,000</div>
                </div>
              </div>
            </div>
            <div className={styles.sequenceSplitter}>
              <div className={styles.decisionTree}>
                <b className={styles.checkout} onClick={onCheckoutTextClick}>
                  Checkout
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSplitter;
