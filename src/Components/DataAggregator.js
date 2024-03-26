import { useMemo } from "react";
import styles from "./DataAggregator.module.css";

const DataAggregator = ({
  group,
  variety,
  diveIntoOurCostumeVaultFi,
  propPadding,
  propPadding1,
  propPadding2,
}) => {
  const dataAggregatorStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const outputCollectorStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const personOpportunitiesChoicesIStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={styles.dataAggregator} style={dataAggregatorStyle}>
      <div className={styles.inputFilter}>
        <div className={styles.outputCollector} style={outputCollectorStyle}>
          <div
            className={styles.personOpportunitiesChoicesI}
            style={personOpportunitiesChoicesIStyle}
          >
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src={group}
            />
          </div>
        </div>
        <div className={styles.varietyParent}>
          <div className={styles.variety}>{variety}</div>
          <div className={styles.diveIntoOur}>{diveIntoOurCostumeVaultFi}</div>
        </div>
      </div>
    </div>
  );
};

export default DataAggregator;
