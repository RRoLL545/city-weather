/**
 * Интерфейс обекта с данными о прогнозе погоды
 */
export interface WeatherForecastData {
  date: string,
  weekDay: string,
  weatherConditionText: string,
  weatherConditionUrl: string,
  maxTemperature: string,
  minTemperature: string
}

/**
 * Интерфейс обекта с данными о погоде
 */
export interface WeatherData {
  current: {
    cityName: string,
    dayName: string,
    time: string,
    weatherConditionText: string,
    weatherConditionUrl: string,
    temperature: string,
    weatherIcon: string,
    precipitationChance: string,
    humidity: string,
    windSpeed: string
  },
  forecast: WeatherForecastData[]
}