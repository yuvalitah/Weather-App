export interface IDailyForecast {
  day: string;
  icon: string;
  temperature: {
    celcius: number;
    farenheit: number;
  };
}
