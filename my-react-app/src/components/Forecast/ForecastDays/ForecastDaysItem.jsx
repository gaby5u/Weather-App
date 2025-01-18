import styles from "../ForecastItem.module.css";
import setIcons from "../../../functions/setIcons";

const ForecastItem = ({ dayData, onClick, isActive, index }) => {
  const dayMiliseconds = new Date(dayData.datetime);
  const dayOfWeekNr = dayMiliseconds.getDay();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[dayOfWeekNr];

  const splitArray = dayData.datetime.split("-");
  const reverseArray = splitArray.reverse();
  const reversedDate = reverseArray.join("/");
  return (
    <div
      className={`${styles.itemCnt} ${
        isActive ? styles.itemCntActive : styles.itemCnt
      }`}
      onClick={onClick}
    >
      {index === 0 ? <p>Today</p> : <p>{dayOfWeek}</p>}
      <p>{reversedDate.slice(0, -5)}</p>
      <h2>{Math.floor((dayData.temp - 32) / 1.8)}&deg;C</h2>
      <div className={styles.icon}>{setIcons(dayData.icon)}</div>
    </div>
  );
};

export default ForecastItem;
