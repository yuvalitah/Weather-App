import { IApiWeatherObj } from "../api/interfaces";
import { IWeather } from "../interfaces";
import moment from "moment";
import { IMG_ADDRESS } from "../constants";

export const getWeatherIconSrc = (icon: string) =>
  `${IMG_ADDRESS}/${icon}@2x.png`;

export const convertApiWeatherObjToClientObj = (
  celciusWeather: IApiWeatherObj,
  farenheitWeather: IApiWeatherObj
): IWeather => ({
  id: celciusWeather.id,
  name: celciusWeather.name,
  country: celciusWeather.sys.country,
  description: celciusWeather.weather[0].main,
  icon: getWeatherIconSrc(celciusWeather.weather[0].icon),
  temperature: {
    celcius: {
      currentTemperature: celciusWeather.main.temp,
      feelsLikeTemperature: celciusWeather.main.feels_like,
      maxTemperature: celciusWeather.main.temp_max,
      minTemperature: celciusWeather.main.temp_min,
    },
    farenheit: {
      currentTemperature: farenheitWeather.main.temp,
      feelsLikeTemperature: farenheitWeather.main.feels_like,
      maxTemperature: farenheitWeather.main.temp_max,
      minTemperature: farenheitWeather.main.temp_min,
    },
  },
  humidity: celciusWeather.main.humidity,
  windSpeed: {
    celcius: celciusWeather.wind.speed,
    farenheit: farenheitWeather.wind.speed,
  },
  sunrise: moment(celciusWeather.sys.sunrise * 1000).format("hh:mm A"),
  sunset: moment(celciusWeather.sys.sunset * 1000).format("hh:mm A"),
  date: moment(celciusWeather.dt * 1000).format("dddd, D MMM YYYY"),
});

export const getTemperatureString = (
  temperature: number,
  unit: string
): string =>
  `${Math.floor(temperature)}${unit === "metric" ? "\u00b0C" : "\u00b0F"}`;

export const getWindSpeedString = (windSpeed: number, unit: string): string =>
  unit === "metric"
    ? `${Math.floor(windSpeed * 3.6)} km/h`
    : `${Math.floor(windSpeed)} mi/h`;
