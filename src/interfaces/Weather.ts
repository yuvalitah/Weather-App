interface ITemperature {
  currentTemperature: number;
  feelsLikeTemperature: number;
  maxTemperature: number;
  minTemperature: number;
}

export interface IWeather {
  id: number;
  name: string;
  country: string;
  description: string;
  icon: string;
  temperature: {
    celcius: ITemperature;
    farenheit: ITemperature;
  };
  humidity: number;
  windSpeed: {
    celcius: number;
    farenheit: number;
  };
  sunrise: string;
  sunset: string;
  date: string;
}
