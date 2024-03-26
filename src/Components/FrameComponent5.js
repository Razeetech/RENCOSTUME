import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AlignerElement from "./AlignerElement";
import styles from "./FrameComponent51.module.css";

const FrameComponent51 = () => {
  const navigate = useNavigate();

  const onAddToCartClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <h3 className={styles.filters}>Filters</h3>
              <div className={styles.lineWrapper}>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.genderParent}>
                  <div className={styles.gender}>Gender</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.spinnerButtonWrapper}>
                      <div className={styles.spinnerButton} />
                    </div>
                    <div className={styles.male}>Male</div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameInner} />
                    </div>
                    <div className={styles.female}>Female</div>
                  </div>
                </div>
                <img
                  className={styles.riarrowDropDownLineIcon}
                  loading="lazy"
                  alt=""
                  src="/riarrowdropdownline.svg"
                />
              </div>
              <div className={styles.lineContainer}>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.centuryParent}>
                  <div className={styles.century}>Century</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent5}>
                      <div className={styles.ellipseContainer}>
                        <div className={styles.ellipseDiv} />
                      </div>
                      <div className={styles.th}>18th</div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div className={styles.ellipseFrame}>
                        <div className={styles.frameChild1} />
                      </div>
                      <div className={styles.th1}>19th</div>
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.ellipseWrapper1}>
                        <div className={styles.frameChild2} />
                      </div>
                      <div className={styles.th2}>20th</div>
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.ellipseWrapper2}>
                        <div className={styles.frameChild3} />
                      </div>
                      <div className={styles.st}>21st</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.riarrowDropDownLineIcon1}
                  alt=""
                  src="/riarrowdropdownline-11.svg"
                />
              </div>
              <div className={styles.lineFrame}>
                <div className={styles.frameChild4} />
              </div>
              <div className={styles.valueTransformer}>
                <div className={styles.inputFilter}>
                  <div className={styles.ethnicity}>Ethnicity</div>
                  <div className={styles.errorHandler}>
                    <div className={styles.sequenceController}>
                      <div className={styles.sequenceControllerInner}>
                        <div className={styles.frameChild5} />
                      </div>
                      <div className={styles.yoruba}>Yoruba</div>
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.ellipseWrapper3}>
                        <div className={styles.frameChild6} />
                      </div>
                      <div className={styles.igbo}>Igbo</div>
                    </div>
                    <div className={styles.sequenceController1}>
                      <div className={styles.sequenceControllerChild}>
                        <div className={styles.frameChild7} />
                      </div>
                      <div className={styles.hausa}>Hausa</div>
                    </div>
                    <div className={styles.dataAggregator}>
                      <div className={styles.dataAggregatorInner}>
                        <div className={styles.frameChild8} />
                      </div>
                      <div className={styles.edo}>Edo</div>
                    </div>
                    <div className={styles.sequenceController2}>
                      <div className={styles.sequenceControllerInner1}>
                        <div className={styles.frameChild9} />
                      </div>
                      <div className={styles.ijaw}>Ijaw</div>
                    </div>
                    <div className={styles.sequenceController3}>
                      <div className={styles.collapsiblePanelWrapper}>
                        <div className={styles.collapsiblePanel} />
                      </div>
                      <div className={styles.ibiobio}>Ibiobio</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.riarrowDropDownLineIcon2}
                  alt=""
                  src="/riarrowdropdownline.svg"
                />
              </div>
              <div className={styles.lineWrapper1}>
                <div className={styles.frameChild10} />
              </div>
              <div className={styles.timer}>
                <div className={styles.queueManager}>
                  <div className={styles.role}>Role</div>
                  <div className={styles.messageRouters}>
                    <div className={styles.signalProcessor}>
                      <div className={styles.signalProcessorInner}>
                        <div className={styles.frameChild11} />
                      </div>
                      <div className={styles.dancer}>Dancer</div>
                    </div>
                    <div className={styles.frameParent10}>
                      <div className={styles.ellipseWrapper4}>
                        <div className={styles.frameChild12} />
                      </div>
                      <div className={styles.singer}>Singer</div>
                    </div>
                    <div className={styles.signalProcessor1}>
                      <div className={styles.signalProcessorChild}>
                        <div className={styles.frameChild13} />
                      </div>
                      <div className={styles.gods}>Gods</div>
                    </div>
                    <div className={styles.signalProcessor2}>
                      <div className={styles.signalProcessorInner1}>
                        <div className={styles.frameChild14} />
                      </div>
                      <div className={styles.pastor}>Pastor</div>
                    </div>
                    <div className={styles.signalProcessor3}>
                      <div className={styles.signalProcessorInner2}>
                        <div className={styles.frameChild15} />
                      </div>
                      <div className={styles.alfa}>Alfa</div>
                    </div>
                    <div className={styles.signalProcessor4}>
                      <div className={styles.signalProcessorInner3}>
                        <div className={styles.frameChild16} />
                      </div>
                      <div className={styles.herbalist}>Herbalist</div>
                    </div>
                    <div className={styles.signalProcessor5}>
                      <div className={styles.signalProcessorInner4}>
                        <div className={styles.frameChild17} />
                      </div>
                      <div className={styles.vocationalWorker}>
                        Vocational Worker
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.ellipseWrapper5}>
                        <div className={styles.frameChild18} />
                      </div>
                      <div className={styles.others}>Others</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.riarrowDropDownLineIcon3}
                  alt=""
                  src="/riarrowdropdownline.svg"
                />
              </div>
            </div>
            <div className={styles.subtractor}>
              <div className={styles.multiplicativeInverter}>
                <div className={styles.noiseGenerator}>
                  <div className={styles.clothing}>Clothing</div>
                  <div className={styles.accessories}>Accessories</div>
                </div>
                <div className={styles.selectOptionParent}>
                  <div className={styles.imageCarouselParentParent}>
                    <img
                      className={styles.imageCarouselParent}
                      alt=""
                      src="/image-carousel-parent@2x.png"
                    />
                    <div className={styles.bookmarkFavoriteFavouriteHeWrapper}>
                      <div className={styles.bookmarkFavoriteFavouriteHe}>
                        <img
                          className={styles.dataRowHeader}
                          loading="lazy"
                          alt=""
                          src="/vector11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputValidationError}>
                    <div className={styles.ethiopianCrown}>Ethiopian Crown</div>
                    <div className={styles.progressStep}>
                      <img
                        className={styles.mdinairaIcon}
                        alt=""
                        src="/mdinaira1.svg"
                      />
                      <div className={styles.searchIconButton}>5,000</div>
                    </div>
                    <div className={styles.formFieldHelpIcon}>
                      <div className={styles.saleAt}>{`Sale at `}</div>
                      <div className={styles.tabNavigationButton}>
                        <img
                          className={styles.mdinairaIcon1}
                          alt=""
                          src="/mdinaira-1.svg"
                        />
                        <div className={styles.shapeAssembler}>17,000</div>
                      </div>
                    </div>
                    <div className={styles.addToCartParent}>
                      <b
                        className={styles.addToCart}
                        onClick={onAddToCartClick}
                      >
                        Add to Cart
                      </b>
                      <div className={styles.iconShoppingCart}>
                        <img
                          className={styles.positionAdjustorIcon}
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.additiveInverter}>
                  <div className={styles.rectangleGroup}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle-52@2x.png"
                    />
                    <div
                      className={styles.bookmarkFavoriteFavouriteHeContainer}
                    >
                      <div className={styles.bookmarkFavoriteFavouriteHe1}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.durbarTurbanParent}>
                    <div className={styles.durbarTurban}>Durbar Turban</div>
                    <div className={styles.mdinairaParent}>
                      <img
                        className={styles.mdinairaIcon2}
                        alt=""
                        src="/mdinaira1.svg"
                      />
                      <div className={styles.div}>5,000</div>
                    </div>
                    <div className={styles.saleAtParent}>
                      <div className={styles.saleAt1}>{`Sale at `}</div>
                      <div className={styles.mdinairaGroup}>
                        <img
                          className={styles.mdinairaIcon3}
                          alt=""
                          src="/mdinaira-1.svg"
                        />
                        <div className={styles.div1}>17,000</div>
                      </div>
                    </div>
                    <div className={styles.addToCartGroup}>
                      <b className={styles.addToCart1}>Add to Cart</b>
                      <div className={styles.iconShoppingCart1}>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.selectOptionParent1}>
                  <div className={styles.rectangleContainer}>
                    <img
                      className={styles.frameChild19}
                      alt=""
                      src="/rectangle-51-1@2x.png"
                    />
                    <div className={styles.bookmarkFavoriteFavouriteHeFrame}>
                      <div className={styles.bookmarkFavoriteFavouriteHe2}>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.igboKingCrownParent}>
                    <div className={styles.igboKingCrown}>Igbo King Crown</div>
                    <div className={styles.mdinairaContainer}>
                      <img
                        className={styles.mdinairaIcon4}
                        alt=""
                        src="/mdinaira1.svg"
                      />
                      <div className={styles.div2}>5,000</div>
                    </div>
                    <div className={styles.saleAtGroup}>
                      <div className={styles.saleAt2}>{`Sale at `}</div>
                      <div className={styles.mdinairaParent1}>
                        <img
                          className={styles.mdinairaIcon5}
                          alt=""
                          src="/mdinaira-1.svg"
                        />
                        <div className={styles.div3}>17,000</div>
                      </div>
                    </div>
                    <div className={styles.addToCartContainer}>
                      <b className={styles.addToCart2}>Add to Cart</b>
                      <div className={styles.iconShoppingCart2}>
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.selectOptionParent2}>
                  <div className={styles.rectangleParent1}>
                    <img
                      className={styles.frameChild20}
                      alt=""
                      src="/rectangle-51-2@2x.png"
                    />
                    <div className={styles.bookmarkFavoriteFavouriteHeWrapper1}>
                      <div className={styles.bookmarkFavoriteFavouriteHe3}>
                        <img
                          className={styles.vectorIcon4}
                          alt=""
                          src="/vector11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.yorubaKingCrownParent}>
                    <div className={styles.yorubaKingCrown}>
                      Yoruba King Crown
                    </div>
                    <div className={styles.mdinairaParent2}>
                      <img
                        className={styles.mdinairaIcon6}
                        alt=""
                        src="/mdinaira1.svg"
                      />
                      <div className={styles.div4}>5,000</div>
                    </div>
                    <div className={styles.saleAtContainer}>
                      <div className={styles.saleAt3}>{`Sale at `}</div>
                      <div className={styles.mdinairaParent3}>
                        <img
                          className={styles.mdinairaIcon7}
                          alt=""
                          src="/mdinaira-1.svg"
                        />
                        <div className={styles.div5}>17,000</div>
                      </div>
                    </div>
                    <div className={styles.addToCartParent1}>
                      <b className={styles.addToCart3}>Add to Cart</b>
                      <div className={styles.iconShoppingCart3}>
                        <img
                          className={styles.vectorIcon5}
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.selectOptionParent3}>
                  <div className={styles.rectangleParent2}>
                    <img
                      className={styles.frameChild21}
                      alt=""
                      src="/rectangle-51-3@2x.png"
                    />
                    <div className={styles.bookmarkFavoriteFavouriteHeWrapper2}>
                      <div className={styles.bookmarkFavoriteFavouriteHe4}>
                        <img
                          className={styles.vectorIcon6}
                          alt=""
                          src="/vector11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.flowerCrownParent}>
                    <div className={styles.flowerCrown}>Flower Crown</div>
                    <div className={styles.mdinairaParent4}>
                      <img
                        className={styles.mdinairaIcon8}
                        alt=""
                        src="/mdinaira1.svg"
                      />
                      <div className={styles.div6}>5,000</div>
                    </div>
                    <div className={styles.saleAtParent1}>
                      <div className={styles.saleAt4}>{`Sale at `}</div>
                      <div className={styles.mdinairaParent5}>
                        <img
                          className={styles.mdinairaIcon9}
                          alt=""
                          src="/mdinaira-1.svg"
                        />
                        <div className={styles.div7}>17,000</div>
                      </div>
                    </div>
                    <div className={styles.addToCartParent2}>
                      <b className={styles.addToCart4}>Add to Cart</b>
                      <div className={styles.iconShoppingCart4}>
                        <img
                          className={styles.vectorIcon7}
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.signalAttenuator}>
          <div className={styles.signalMixer}>
            <div className={styles.formField}>
              <div className={styles.dropdownMenu}>
                <div className={styles.footwears}>Footwears</div>
                <b className={styles.hairAttires}>Hair Attires</b>
              </div>
            </div>
            <div className={styles.signalSpectrumAnalyzer}>
              <div className={styles.triangleBuilderParent}>
                <div className={styles.triangleBuilder}>
                  <img
                    className={styles.starGeneratorIcon}
                    alt=""
                    src="/rectangle-51-4@2x.png"
                  />
                  <div className={styles.bookmarkFavoriteFavouriteHeWrapper3}>
                    <div className={styles.bookmarkFavoriteFavouriteHe5}>
                      <img
                        className={styles.linkConnectorIcon}
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.dividerElement}>
                  <div className={styles.hausaChiefTurban}>
                    Hausa Chief Turban
                  </div>
                  <div className={styles.mdinairaParent6}>
                    <img
                      className={styles.mdinairaIcon10}
                      alt=""
                      src="/mdinaira1.svg"
                    />
                    <div className={styles.div8}>5,000</div>
                  </div>
                  <div className={styles.addToCartParent3}>
                    <b className={styles.addToCart5}>Add to Cart</b>
                    <div className={styles.iconShoppingCart5}>
                      <img
                        className={styles.blurEffectProducer}
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.signalSpectrumAnalyzer1}>
              <div className={styles.frameParent12}>
                <div className={styles.rectangleParent3}>
                  <img
                    className={styles.frameChild22}
                    alt=""
                    src="/rectangle-52-1@2x.png"
                  />
                  <div className={styles.bookmarkFavoriteFavouriteHeWrapper4}>
                    <div className={styles.bookmarkFavoriteFavouriteHe6}>
                      <img
                        className={styles.vectorIcon8}
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.cleopatraHeadpieceParent}>
                  <div className={styles.cleopatraHeadpiece}>
                    Cleopatra Headpiece
                  </div>
                  <div className={styles.mdinairaParent7}>
                    <img
                      className={styles.mdinairaIcon11}
                      alt=""
                      src="/mdinaira1.svg"
                    />
                    <div className={styles.div9}>5,000</div>
                  </div>
                  <div className={styles.addedParent}>
                    <b className={styles.added}>Added</b>
                    <div className={styles.materialSymbolsdone}>
                      <img
                        className={styles.vectorIcon9}
                        alt=""
                        src="/vector-13.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.signalSpectrumAnalyzer2}>
              <div className={styles.frameParent13}>
                <div className={styles.rectangleParent4}>
                  <img
                    className={styles.frameChild23}
                    alt=""
                    src="/rectangle-51-5@2x.png"
                  />
                  <div className={styles.flatColorIconslikeWrapper}>
                    <div className={styles.flatColorIconslike}>
                      <img
                        className={styles.vectorIcon10}
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.nefetitiCrownParent}>
                  <div className={styles.nefetitiCrown}>Nefetiti Crown</div>
                  <div className={styles.mdinairaParent8}>
                    <img
                      className={styles.mdinairaIcon12}
                      alt=""
                      src="/mdinaira1.svg"
                    />
                    <div className={styles.div10}>5,000</div>
                  </div>
                  <div className={styles.addToCartParent4}>
                    <b className={styles.addToCart6}>Add to Cart</b>
                    <div className={styles.iconShoppingCart6}>
                      <img
                        className={styles.vectorIcon11}
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.signalSpectrumAnalyzer3}>
              <div className={styles.frameParent14}>
                <div className={styles.rectangleParent5}>
                  <img
                    className={styles.frameChild24}
                    alt=""
                    src="/rectangle-51-6@2x.png"
                  />
                  <div className={styles.bookmarkFavoriteFavouriteHeWrapper5}>
                    <div className={styles.bookmarkFavoriteFavouriteHe7}>
                      <img
                        className={styles.vectorIcon12}
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.bririshKingCrownParent}>
                  <div className={styles.bririshKingCrown}>
                    Brirish King Crown
                  </div>
                  <div className={styles.mdinairaParent9}>
                    <img
                      className={styles.mdinairaIcon13}
                      alt=""
                      src="/mdinaira1.svg"
                    />
                    <div className={styles.div11}>5,000</div>
                  </div>
                  <div className={styles.addToCartParent5}>
                    <b className={styles.addToCart7}>Add to Cart</b>
                    <div className={styles.iconShoppingCart7}>
                      <img
                        className={styles.vectorIcon13}
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AlignerElement
              containerElement="/rectangle-51-7@2x.png"
              boysCrown="Boys Crown"
            />
          </div>
        </div>
        <div className={styles.alert}>
          <div className={styles.logicBranchParent}>
            <div className={styles.logicBranch}>
              <b className={styles.recentlyViewed}>Recently Viewed</b>
            </div>
            <img
              className={styles.riarrowDropDownLineIcon4}
              alt=""
              src="/riarrowdropdownline-4.svg"
            />
          </div>
          <div className={styles.imageContainerElement}>
            <div className={styles.linkConnectorElement}>
              <img
                className={styles.dividerElementIcon}
                alt=""
                src="/rectangle-51-8@2x.png"
              />
              <div className={styles.bookmarkFavoriteFavouriteHeWrapper6}>
                <div className={styles.bookmarkFavoriteFavouriteHe8}>
                  <img
                    className={styles.dataProcessorIcon}
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.nefertitiWovenCrownParent}>
              <div className={styles.nefertitiWovenCrown}>
                Nefertiti Woven Crown
              </div>
              <div className={styles.stringAssembler}>
                <img
                  className={styles.mdinairaIcon14}
                  alt=""
                  src="/mdinaira1.svg"
                />
                <div className={styles.inputFilter1}>5,000</div>
              </div>
              <div className={styles.outputFormater}>
                <div className={styles.saleAt5}>{`Sale at `}</div>
                <div className={styles.mdinairaParent10}>
                  <img
                    className={styles.mdinairaIcon15}
                    alt=""
                    src="/mdinaira-1.svg"
                  />
                  <div className={styles.div12}>17,000</div>
                </div>
              </div>
              <div className={styles.addedGroup}>
                <b className={styles.added1}>Added</b>
                <div className={styles.materialSymbolsdone1}>
                  <img
                    className={styles.vectorIcon14}
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainerElement1}>
            <div className={styles.rectangleParent6}>
              <img
                className={styles.frameChild25}
                alt=""
                src="/rectangle-52-2@2x.png"
              />
              <div className={styles.flatColorIconslikeContainer}>
                <div className={styles.flatColorIconslike1}>
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector-14.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.zuluBasketHatParent}>
              <div className={styles.zuluBasketHat}>Zulu Basket Hat</div>
              <div className={styles.mdinairaParent11}>
                <img
                  className={styles.mdinairaIcon16}
                  alt=""
                  src="/mdinaira1.svg"
                />
                <div className={styles.div13}>5,000</div>
              </div>
              <div className={styles.saleAtParent2}>
                <div className={styles.saleAt6}>{`Sale at `}</div>
                <div className={styles.mdinairaParent12}>
                  <img
                    className={styles.mdinairaIcon17}
                    alt=""
                    src="/mdinaira-1.svg"
                  />
                  <div className={styles.div14}>17,000</div>
                </div>
              </div>
              <div className={styles.addedContainer}>
                <b className={styles.added2}>Added</b>
                <div className={styles.materialSymbolsdone2}>
                  <img
                    className={styles.vectorIcon16}
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainerElement2}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild26}
                alt=""
                src="/rectangle-51-9@2x.png"
              />
              <div className={styles.bookmarkFavoriteFavouriteHeWrapper7}>
                <div className={styles.bookmarkFavoriteFavouriteHe9}>
                  <img
                    className={styles.vectorIcon17}
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.yorubaKingCrownGroup}>
              <div className={styles.yorubaKingCrown1}>Yoruba King Crown</div>
              <div className={styles.mdinairaParent13}>
                <img
                  className={styles.mdinairaIcon18}
                  alt=""
                  src="/mdinaira1.svg"
                />
                <div className={styles.div15}>5,000</div>
              </div>
              <div className={styles.saleAtParent3}>
                <div className={styles.saleAt7}>{`Sale at `}</div>
                <div className={styles.mdinairaParent14}>
                  <img
                    className={styles.mdinairaIcon19}
                    alt=""
                    src="/mdinaira-1.svg"
                  />
                  <div className={styles.div16}>17,000</div>
                </div>
              </div>
              <div className={styles.addToCartParent6}>
                <b className={styles.addToCart8}>Add to Cart</b>
                <div className={styles.iconShoppingCart8}>
                  <img
                    className={styles.vectorIcon18}
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainerElement3}>
            <div className={styles.vectorGroup}>
              <img
                className={styles.frameChild27}
                alt=""
                src="/rectangle-51-10@2x.png"
              />
              <div className={styles.bookmarkFavoriteFavouriteHeWrapper8}>
                <div className={styles.bookmarkFavoriteFavouriteHe10}>
                  <img
                    className={styles.vectorIcon19}
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.efikHeaddressParent}>
              <div className={styles.efikHeaddress}>Efik Headdress</div>
              <div className={styles.mdinairaParent15}>
                <img
                  className={styles.mdinairaIcon20}
                  alt=""
                  src="/mdinaira1.svg"
                />
                <div className={styles.div17}>5,000</div>
              </div>
              <div className={styles.saleAtParent4}>
                <div className={styles.saleAt8}>{`Sale at `}</div>
                <div className={styles.mdinairaParent16}>
                  <img
                    className={styles.mdinairaIcon21}
                    alt=""
                    src="/mdinaira-1.svg"
                  />
                  <div className={styles.div18}>17,000</div>
                </div>
              </div>
              <div className={styles.addToCartParent7}>
                <b className={styles.addToCart9}>Add to Cart</b>
                <div className={styles.iconShoppingCart9}>
                  <img
                    className={styles.vectorIcon20}
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainerElement4}>
            <div className={styles.vectorContainer}>
              <img
                className={styles.frameChild28}
                alt=""
                src="/rectangle-51-11@2x.png"
              />
              <div className={styles.bookmarkFavoriteFavouriteHeWrapper9}>
                <div className={styles.bookmarkFavoriteFavouriteHe11}>
                  <img
                    className={styles.vectorIcon21}
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.fedoraHatParent}>
              <div className={styles.fedoraHat}>Fedora Hat</div>
              <div className={styles.mdinairaParent17}>
                <img
                  className={styles.mdinairaIcon22}
                  alt=""
                  src="/mdinaira1.svg"
                />
                <div className={styles.div19}>5,000</div>
              </div>
              <div className={styles.saleAtParent5}>
                <div className={styles.saleAt9}>{`Sale at `}</div>
                <div className={styles.mdinairaParent18}>
                  <img
                    className={styles.mdinairaIcon23}
                    alt=""
                    src="/mdinaira-1.svg"
                  />
                  <div className={styles.div20}>17,000</div>
                </div>
              </div>
              <div className={styles.addToCartParent8}>
                <b className={styles.addToCart10}>Add to Cart</b>
                <div className={styles.iconShoppingCart10}>
                  <img
                    className={styles.vectorIcon22}
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent51;
