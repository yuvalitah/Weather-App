import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Paper, Box, styled } from "@mui/material";
import {
  CityAndCountryTextFields,
  ICityAndCountryTextField,
} from "../../input";
import { IWeather, IDailyForecast } from "../../../interfaces";
import { debounce } from "../../../debounce";
import {
  convertApiWeatherObjToClientObj,
  convertApiWeatherForecastObjToClientObj,
  getWeatherAndForecastDataByCityAndCountryName,
  getWeatherAndForecastDataByGeolocation,
} from "../../../utils";
import { WeatherCard } from "../../weatherCard";
import {
  IApiDailyWeatherForecastObj,
  IApiWeatherObj,
} from "../../../api/interfaces";
import { useSnackbar, useQuery } from "../../../hooks";
import { AxiosError } from "axios";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
  flex: 1,
}));

export const HomePage = () => {
  const [formFields, setFormFields] = useState<ICityAndCountryTextField>({
    city: "",
    country: "",
  });
  const queryParams = useQuery();
  const [weather, setWeather] = useState<IWeather>();
  const [weatherDailyForecast, setWeatherDailyForecast] = useState<
    IDailyForecast[]
  >([]);
  const { openSnackbar } = useSnackbar();

  const handleApiResponses = useCallback(
    (
      celciusWeather: IApiWeatherObj,
      farenheitWeather: IApiWeatherObj,
      celciusWeatherForecast: IApiDailyWeatherForecastObj,
      farenheitWeatherForecast: IApiDailyWeatherForecastObj
    ) => {
      if (
        celciusWeather.cod === 200 &&
        farenheitWeather.cod === 200 &&
        celciusWeatherForecast.cod === "200" &&
        farenheitWeatherForecast.cod === "200"
      ) {
        const weatherObj: IWeather = convertApiWeatherObjToClientObj(
          celciusWeather,
          farenheitWeather
        );
        setWeather(weatherObj);

        const weatherDailyForecastObj: IDailyForecast[] =
          convertApiWeatherForecastObjToClientObj(
            celciusWeatherForecast,
            farenheitWeatherForecast
          );
        setWeatherDailyForecast(weatherDailyForecastObj);
        openSnackbar("Location was found successfully!", "success");
      }
    },
    [openSnackbar]
  );

  const debouncedSearch = useMemo(
    () =>
      debounce(async (country: string, city: string): Promise<void> => {
        try {
          const [
            celciusWeatherResponse,
            farenheitWeatherResponse,
            celciusWeatherForecastResponse,
            farenheitWeatherForecastResponse,
          ] = await getWeatherAndForecastDataByCityAndCountryName(
            country,
            city
          );

          handleApiResponses(
            celciusWeatherResponse.data,
            farenheitWeatherResponse.data,
            celciusWeatherForecastResponse.data,
            farenheitWeatherForecastResponse.data
          );
        } catch (e) {
          if (e instanceof AxiosError) {
            if (e.response?.status === 404) {
              openSnackbar(
                "Oops! We couldn't find any location that match your search",
                "error"
              );
            }
            if (e.response?.status === 429) {
              openSnackbar(
                "We have a free plan for the OpenWeather API and we've exceeded our number of requests, Please come back later",
                "error"
              );
            }
          }
        }
      }, 2000),
    [handleApiResponses, openSnackbar]
  );

  const getWeatherDataDebounceCallback = useCallback(
    (country: string, city: string) => debouncedSearch(country, city),
    [debouncedSearch]
  );

  const getWeatherDataByGeolocationCallback = useCallback(
    async (position: GeolocationPosition) => {
      try {
        const [
          celciusWeatherResponse,
          farenheitWeatherResponse,
          celciusWeatherForecastResponse,
          farenheitWeatherForecastResponse,
        ] = await getWeatherAndForecastDataByGeolocation(
          position.coords.latitude,
          position.coords.longitude
        );

        handleApiResponses(
          celciusWeatherResponse.data,
          farenheitWeatherResponse.data,
          celciusWeatherForecastResponse.data,
          farenheitWeatherForecastResponse.data
        );
      } catch (e) {
        if (e instanceof AxiosError) {
          if (e.response?.status === 404) {
            openSnackbar(
              "Oops! We couldn't find any location that match your search",
              "error"
            );
          }
          if (e.response?.status === 429) {
            openSnackbar(
              "We have a free plan for the OpenWeather API and we've exceeded our number of requests, Please come back later",
              "error"
            );
          }
        }
      }
    },
    [handleApiResponses, openSnackbar]
  );

  useEffect(() => {
    const { country, city } = formFields;
    if (country || city) {
      getWeatherDataDebounceCallback(country, city);
    } else if (queryParams.get("countryName") || queryParams.get("cityName")) {
      setFormFields({
        country: queryParams.get("countryName") || "",
        city: queryParams.get("cityName") || "",
      });
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          getWeatherDataByGeolocationCallback
        );
      }
    }
  }, [
    formFields,
    queryParams,
    getWeatherDataDebounceCallback,
    getWeatherDataByGeolocationCallback,
  ]);

  const handleOnChangeField = (name: string, value: string) =>
    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));

  return (
    <StyledPaper>
      <Box display="flex" flexDirection="column" pt={3}>
        <CityAndCountryTextFields
          handleOnChangeField={handleOnChangeField}
          cityAndCountryValues={formFields}
        />
      </Box>
      {weather && (
        <WeatherCard weather={weather} forecast={weatherDailyForecast} />
      )}
    </StyledPaper>
  );
};
