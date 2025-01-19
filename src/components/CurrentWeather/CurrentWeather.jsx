import { useEffect, useState } from "react";
import GridContainer from "./GridContainer";

import { useSelector, useDispatch } from "react-redux";
import getGeolocation from "../../functions/getGeolocation";
import setBackgroundImg from "../../functions/setBackgroundImg";
import { clearError } from "../../redux/WeatherSlice";
import { preloadImages } from "../../functions/setBackgroundImg";

import styles from "./CurrentWeather.module.css";
import "../../generalStyling.css";
import CurrentWeatherData from "./CurrentWeatherData";
import selectedDayWeatherStat from "./WeatherStats/SelectedWeatherStat";
import currentWeatherStat from "./WeatherStats/CurrentWeatherStat";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const { weatherData, selectedDayWeather, loading, error } = useSelector(
    (state) => state.weather
  );
  const [bgImage, setBgImage] = useState(null);
  const [gridContainersData, setGridContainersData] = useState([]);

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    getGeolocation(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (selectedDayWeather) {
      setGridContainersData(selectedDayWeatherStat(selectedDayWeather));
      setBgImage({
        backgroundImage: setBackgroundImg(selectedDayWeather.icon),
      });
    } else if (weatherData?.currentConditions) {
      setGridContainersData(currentWeatherStat(weatherData));
      setBgImage({
        backgroundImage: setBackgroundImg(weatherData.currentConditions.icon),
      });
    }
  }, [selectedDayWeather, weatherData]);

  const handleDismissError = () => {
    dispatch(clearError());
  };

  return error !== null && error !== "Location not found. Check for typos!" ? (
    <div className={styles.fetchingErrorCnt}>
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    </div>
  ) : (
    <div>
      {loading && (
        <div className={styles.loadingModule}>
          <p>Loading...</p>
        </div>
      )}
      {error === "Location not found. Check for typos!" && (
        <div className={styles.errorModule}>
          <p>{error}</p>
          <button onClick={handleDismissError}>Dismiss</button>
        </div>
      )}
      {weatherData?.currentConditions ? (
        <div className={styles.currentWeatherCnt} style={bgImage}>
          {selectedDayWeather ? (
            <div className={styles.currentWeatherText}>
              <div className={styles.address}>
                <h2>{weatherData.resolvedAddress}</h2>
              </div>
              <h1>{Math.floor((selectedDayWeather.temp - 32) / 1.8)}&deg;C</h1>
              <h3>{selectedDayWeather.conditions}</h3>
              <p>{selectedDayWeather.description}</p>
            </div>
          ) : (
            <CurrentWeatherData data={weatherData} />
          )}
          {gridContainersData.length > 0 ? (
            <div className={styles.gridCurrentWeather}>
              {gridContainersData.map((gridContainerData) => (
                <GridContainer
                  key={gridContainerData.id}
                  gridData={gridContainerData}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CurrentWeather;
