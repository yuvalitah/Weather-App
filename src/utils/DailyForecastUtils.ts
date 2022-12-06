import { IApiDailyWeatherForecastObj } from "../api/interfaces";
import { IDailyForecast } from "../interfaces";
import moment from "moment";
import { getWeatherIconSrc } from "./WeatherUtils";

const filterFrom3HourForecastTo5DaysForecast = (
  weatherForecast: IApiDailyWeatherForecastObj
): IApiDailyWeatherForecastObj["list"] => {
  const filteredWeatherForecast: IApiDailyWeatherForecastObj["list"] =
    weatherForecast.list.filter(
      (forecast, _, currentWeatherForecastArray) =>
        new Date(forecast.dt_txt).getDay() !==
          new Date(currentWeatherForecastArray[0].dt_txt).getDay() &&
        new Date(forecast.dt_txt).getHours() ===
          new Date(currentWeatherForecastArray[0].dt_txt).getHours()
    );

  return [weatherForecast.list[0], ...filteredWeatherForecast];
};

export const convertApiWeatherForecastObjToClientObj = (
  celciusWeatherForecast: IApiDailyWeatherForecastObj,
  farenheitWeatherForecast: IApiDailyWeatherForecastObj
): IDailyForecast[] => {
  const filtered5DaysCelciusWeatherForecast =
    filterFrom3HourForecastTo5DaysForecast(celciusWeatherForecast);

  const filtered5DaysFarenheitWeatherForecast =
    filterFrom3HourForecastTo5DaysForecast(farenheitWeatherForecast);

  return filtered5DaysCelciusWeatherForecast.map((forecast, index) => ({
    day: moment(forecast.dt_txt).format("ddd"),
    icon: getWeatherIconSrc(forecast.weather[0].icon),
    temperature: {
      celcius: forecast.main.temp,
      farenheit: filtered5DaysFarenheitWeatherForecast[index].main.temp,
    },
  }));
};
