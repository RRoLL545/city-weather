import { AppDispatch } from "..";
import { weatherForecastSlice } from "./weatherForecastSlice";
import { LANGUAGE_LOCALE, WEATHER_FORECAST_BASIC_API_URL } from "../../config/config";
import { WeatherData } from "../../interfaces/WeatherData";
import { capitalizeFirstLetter, getForecastArray, getPrecipitationChanceString, getTemperatureString, getUrlString, getWindSpeedString } from "../../utils/filterHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Выполняет асинхронный запрос данных с сервера
 * @param cityApiUrl название города данные о погоде которого нужны
 * @returns 
 */
export const fetchWeatherTest = (cityApiUrl: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherForecastSlice.actions.weatherFetching())
    const response = await fetch(WEATHER_FORECAST_BASIC_API_URL + cityApiUrl);
    const data = await response.json();
    dispatch(weatherForecastSlice.actions.weatherFetchingSuccess(filterData(data)))
  } catch (error) {
    dispatch(weatherForecastSlice.actions.weatherFetchingError(`Ошибка:
    Проверьте правильно ли введено название города;
    Мог закончится лимит на количество запросов;
    Проверьте наличие интернет подключения.
    `));
  }
}

/**
 * Фильтрует полученные данные о погоде
 * @param data обект с данными для фильтрации
 * @returns отфильтрованный обект с данными
 */
const filterData = (data: any): WeatherData => {
  const currentDate: Date = new Date(Date.now());
  return {
    current: {
      cityName: data.location.name,
      dayName: capitalizeFirstLetter(currentDate.toLocaleDateString(LANGUAGE_LOCALE, {weekday: 'long'})),
      time: currentDate.toLocaleTimeString(LANGUAGE_LOCALE, {hour: '2-digit', minute:'2-digit'}),
      weatherConditionText: data.current.condition.text,
      weatherConditionUrl: getUrlString(data.current.condition.icon),
      temperature: getTemperatureString(data.current.temp_c),
      weatherIcon: data.current.condition.text,
      precipitationChance: getPrecipitationChanceString(data.forecast.forecastday[0].day.daily_chance_of_rain, data.forecast.forecastday[0].day.daily_chance_of_snow),
      humidity: `${data.current.humidity}%`,
      windSpeed: getWindSpeedString(data.current.wind_kph)
    },
    forecast: getForecastArray(data.forecast.forecastday)
  }
}