import { useEffect, useState } from "react";
import styles from "../Forecast.module.css";
import ForecastDaysItem from "./ForecastDaysItem";
import { useSelector } from "react-redux";

import { setSelectedDayWeather } from "../../../redux/WeatherSlice";
import { useDispatch } from "react-redux";

const Forecast = () => {
  const { weatherData } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    setActiveCardIndex(0);
  }, [weatherData]);

  const changeWeatherData = (index, dayData) => {
    dispatch(setSelectedDayWeather(dayData));
    setActiveCardIndex(index);
  };

  const createForecastItem = () => {
    return weatherData.days.map((dayData, index) => (
      <ForecastDaysItem
        key={index}
        index={index}
        dayData={dayData}
        onClick={() => changeWeatherData(index, dayData)}
        isActive={index === activeCardIndex}
      />
    ));
  };

  return (
    <div className={styles.forecastCnt}>
      <div className={styles.title}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="15pt"
          height="15pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#777777"
            stroke="none"
          >
            <path
              d="M1155 5102 c-50 -23 -91 -70 -105 -120 -5 -20 -10 -83 -10 -138 l0
-102 -197 -4 c-222 -5 -279 -18 -403 -85 -100 -55 -217 -179 -269 -284 -83
-169 -76 7 -76 -1999 0 -2003 -6 -1830 75 -1996 74 -152 218 -277 389 -338
l86 -31 1915 0 1915 0 80 28 c225 79 391 258 452 487 17 61 18 179 18 1850 0
2007 7 1829 -77 2000 -59 120 -178 239 -298 297 -117 58 -203 73 -405 73
l-165 0 0 103 c0 121 -11 166 -51 212 -87 98 -252 78 -309 -39 -17 -35 -20
-62 -20 -159 l0 -117 -1139 0 -1139 0 -4 128 c-3 116 -5 132 -27 164 -55 79
-153 109 -236 70z m-113 -859 c4 -137 20 -179 80 -223 73 -53 166 -48 235 13
53 47 63 79 63 212 l0 115 1140 0 1140 0 0 -115 c0 -133 10 -165 63 -212 71
-62 168 -65 243 -8 53 40 68 85 72 218 l4 117 159 0 c135 0 166 -3 213 -20 69
-26 130 -85 164 -158 l27 -57 3 -307 4 -308 -2092 0 -2092 0 4 308 c3 268 6
312 21 347 28 64 66 111 109 140 72 48 102 54 274 54 l162 1 4 -117z m3606
-2370 l-3 -1258 -26 -55 c-31 -66 -85 -121 -148 -152 l-46 -23 -1865 0 -1865
0 -46 23 c-64 31 -117 85 -148 151 l-26 56 -3 1258 -2 1257 2090 0 2090 0 -2
-1257z"
            />
          </g>
        </svg>
        <h4>15-day forecast</h4>
      </div>
      <hr />
      <div className={styles.scrollMenu}>
        {weatherData ? createForecastItem() : ""}
      </div>
    </div>
  );
};

export default Forecast;
