export interface IFavoriteCity {
  id: number;
  city: string;
  country: string;
  icon: string;
  description: string;
  temperature: {
    celcius: number;
    farenheit: number;
  };
}
