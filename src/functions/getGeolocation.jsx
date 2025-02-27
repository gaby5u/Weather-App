import { fetchWeather } from "../redux/WeatherSlice";

const getGeolocation = (dispatch) =>
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(fetchWeather(`${latitude}, ${longitude}`));
    },
    (error) => {
      dispatch(fetchWeather("Moldova"));
    }
  );

export default getGeolocation;
