import styles from "../ForecastItem.module.css";
import setIcons from "../../../functions/setIcons";

const ForecastItem = ({ dataHour, isActive, index }) => {
  return (
    <div
      className={`${styles.itemCntHours} ${
        isActive ? styles.itemCntActive : styles.itemCntHours
      }`}
    >
      {index === 0 ? (
        <p>Now</p>
      ) : (
        <p>{parseInt(dataHour.datetime.split(":"))}:00</p>
      )}
      <h2>{Math.floor((dataHour.temp - 32) / 1.8)}&deg;C</h2>
      <div className={styles.icon}>{setIcons(dataHour.icon)}</div>
    </div>
  );
};

export default ForecastItem;
