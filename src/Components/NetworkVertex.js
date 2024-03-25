import DataAggregator from "./DataAggregator";
import styles from "./NetworkVertex.module.css";

const NetworkVertex = () => {
  return (
    <section className={styles.networkVertex}>
      <div className={styles.graphVertex}>
        <img
          className={styles.path284Icon}
          loading="lazy"
          alt=""
          src="/path284.svg"
        />
        <img
          className={styles.graphVertexChild}
          loading="lazy"
          alt=""
          src="/group-19.svg"
        />
        <div className={styles.networkExpansions}>
          <div className={styles.branchMergers}>
            <h1 className={styles.whyRencostume}>
              <span>{`Why `}</span>
              <span className={styles.rencostume}>RenCostume?</span>
            </h1>
            <div className={styles.unlockBoundlessCreativity}>
              Unlock boundless creativity with RenCostume! Our vast selection of
              high-quality costumes ensures you'll stand out at any event. Enjoy
              hassle-free rentals, convenient online booking, and
              budget-friendly prices. Embrace authenticity and comfort without
              breaking the bank. Choose us for an unforgettable costume
              experience
            </div>
          </div>
          <div className={styles.dataAggregator}>
            <DataAggregator
              group="/group.svg"
              variety="Variety"
              diveIntoOurCostumeVaultFi="Dive into our costume vault. Find the perfect attire for every event, era or theme for any occasions."
            />
            <DataAggregator
              group="/17-quality.svg"
              variety="Quality"
              diveIntoOurCostumeVaultFi="Our costumes are  crafted with high-quality materials, for your authenticity and comfort."
              propPadding="var(--padding-48xl) var(--padding-23xl) 66.39999999999964px"
              propPadding1="51px 20px 22px"
              propPadding2="var(--padding-11xs) var(--padding-10xs)"
            />
            <div className={styles.dataAggregator1}>
              <div className={styles.frameParent}>
                <div className={styles.rightsFreeIcon2124031Wrapper}>
                  <div className={styles.rightsFreeIcon2124031}>
                    <img className={styles.vectorIcon} alt="" />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-5.svg"
                    />
                    <img
                      className={styles.valueConverterIcon}
                      alt=""
                      src="/vector-6.svg"
                    />
                    <img
                      className={styles.errorHandlerIcon}
                      alt=""
                      src="/vector-7.svg"
                    />
                    <img
                      className={styles.decisionMakerIcon}
                      alt=""
                      src="/vector-8.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-9.svg"
                    />
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                </div>
                <div className={styles.affordabilityParent}>
                  <div className={styles.affordability}>Affordability</div>
                  <div className={styles.cutCostsWith}>
                    Cut costs with our costume rentals, offering affordable
                    options for your ideal outfit at any occasion
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dataAggregator2}>
              <div className={styles.frameGroup}>
                <div className={styles.naturalResourcesSustainabiliWrapper}>
                  <img className={styles.naturalResourcesSustainabiliIcon} />
                </div>
                <div className={styles.convenienceParent}>
                  <div className={styles.convenience}>Convenience</div>
                  <div className={styles.enjoyTheConvenience}>
                    Enjoy the convenience of hassle-free rentals, with easy
                    online booking, flexible rental periods, and simple returns.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkVertex;
