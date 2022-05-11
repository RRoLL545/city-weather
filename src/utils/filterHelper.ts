import { LANGUAGE_LOCALE } from "../config/config";
import { WeatherForecastData } from "../interfaces/WeatherData";

/**
 * Делает первый символ строки заглавным
 * @param string строка
 * @returns строка с заглавным первым символом
 */
export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Возвращает отформатированную строку с температурой
 * @param temperature температура
 * @returns отформатированная строка с температурой
 */
export const getTemperatureString = (temperature: number): string => {
  return temperature > 0 ? `+${temperature}`.replace(/\./, ',') : `${temperature}`.replace(/\./, ',');
}

/**
 * Возвращает отформатированную строку с максимальной вероятностью осадков
 * @param value1 вероятность дождя
 * @param value2 вероятность снегопада
 * @returns отформатированная строка с максимальной вероятностью осадков
 */
export const getPrecipitationChanceString = (value1: number, value2: number): string => {
  return `${Math.max(value1, value2)}%`;
}

/**
 * Возвращает отформатированную строку со скоростью ветра
 * @param wind_kph скорость ветра км/ч
 * @returns отформатированная строка со скоростью ветра в м/с
 */
export const getWindSpeedString = (wind_kph: number): string => {
  return `${Math.round(wind_kph * 1000 / 60 / 60 * 100) / 100} м/с`.replace(/\./, ',');
}

/**
 * Возвращает отформатированную строку с url
 * @param url строка для форматирования
 * @returns отформатированная строку с url
 */
export const getUrlString = (url:string): string => {
  return `./assets/img/weather-icons${url.split('64x64')[1]}`;
}


export const getForecastArray = (forecastArr: any): WeatherForecastData[] => {
  const result: WeatherForecastData[] = forecastArr.map( (day: any, index: number) => {
    const dayDate: Date = new Date(day.date);
    return (
      {
        weekDay: index === 0 ? 'Сегодня' : capitalizeFirstLetter(dayDate.toLocaleDateString(LANGUAGE_LOCALE, {weekday: 'short'})),
        date: dayDate.toLocaleDateString(LANGUAGE_LOCALE, {day: '2-digit', month: 'long'}),
        weatherConditionUrl: getUrlString(day.day.condition.icon),
        maxTemperature: getTemperatureString(Math.round(day.day.maxtemp_c)),
        minTemperature: getTemperatureString(Math.round(day.day.mintemp_c)),
        weatherConditionText: day.day.condition.text
      }
    )}
  )
  return result;
}