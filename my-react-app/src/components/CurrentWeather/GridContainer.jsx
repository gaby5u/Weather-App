import styles from "./GridContainer.module.css";

const GridContainer = ({ gridData }) => {
  return (
    <div className={styles.gridCnt}>
      <div className={styles.iconTitle}>
        {gridData.icon}
        <p>{gridData.title}</p>
      </div>
      <h2>{gridData.statistic}</h2>
      <h4>{gridData.description}</h4>
    </div>
  );
};

export default GridContainer;
