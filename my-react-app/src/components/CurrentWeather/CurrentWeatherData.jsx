import styles from "./CurrentWeather.module.css";

const CurrentWeatherData = ({ data }) => {
  return (
    <div className={styles.currentWeatherText}>
      <div>
        <div className={styles.address}>
          <h2>{data.resolvedAddress}</h2>
        </div>
        <h1>
          {Math.floor((data.currentConditions.temp - 32) / 1.8)}
          &deg;C
        </h1>
        <h3>{data.currentConditions.conditions}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherData;
