import style from "./Wind.module.css";
import styles from "../Forecast/Forecast.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Wind = () => {
  const { weatherData, selectedDayWeather } = useSelector(
    (state) => state.weather
  );
  const [windGust, setWindGust] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [windDirName, setWindDirName] = useState("");
  const [windDirNum, setWindDirNum] = useState(0);

  useEffect(() => {
    if (weatherData && selectedDayWeather === null) {
      setWindGust(weatherData.currentConditions.windgust);
      setWindSpeed(weatherData.currentConditions.windspeed);
      setWindDirNum(Number(weatherData.currentConditions.winddir));
    } else if (weatherData && selectedDayWeather !== null) {
      setWindGust(selectedDayWeather.windgust);
      setWindSpeed(selectedDayWeather.windspeed);
      setWindDirNum(Number(selectedDayWeather.winddir));
    }
  }, [weatherData, selectedDayWeather]);

  useEffect(() => {
    if (windDirNum >= 0 && windDirNum < 22.5) setWindDirName("North (N)");
    else if (windDirNum >= 22.5 && windDirNum < 67.5)
      setWindDirName("Northeast (NE)");
    else if (windDirNum >= 67.5 && windDirNum < 112.5)
      setWindDirName("East (E)");
    else if (windDirNum >= 112.5 && windDirNum < 157.5)
      setWindDirName("Southeast (SE)");
    else if (windDirNum >= 157.5 && windDirNum < 202.5)
      setWindDirName("South (S)");
    else if (windDirNum >= 202.5 && windDirNum < 247.5)
      setWindDirName("Southwest (SW)");
    else if (windDirNum >= 247.5 && windDirNum < 292.5)
      setWindDirName("West (W)");
    else if (windDirNum >= 292.5 && windDirNum < 337.5)
      setWindDirName("Northwest (NW)");
    else setWindDirName("not found");
  }, [weatherData, selectedDayWeather]);

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
                d="M2560 4470 c-93 -11 -144 -26 -235 -70 -216 -104 -363 -312 -394
-556 -13 -101 -2 -147 42 -191 59 -60 150 -62 209 -6 42 40 47 51 57 142 17
154 98 272 229 334 62 30 75 32 172 32 97 0 110 -2 172 -32 85 -40 151 -106
191 -191 30 -62 32 -75 32 -172 0 -97 -2 -110 -32 -172 -40 -85 -106 -151
-191 -191 l-67 -32 -755 -5 c-548 -4 -760 -8 -775 -17 -141 -82 -104 -278 56
-298 30 -3 374 -5 764 -2 787 4 766 2 910 72 148 71 269 192 340 340 46 95 67
191 67 305 0 114 -21 210 -67 305 -132 276 -424 439 -725 405z"
              />
              <path
                d="M4160 3830 c-93 -11 -144 -26 -235 -70 -216 -104 -363 -312 -394
-556 -13 -101 -2 -147 42 -191 59 -60 150 -62 209 -6 42 40 47 51 57 142 17
154 98 272 229 334 62 30 75 32 172 32 97 0 110 -2 172 -32 85 -40 151 -106
191 -191 30 -62 32 -75 32 -172 0 -97 -2 -110 -32 -172 -40 -85 -106 -151
-191 -191 l-67 -32 -2035 -5 c-1522 -4 -2040 -8 -2055 -17 -141 -82 -104 -279
56 -298 30 -3 950 -5 2044 -3 1862 3 1994 5 2055 21 151 41 300 139 390 255
103 134 152 275 152 442 0 114 -21 210 -67 305 -132 276 -424 439 -725 405z"
              />
              <path
                d="M761 2070 c-45 -11 -100 -68 -111 -113 -15 -69 19 -142 85 -180 15
-9 380 -13 1415 -17 l1395 -5 67 -32 c85 -40 151 -106 191 -191 30 -62 32 -75
32 -172 0 -97 -2 -110 -32 -172 -40 -85 -106 -151 -191 -191 -62 -30 -75 -32
-172 -32 -97 0 -110 2 -172 32 -131 62 -212 181 -229 334 -10 91 -15 102 -57
142 -59 56 -150 54 -209 -6 -44 -44 -55 -90 -42 -191 37 -298 256 -544 544
-612 90 -21 240 -21 330 0 255 60 471 276 531 531 21 90 21 240 0 330 -48 201
-192 381 -381 475 -162 80 -44 74 -1585 76 -756 1 -1390 -1 -1409 -6z"
              />
            </g>
          </svg>
          <h4>wind</h4>
        </div>
        <hr />
        <div className={style.windDataCnt}>
          <h3>
            Wind direction - {windDirName} ({windDirNum})
          </h3>
          <div className={style.windSpeedGustCnt}>
            <div className={style.windCnt}>
              <h3>{windGust}</h3>
              <div className={style.windDetails}>
                <p>M/S</p>
                <p>Gust</p>
              </div>
            </div>
            <div className={style.windCnt}>
              <h3>{windSpeed}</h3>
              <div className={style.windDetails}>
                <p>M/S</p>
                <p>Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Wind;
