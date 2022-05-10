/**
 * Ключ для подключения к weather API 
 */
const WEATHER_API_KEY: string = 'd1bf1f91bf394ff0a1251938220605';

/**
 * Количество дней прогноза погоды
 */
export const FORECAST_DAYS_COUNT: number = 3;

/**
 * Язык приложения
 */
const LANGUAGE: string = 'ru';
export const LANGUAGE_LOCALE: string = 'ru-RU';

/**
 * Базовая адресная строка запроса прогноза погоды
 */
export const WEATHER_FORECAST_BASIC_API_URL: string = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&days=${FORECAST_DAYS_COUNT}&lang=${LANGUAGE}&q=`
