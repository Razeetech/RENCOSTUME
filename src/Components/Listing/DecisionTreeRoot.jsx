import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DecisionTreeRoot.module.css";

const DecisionTreeRoot = () => {
  const navigate = useNavigate();

  const onCRAFTYOURPERFECTClick = useCallback(() => {
    navigate("/productlist");
  }, [navigate]);

  return (
    <section className={styles.decisionTreeRoot}>
      <img
        className={styles.decisionTreeRootChild}
        alt=""
        src="/rectangle-8@2x.png"
      />
      <div className={styles.parentLink} />
      <div className={styles.connectedComponentsParent}>
        <div className={styles.connectedComponents}>
          <div className={styles.childCluster}>
            <h1 className={styles.everyCostumeTells}>
              Every Costume Tells a Story, Unleash your Imagination.
            </h1>
            <div className={styles.browseOurDiverse}>
              Browse our diverse collection of costumes for any occasion. Rent
              hassle-free and unleash your imagination today
            </div>
          </div>
          <div className={styles.component1}>
            <b
              className={styles.craftYourPerfect}
              onClick={onCRAFTYOURPERFECTClick}
            >
              CRAFT YOUR PERFECT LOOK
            </b>
          </div>
        </div>
        <div className={styles.subtree}>
          <div className={styles.nestedTrees}>
            <div className={styles.pathway}>
              <div className={styles.gameIconsclothJarWrapper}>
                <div className={styles.gameIconsclothJar}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.mergeLinks}>
                <b className={styles.b}>500+</b>
                <div className={styles.costumesRented}>Costumes Rented</div>
              </div>
            </div>
          </div>
          <div className={styles.nestedTrees1}>
            <div className={styles.frameParent}>
              <div className={styles.healthiconspeopleOutlineWrapper}>
                <div className={styles.healthiconspeopleOutline}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className={styles.parent}>
                <b className={styles.b1}>100+</b>
                <div className={styles.clientsServed}>Clients Served</div>
              </div>
            </div>
          </div>
          <div className={styles.nestedTrees2}>
            <div className={styles.frameGroup}>
              <div className={styles.materialSymbolsLightreviewsWrapper}>
                <div className={styles.materialSymbolsLightreviews}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
              <div className={styles.group}>
                <b className={styles.b2}>80+</b>
                <div className={styles.clientReviews}>Client Reviews</div>
              </div>
            </div>
          </div>
          <div className={styles.nestedTrees3}>
            <div className={styles.frameContainer}>
              <div className={styles.uitbagWrapper}>
                <div className={styles.uitbag}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
              <div className={styles.container}>
                <b className={styles.b3}>3+</b>
                <div className={styles.yearsOfService}>Years of service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionTreeRoot;
