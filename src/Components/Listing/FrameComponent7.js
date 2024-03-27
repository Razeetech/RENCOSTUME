import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FrameComponent8 from "./FrameComponent8";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = () => {
  return (
    <div className={styles.chooseDeliveryChannelParent}>
      <h3 className={styles.chooseDeliveryChannel}>Choose Delivery Channel</h3>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameGroup}>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.delivery}>Delivery</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.expressDelivery}>Express Delivery</div>
              </div>
              <div className={styles.expressDeliveryIs}>
                Express delivery is only available for payments made before 11am
                in Lagos and Abuja.
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.valueJoiner}>
              <div className={styles.chooseDeliveryChannel1}>
                Choose Delivery Channel
              </div>
            </div>
            <Form.Select
              className={styles.inputFilterFormselect}
              name="location"
              id="location"
            >
              <option>Select your state</option>
              <option value="Lagos">Lagos</option>
              <option value="Kano">Kano</option>
              <option value="Calaba">Calaba</option>
              <option value="Kwara">Kwara</option>
              <option value="Ondo">Ondo</option>
              <option value="Ogun">Ogun</option>
              <option value="Delta">Delta</option>
            </Form.Select>
            <div className={styles.errorHandler}>
              <div className={styles.dataStream}>
                <div className={styles.dataStreamChild} />
                <img
                  className={styles.riarrowDropDownLineIcon}
                  alt=""
                  src="/riarrowdropdownline-1.svg"
                />
              </div>
              <div className={styles.timingController}>
                <div className={styles.sequenceManager}>
                  <div className={styles.amount}>Amount</div>
                </div>
                <div className={styles.conditionChecker}>
                  <img
                    className={styles.mdinairaIcon}
                    alt=""
                    src="/mdinaira1.svg"
                  />
                  <div className={styles.inputMultiplier}>2,000</div>
                </div>
              </div>
            </div>
            <div className={styles.outputMerger}>
              <div className={styles.phoneNumber}>Phone Number</div>
              <Form className={styles.dataComparator}>
                <Form.Control
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="enter your phone number"
                />
              </Form>
            </div>
            <FrameComponent8
              solardeliveryOutline="/solardeliveryoutline.svg"
              delivery="Delivery"
              deliveryWillGetToYourLoca="Delivery will get to your location a day before your requested day for location that are not in Abuja, Lagos, Oyo, and Rivers State. and the receiver must be readily available to receive item on stipulated date."
            />
            <FrameComponent8
              solardeliveryOutline="/arcticonsadobeexpress.svg"
              delivery="Express Delivery"
              deliveryWillGetToYourLoca="Bookings and payment for express delivery must be made before 11am."
              propPadding="0px 0px var(--padding-7xs)"
              propMinWidth="unset"
              propHeight="40px"
            />
            <FrameComponent8
              solardeliveryOutline="/fluentgroupreturn20regular.svg"
              delivery="Returning Items"
              deliveryWillGetToYourLoca="Items rented must be returned on stipulated date as extra charges paid for faulting will not be returned."
              propPadding="unset"
              propMinWidth="unset"
              propHeight="40px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
