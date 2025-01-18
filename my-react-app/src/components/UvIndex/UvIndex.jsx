import style from "./UvIndex.module.css";
import styles from "../Forecast/Forecast.module.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const UvIndex = () => {
  const { weatherData, selectedDayWeather } = useSelector(
    (state) => state.weather
  );
  const [uvIndex, setUvIndex] = useState("");
  const [uvIntensity, setUvIntensity] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  useEffect(() => {
    if (weatherData && selectedDayWeather === null) {
      setUvIndex(weatherData.currentConditions.uvindex);
      setSunrise(weatherData.currentConditions.sunrise);
      setSunset(weatherData.currentConditions.sunset);
    } else if (selectedDayWeather !== null) {
      setUvIndex(selectedDayWeather.uvindex);
      setSunrise(selectedDayWeather.sunrise);
      setSunset(selectedDayWeather.sunset);
    }
  }, [weatherData, selectedDayWeather]);

  useEffect(() => {
    switch (true) {
      case uvIndex >= 0 && uvIndex <= 2:
        setUvIntensity("Low");
        break;
      case uvIndex >= 3 && uvIndex <= 5:
        setUvIntensity("Moderate");
        break;
      case uvIndex >= 6 && uvIndex <= 7:
        setUvIntensity("High");
        break;
      case uvIndex >= 8 && uvIndex <= 10:
        setUvIntensity("Very High");
        break;
      case uvIndex >= 11:
        setUvIntensity("Extreme");
        break;
      default:
        setUvIntensity("Unknown");
    }
  }, [uvIndex]);

  return (
    weatherData && (
      <div className={styles.uvWindCnt}>
        <div className={styles.title}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="18pt"
            height="18pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#777777"
              stroke="none"
            >
              <path
                d="M2115 5104 c-40 -7 -111 -34 -165 -60 -79 -39 -110 -62 -181 -133
-71 -71 -94 -102 -133 -181 -80 -163 -76 -87 -76 -1515 l0 -1264 -60 -57
c-318 -303 -423 -768 -266 -1184 129 -345 436 -607 804 -687 97 -22 328 -24
427 -4 224 44 418 150 580 316 428 439 417 1138 -25 1559 l-60 57 0 1265 c0
1426 4 1348 -76 1512 -140 287 -451 439 -769 376z m247 -195 c92 -19 177 -67
249 -138 71 -72 119 -157 138 -249 8 -37 11 -443 11 -1350 1 -998 4 -1302 13
-1318 7 -12 40 -45 75 -74 126 -105 238 -285 284 -455 31 -115 30 -336 -1
-450 -86 -317 -329 -561 -646 -646 -105 -29 -325 -32 -428 -6 -328 82 -580
328 -668 652 -32 114 -32 335 -1 450 47 174 163 358 289 460 32 26 63 57 70
69 9 16 12 320 13 1318 0 907 3 1313 11 1350 38 182 191 340 372 384 66 16
152 17 219 3z"
              />
              <path
                d="M2211 4506 c-53 -29 -50 45 -51 -1488 l0 -1426 -56 -18 c-197 -62
-344 -264 -344 -474 0 -270 230 -500 500 -500 230 0 442 172 489 398 51 244
-91 493 -328 573 l-61 21 0 1423 c0 1083 -3 1430 -12 1450 -22 48 -88 68 -137
41z"
              />
              <path
                d="M3211 4706 c-47 -26 -63 -84 -37 -135 26 -49 42 -51 387 -51 347 0
363 2 387 55 23 51 7 107 -39 131 -39 20 -662 20 -698 0z"
              />
              <path
                d="M3211 4106 c-47 -26 -63 -84 -37 -135 25 -47 49 -51 287 -51 239 0
264 5 287 55 23 51 7 107 -39 131 -39 20 -462 20 -498 0z"
              />
              <path
                d="M3211 3506 c-47 -26 -63 -84 -37 -135 26 -49 42 -51 387 -51 347 0
363 2 387 55 23 51 7 107 -39 131 -39 20 -662 20 -698 0z"
              />
              <path
                d="M3211 2906 c-47 -26 -63 -84 -37 -135 25 -47 49 -51 287 -51 239 0
264 5 287 55 23 51 7 107 -39 131 -39 20 -462 20 -498 0z"
              />
              <path
                d="M3211 2306 c-47 -26 -63 -84 -37 -135 26 -49 42 -51 387 -51 347 0
363 2 387 55 23 51 7 107 -39 131 -39 20 -662 20 -698 0z"
              />
            </g>
          </svg>
          <h4>uv index</h4>
        </div>
        <hr />
        <div className={style.sunDataCnt}>
          <h3>
            <span>{uvIndex}</span> - {uvIntensity + " risk of UV damage"}
          </h3>
          <div className={style.sunCnt}>
            <p>Sunrise at {sunrise}</p>
            <p>Sunset at {sunset}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default UvIndex;
