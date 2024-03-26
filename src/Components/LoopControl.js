import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import AlignerElement from "./AlignerElement";
import styles from "./LoopControl.module.css";

const LoopControl = () => {
  return (
    <section className={styles.loopControl}>
      <div className={styles.frameParent}>
        <div className={styles.listViewWrapper}>
          <Button
            className={styles.listView}
            name="loadMore"
            variant="primary"
            href="/productlist"
          />
        </div>
        <div className={styles.errorHandler}>
          <div className={styles.frameGroup}>
            <div className={styles.frame}>
              <div className={styles.recommendedForYou}>
                Recommended for you
              </div>
            </div>
            <div className={styles.logicGate}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/rectangle-52-3@2x.png"
                  />
                  <div className={styles.bookmarkFavoriteFavouriteHeWrapper}>
                    <div className={styles.bookmarkFavoriteFavouriteHe}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.wovenBasketParent}>
                  <div className={styles.wovenBasket}>Woven Basket</div>
                  <div className={styles.mdinairaParent}>
                    <img
                      className={styles.mdinairaIcon}
                      alt=""
                      src="/mdinaira1.svg"
                    />
                    <div className={styles.colorModifier}>5,000</div>
                  </div>
                  <div className={styles.sizeTransformer}>
                    <div className={styles.saleAt}>{`Sale at `}</div>
                    <div className={styles.rotationController}>
                      <img
                        className={styles.mdinairaIcon1}
                        alt=""
                        src="/mdinaira-1.svg"
                      />
                      <div className={styles.alignmentSystem}>17,000</div>
                    </div>
                  </div>
                  <div className={styles.addToCartParent}>
                    <b className={styles.addToCart}>Add to Cart</b>
                    <div className={styles.iconShoppingCart}>
                      <img
                        className={styles.shadowDesignerIcon}
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <AlignerElement
                containerElement="/rectangle-52-4@2x.png"
                boysCrown="Pearl Necklace"
                propWidth="unset"
                propHeight="unset"
                propFlex="1"
                propMinWidth="279px"
                propFlex1="unset"
                propHeight1="unset"
              />
              <div className={styles.alignSelfAuto}>
                <div className={styles.displayNone}>
                  <img
                    className={styles.displayBlockIcon}
                    alt=""
                    src="/rectangle-52-5@2x.png"
                  />
                  <div className={styles.bookmarkFavoriteFavouriteHeContainer}>
                    <div className={styles.bookmarkFavoriteFavouriteHe1}>
                      <img
                        className={styles.positionFixedIcon}
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.positionRelative}>
                  <div className={styles.coralBeads}>Coral Beads</div>
                  <div className={styles.overflowHidden}>
                    <img
                      className={styles.mdinairaIcon2}
                      alt=""
                      src="/mdinaira1.svg"
                    />
                    <div className={styles.overflowScroll}>5,000</div>
                  </div>
                  <div className={styles.whiteSpacePre}>
                    <div className={styles.saleAt1}>{`Sale at `}</div>
                    <div className={styles.boxSizingBorder}>
                      <img
                        className={styles.mdinairaIcon3}
                        alt=""
                        src="/mdinaira-1.svg"
                      />
                      <div className={styles.boxSizingPadding}>17,000</div>
                    </div>
                  </div>
                  <div className={styles.boxSizingMargin}>
                    <b className={styles.addToCart1}>Add to Cart</b>
                    <div className={styles.iconShoppingCart1}>
                      <img
                        className={styles.conditionSplitterIcon}
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <AlignerElement
                containerElement="/rectangle-51-12@2x.png"
                boysCrown="Traditional Wand"
                propWidth="unset"
                propHeight="unset"
                propFlex="1"
                propMinWidth="279px"
                propFlex1="unset"
                propHeight1="unset"
              />
            </div>
          </div>
          <div className={styles.valueModifierParent}>
            <div className={styles.valueModifier}>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-52-6@2x.png"
                />
                <div className={styles.bookmarkFavoriteFavouriteHeFrame}>
                  <div className={styles.bookmarkFavoriteFavouriteHe2}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.antiqueBagParent}>
                <div className={styles.antiqueBag}>Antique Bag</div>
                <div className={styles.mdinairaGroup}>
                  <img
                    className={styles.mdinairaIcon4}
                    alt=""
                    src="/mdinaira1.svg"
                  />
                  <div className={styles.div}>5,000</div>
                </div>
                <div className={styles.saleAtParent}>
                  <div className={styles.saleAt2}>{`Sale at `}</div>
                  <div className={styles.mdinairaContainer}>
                    <img
                      className={styles.mdinairaIcon5}
                      alt=""
                      src="/mdinaira-1.svg"
                    />
                    <div className={styles.div1}>17,000</div>
                  </div>
                </div>
                <div className={styles.addToCartGroup}>
                  <b className={styles.addToCart2}>Add to Cart</b>
                  <div className={styles.iconShoppingCart2}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <AlignerElement
              containerElement="/rectangle-52-7@2x.png"
              boysCrown="Igbo Hand Fan"
              propWidth="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="279px"
              propFlex1="unset"
              propHeight1="unset"
            />
            <div className={styles.valueModifier1}>
              <div className={styles.dataExtractor}>
                <img
                  className={styles.nestedIteratorIcon}
                  alt=""
                  src="/rectangle-52-8@2x.png"
                />
                <div className={styles.valueWrapper}>
                  <div className={styles.bookmarkFavoriteFavouriteHe3}>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.outputCombiner}>
                <div className={styles.antiqueBag1}>Antique Bag</div>
                <div className={styles.conditionalBuilder}>
                  <img
                    className={styles.mdinairaIcon6}
                    alt=""
                    src="/mdinaira1.svg"
                  />
                  <div className={styles.valueReader}>5,000</div>
                </div>
                <div className={styles.saleAtGroup}>
                  <div className={styles.saleAt3}>{`Sale at `}</div>
                  <div className={styles.dataRouter}>
                    <img
                      className={styles.mdinairaIcon7}
                      alt=""
                      src="/mdinaira-1.svg"
                    />
                    <div className={styles.valueCombiner}>17,000</div>
                  </div>
                </div>
                <div className={styles.addToCartContainer}>
                  <b className={styles.addToCart3}>Add to Cart</b>
                  <div className={styles.iconShoppingCart3}>
                    <img
                      className={styles.valueSplitterIcon}
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <AlignerElement
              containerElement="/rectangle-52-9@2x.png"
              boysCrown="Hausa Chief Turban"
              propWidth="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="279px"
              propFlex1="unset"
              propHeight1="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoopControl;
