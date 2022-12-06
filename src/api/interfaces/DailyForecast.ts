interface IDailyWeatherForecastMain {
  temp: number;
}

interface IDailyWeatherForecastItem {
  icon: string;
}

interface IDailyWeatherForecast {
  dt_txt: string;
  main: IDailyWeatherForecastMain;
  weather: IDailyWeatherForecastItem[];
}

export interface IApiDailyWeatherForecastObj {
  cod: string;
  list: IDailyWeatherForecast[];
}
