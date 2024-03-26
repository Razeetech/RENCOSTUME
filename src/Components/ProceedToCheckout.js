import styles from "./ProceedToCheckout.module.css";

const ProceedToCheckout = () => {
  return (
    <div className={styles.proceedToCheckout}>
      <div className={styles.twomojadividecircle}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.proceedToCheckout1}>PROCEED TO CHECKOUT</div>
        </div>
        <div className={styles.continueShoppingWrapper}>
          <div className={styles.continueShopping}>
            <div className={styles.continueShoppingParent}>
              <div className={styles.continueShopping1}>Continue Shopping</div>
              <div className={styles.continueShopping2}>Continue Shopping</div>
            </div>
            <div className={styles.continueShoppingInner}>
              <div className={styles.ouiarrowRightParent}>
                <img
                  className={styles.ouiarrowRightIcon}
                  alt=""
                  src="/ouiarrowright.svg"
                />
                <img
                  className={styles.ouiarrowRightIcon1}
                  loading="lazy"
                  alt=""
                  src="/ouiarrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceedToCheckout;
