import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
  const navigate = useNavigate();

  const onRentTextClick = useCallback(() => {
    navigate("/productlist");
  }, [navigate]);

  const onOrderTrackingTextClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <section className={styles.landingpageInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <header className={styles.connectionPoints}>
          <div className={styles.connectionPointsInner}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-9@2x.png"
            />
          </div>
          <div className={styles.nestedSubtrees}>
            <b className={styles.rencostume}>RENCOSTUME</b>
          </div>
          <div className={styles.rentWrapper}>
            <div className={styles.rent} onClick={onRentTextClick}>
              Rent
            </div>
          </div>
          <div className={styles.rootedPathways}>
            <Form className={styles.wrapper}>
              <Form.Control
                type="text"
                name="search"
                id="search"
                placeholder="What are you looking for?"
              />
            </Form>
          </div>
          <div className={styles.networkEdges}>
            <div className={styles.interconnectedComponents}>
              <div
                className={styles.orderTracking}
                onClick={onOrderTrackingTextClick}
              >
                Order Tracking
              </div>
              <div className={styles.signIn}>Sign in</div>
            </div>
          </div>
          <div className={styles.forkedPathways}>
            <img
              className={styles.mdiheartOutlineIcon}
              alt=""
              src="/mdiheartoutline.svg"
            />
          </div>
          <div className={styles.forkedPathways1}>
            <img
              className={styles.grommetIconscart}
              alt=""
              src="/grommeticonscart.svg"
            />
          </div>
        </header>
        <div className={styles.recordField}>
          <div className={styles.treeFragments}>
            <div className={styles.parentageLinks}>
              <div className={styles.branchSplits} />
              <img
                className={styles.streamlinecustomerSupport1Icon}
                alt=""
                src="/streamlinecustomersupport1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
