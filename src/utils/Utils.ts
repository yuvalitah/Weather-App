import {
  getWeatherDataByCityAndCountryName,
  getWeatherForecastDataByCityAndCountryName,
  getWeatherDataByGeolocation,
  getWeatherForecastDataByGeolocation,
} from "../api";

export const getWeatherAndForecastDataByCityAndCountryName = async (
  country: string,
  city: string
) => {
  return await Promise.all([
    getWeatherDataByCityAndCountryName(country, city, "metric"),
    getWeatherDataByCityAndCountryName(country, city, "imperial"),
    getWeatherForecastDataByCityAndCountryName(country, city, "metric"),
    getWeatherForecastDataByCityAndCountryName(country, city, "imperial"),
  ]);
};

export const getWeatherAndForecastDataByGeolocation = async (
  latitude: number,
  longitude: number
) => {
  return await Promise.all([
    getWeatherDataByGeolocation(latitude, longitude, "metric"),
    getWeatherDataByGeolocation(latitude, longitude, "imperial"),
    getWeatherForecastDataByGeolocation(latitude, longitude, "metric"),
    getWeatherForecastDataByGeolocation(latitude, longitude, "imperial"),
  ]);
};
