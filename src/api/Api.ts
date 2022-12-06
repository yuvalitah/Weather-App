import { AxiosResponse } from "axios";
import { axiosInstance as axios } from "../axios";
import {
  API_KEY,
  WEATHER_ENDPOINT,
  UNIT_PARAM,
  DATA,
  WEATHER_FORECAST_ENDPOINT,
} from "../constants";
import { IApiWeatherObj, IApiDailyWeatherForecastObj } from "./interfaces";

export const getWeatherDataByCityAndCountryName = (
  country: string,
  city: string,
  unit: string
): Promise<AxiosResponse<IApiWeatherObj>> =>
  axios.get(
    `${DATA}/${WEATHER_ENDPOINT}?q=${city || country},${
      country ? country : ""
    }&${UNIT_PARAM}=${unit}&APPID=${API_KEY}`
  );

export const getWeatherForecastDataByCityAndCountryName = (
  country: string,
  city: string,
  unit: string
): Promise<AxiosResponse<IApiDailyWeatherForecastObj>> =>
  axios.get(
    `${DATA}/${WEATHER_FORECAST_ENDPOINT}?q=${city || country},${
      country ? country : ""
    }&${UNIT_PARAM}=${unit}&APPID=${API_KEY}`
  );

export const getWeatherDataByGeolocation = (
  latitude: number,
  longitude: number,
  unit: string
): Promise<AxiosResponse<IApiWeatherObj>> =>
  axios.get(
    `${DATA}/${WEATHER_ENDPOINT}?lat=${latitude}&lon=${longitude}&${UNIT_PARAM}=${unit}&APPID=${API_KEY}`
  );

export const getWeatherForecastDataByGeolocation = (
  latitude: number,
  longitude: number,
  unit: string
): Promise<AxiosResponse<IApiDailyWeatherForecastObj>> =>
  axios.get(
    `${DATA}/${WEATHER_FORECAST_ENDPOINT}?lat=${latitude}&lon=${longitude}&${UNIT_PARAM}=${unit}&APPID=${API_KEY}`
  );
