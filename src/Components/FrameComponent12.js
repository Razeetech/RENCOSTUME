import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent12.module.css";

const FrameComponent12 = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRENCOSTUMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onOrderTrackingTextClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <section className={styles.inputProcessorWrapper}>
      <header className={styles.inputProcessor}>
        <div className={styles.errorHandler}>
          <img
            className={styles.errorHandlerChild}
            alt=""
            src="/group-9@2x.png"
            onClick={onGroupIconClick}
          />
        </div>
        <div className={styles.rencostumeWrapper}>
          <b className={styles.rencostume} onClick={onRENCOSTUMETextClick}>
            RENCOSTUME
          </b>
        </div>
        <div className={styles.rentWrapper}>
          <div className={styles.rent}>Rent</div>
        </div>
        <div className={styles.inputProcessorInner}>
          <Form className={styles.wrapper}>
            <Form.Control
              type="text"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
          </Form>
        </div>
        <div className={styles.inputProcessorChild}>
          <div className={styles.orderTrackingParent}>
            <div
              className={styles.orderTracking}
              onClick={onOrderTrackingTextClick}
            >
              Order Tracking
            </div>
            <div className={styles.signIn}>Sign in</div>
          </div>
        </div>
        <div className={styles.outputGenerator}>
          <img
            className={styles.mdiheartOutlineIcon}
            alt=""
            src="/mdiheartoutline.svg"
          />
        </div>
        <div className={styles.outputGenerator1}>
          <img
            className={styles.grommetIconscart}
            alt=""
            src="/grommeticonscart.svg"
          />
        </div>
      </header>
    </section>
  );
};

export default FrameComponent12;
