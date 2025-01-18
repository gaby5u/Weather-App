import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ForecastHours from "./components/Forecast/ForecastHours/ForecastHours";
import ForecastDays from "./components/Forecast/ForecastDays/ForecastDays";
import UvIndex from "./components/UvIndex/UvIndex";
import Wind from "./components/Wind/Wind";
import Search from "./components/Search";

import "./generalStyling.css";

function App() {
  return (
    <div className="wrapper">
      <div className="cnt">
        <div className="details-cnt">
          <Search />
          <CurrentWeather />
        </div>
        <div className="general-cnt">
          <ForecastHours />
          <ForecastDays />
          <div className="mini-cnt">
            <UvIndex />
            <Wind />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
