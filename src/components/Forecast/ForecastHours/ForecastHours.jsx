import { useEffect, useState } from "react";
import styles from "../Forecast.module.css";
import ForecastHoursItem from "./ForecastHoursItem";

import { useSelector } from "react-redux";

const ForecastHours = () => {
  const { weatherData } = useSelector((state) => state.weather);
  const dateTime = new Date();
  const hourBegin = dateTime.getHours();
  let [hours, setHours] = useState(null);

  const isActiveCardIndex = 0;

  useEffect(() => {
    if (weatherData) {
      setHours(weatherData.days[0].hours);
    }
  }, [weatherData]);

  const createForecastItem = () => {
    return hours
      .filter((hour) => {
        const hourString = hour.datetime;
        const forecastHour = parseInt(hourString.split(":")[0], 10);
        return forecastHour >= hourBegin;
      })
      .map((hour, index) => (
        <ForecastHoursItem
          key={index}
          index={index}
          dataHour={hour}
          isActive={index === isActiveCardIndex}
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
              d="M2330 5110 c-494 -48 -950 -230 -1350 -538 -195 -150 -448 -432 -594
-662 -63 -99 -186 -351 -230 -471 -49 -134 -102 -340 -128 -499 -31 -195 -31
-565 0 -760 45 -276 116 -498 237 -745 132 -269 269 -460 489 -681 221 -220
412 -357 681 -489 247 -121 469 -192 745 -237 195 -31 565 -31 760 0 276 45
498 116 745 237 269 132 460 269 681 489 220 221 357 412 489 681 88 179 132
296 180 476 63 240 78 371 78 649 0 278 -15 409 -78 649 -48 180 -92 297 -180
476 -132 269 -269 460 -489 681 -221 220 -412 357 -681 489 -246 121 -474 193
-740 235 -147 23 -475 34 -615 20z m468 -401 c488 -53 934 -270 1288 -623 415
-415 634 -943 634 -1526 0 -583 -219 -1111 -634 -1526 -415 -415 -943 -634
-1526 -634 -583 0 -1111 219 -1526 634 -415 415 -634 943 -634 1526 0 583 219
1111 634 1526 349 349 800 569 1276 623 110 12 376 13 488 0z"
            />
            <path
              d="M2474 3911 c-48 -22 -87 -70 -104 -126 -8 -29 -10 -215 -8 -665 3
-609 4 -626 24 -665 16 -32 96 -98 420 -343 219 -167 419 -315 444 -330 167
-100 364 79 280 253 -20 42 -61 75 -396 327 l-374 280 0 558 c0 390 -3 567
-11 591 -29 85 -102 139 -189 139 -25 0 -64 -9 -86 -19z"
            />
          </g>
        </svg>
        <h4>Hourly forecast</h4>
      </div>
      <hr />
      <div className={styles.scrollMenu}>
        {weatherData && hours ? createForecastItem() : ""}
      </div>
    </div>
  );
};

export default ForecastHours;
