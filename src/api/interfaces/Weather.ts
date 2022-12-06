interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

interface IWind {
  speed: number;
}

interface ISysWeather {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IApiWeatherObj {
  cod: number;
  id: number;
  name: string;
  weather: IWeather[];
  main: IMainWeather;
  visibility: number;
  wind: IWind;
  sys: ISysWeather;
  dt: number;
}
